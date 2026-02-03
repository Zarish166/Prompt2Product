from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from sqlmodel import Session
import shutil
import os

from app.db.database import init_db, get_session, engine
from app.db import repo
from app.core.schemas import CreateProjectRequest, CreateRunRequest, RunStatusResponse
from app.services.orchestrator import Orchestrator
from app.services.workspace import project_workspace

app = FastAPI(title="Prompt2Product Backend (MVP)")

# Add CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For MVP, allow all. In prod, restrict to frontend URL.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

orch = Orchestrator()
from dotenv import load_dotenv
load_dotenv()

@app.on_event("startup")
def on_startup():
    init_db()

def run_project_generation(run_id: int, prompt: str):
    """
    Background task wrapper to handle DB session independently.
    """
    with Session(engine) as session:
        # Re-fetch run to ensure it's attached to this session if needed, 
        # but execute_run takes the run object. 
        # Better to fetch it freshly.
        run = repo.get_run(session, run_id)
        if run:
            orch.execute_run(session, run, prompt)

@app.post("/projects")
def create_project(payload: CreateProjectRequest, session: Session = Depends(get_session)):
    p = repo.create_project(session, payload.name)
    return p

@app.get("/projects")
def list_projects(session: Session = Depends(get_session)):
    return repo.list_projects(session)

@app.post("/projects/{project_id}/runs", response_model=RunStatusResponse)
def start_run(
    project_id: int, 
    payload: CreateRunRequest, 
    background_tasks: BackgroundTasks,
    session: Session = Depends(get_session)
):
    p = repo.get_project(session, project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    run = repo.create_run(session, project_id, entrypoint=payload.entrypoint)

    # Run in background
    background_tasks.add_task(run_project_generation, run.id, payload.prompt)

    return RunStatusResponse(run_id=run.id, status=run.status, attempts=run.attempts)

@app.get("/runs/{run_id}")
def get_run(run_id: int, session: Session = Depends(get_session)):
    r = repo.get_run(session, run_id)
    if not r:
        raise HTTPException(status_code=404, detail="Run not found")
    return r

@app.get("/runs/{run_id}/logs")
def get_logs(run_id: int, session: Session = Depends(get_session)):
    return repo.list_logs(session, run_id)

@app.get("/projects/{project_id}/runs/{run_id}/download")
def download_project(project_id: int, run_id: int, session: Session = Depends(get_session)):
    ws = project_workspace(project_id, run_id)
    if not ws.exists():
        raise HTTPException(status_code=404, detail="Workspace not found")
    
    # Zip the workspace
    # We want to zip the 'generated_app' inside the workspace if it exists, or the whole workspace
    target = ws / "generated_app"
    if not target.exists():
        target = ws 
    
    # Create zip in a temp location or inside workspace
    zip_path = shutil.make_archive(str(ws / "project_download"), 'zip', target)
    
    return FileResponse(
        zip_path, 
        media_type='application/zip', 
        filename=f"project_{project_id}_run_{run_id}.zip"
    )
