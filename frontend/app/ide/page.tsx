'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronDown, File, Folder, ArrowLeft } from 'lucide-react'

const PYTHON_CODE = `def hello_world():
    print("Hello, World!")

def greet(name):
    return f"Hello, {name}!"

class Calculator:
    @staticmethod
    def add(a, b):
        return a + b
    
    @staticmethod
    def multiply(a, b):
        return a * b

if __name__ == "__main__":
    print(greet("Prompt2Product"))
    calc = Calculator()
    print(calc.add(10, 5))
    print(calc.multiply(3, 4))`

export default function IDEPage() {
  const router = useRouter()
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['src', 'config'])

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName) ? prev.filter((f) => f !== folderName) : [...prev, folderName],
    )
  }

  const fileTree = [
    {
      id: 'src',
      name: 'src',
      type: 'folder' as const,
      children: [
        { id: 'main.py', name: 'main.py', type: 'file' as const, selected: true },
        { id: 'utils.py', name: 'utils.py', type: 'file' as const },
        { id: 'config.py', name: 'config.py', type: 'file' as const },
      ],
    },
    {
      id: 'config',
      name: 'config',
      type: 'folder' as const,
      children: [
        { id: 'settings.json', name: 'settings.json', type: 'file' as const },
        { id: 'requirements.txt', name: 'requirements.txt', type: 'file' as const },
      ],
    },
    { id: 'README.md', name: 'README.md', type: 'file' as const },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <div className="border-b border-border px-4 md:px-6 py-3 flex items-center justify-between bg-card mt-16">
        <Button
          onClick={() => router.push('/preview')}
          variant="ghost"
          size="sm"
          className="btn-glow text-foreground hover:bg-secondary/50 gap-2 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Preview
        </Button>
        <span className="text-xs md:text-sm text-muted-foreground">IDE Editor - Advanced Mode</span>
        <div className="w-16 md:w-24"></div>
      </div>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden">
        {/* Left Panel - Explorer */}
        <div className="border-r border-border bg-card overflow-y-auto">
          <div className="border-b border-border px-4 py-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explorer</p>
          </div>

          <div className="p-2">
            {fileTree.map((item) => (
              <div key={item.id}>
                {item.type === 'folder' ? (
                  <div>
                    <button
                      onClick={() => toggleFolder(item.id)}
                      className="flex w-full items-center gap-1 rounded px-2 py-1.5 text-sm text-foreground hover:bg-secondary transition-colors"
                    >
                      {expandedFolders.includes(item.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                      <Folder className="h-4 w-4 text-blue-400" />
                      <span className="text-sm">{item.name}</span>
                    </button>

                    {expandedFolders.includes(item.id) && item.children && (
                      <div className="ml-2">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            className={`flex w-full items-center gap-2 rounded px-2 py-1 text-sm transition-colors ${
                              child.selected
                                ? 'bg-primary/20 text-primary'
                                : 'text-muted-foreground hover:bg-secondary'
                            }`}
                          >
                            <File className="h-4 w-4" />
                            <span className="text-xs">{child.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className={`flex w-full items-center gap-2 rounded px-2 py-1 text-sm transition-colors ${
                      item.selected ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    <File className="h-4 w-4" />
                    <span className="text-xs">{item.name}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Panel - Code Editor */}
        <div className="border-r border-border flex flex-col">
          <div className="border-b border-border px-4 py-3 bg-card flex items-center gap-2">
            <File className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-foreground">main.py</span>
          </div>

          <div className="flex-1 overflow-auto font-mono text-xs">
            <div className="flex">
              <div className="w-12 bg-secondary text-muted-foreground py-4 px-3 text-right select-none border-r border-border">
                {PYTHON_CODE.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="flex-1 py-4 px-4 text-foreground bg-background">
                <pre className="whitespace-pre-wrap break-words">{PYTHON_CODE}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Console */}
        <div className="flex flex-col bg-card">
          <div className="border-b border-border px-4 py-3 flex items-center justify-between bg-card">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Console</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-400 font-medium">Running…</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto font-mono text-xs p-4 space-y-1">
            <div className="text-green-400">[INFO] Project loaded successfully</div>
            <div className="text-green-400">[INFO] Dependencies installed</div>
            <div className="text-green-400">[INFO] Starting development server on port 3000</div>
            <div className="text-green-400">[INFO] Hot reload enabled</div>
            <div className="text-green-400">[INFO] Watching for file changes...</div>
            <div className="text-green-400 mt-4">&gt; python main.py</div>
            <div className="text-foreground">Hello, Prompt2Product!</div>
            <div className="text-foreground">15</div>
            <div className="text-foreground">12</div>
          </div>
        </div>
      </main>
    </div>
  )
}
