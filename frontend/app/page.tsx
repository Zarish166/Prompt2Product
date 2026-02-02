'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { TeamMemberCard } from '@/components/team-member-card'
import { Button } from '@/components/ui/button'
import { Code2, Zap, Users, Target } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navigation />

      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Hero Section */}
          <section className="min-h-[calc(100vh-6rem)] grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 mb-20 md:mb-32">
            {/* Left side - Hero */}
            <div className="space-y-8 animate-in fade-in duration-1000">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground mb-4 text-balance">
                  Turn Natural Language Into Executable Code
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-light">
                  Describe your idea in plain English. Get complete, production-ready code within minutes.
                </p>
              </div>

              <div className="flex gap-4 pt-6 flex-wrap">
                <Link href="/describe">
                  <Button size="lg" className="btn-glow bg-primary hover:bg-primary/85 text-primary-foreground font-semibold shadow-lg hover:shadow-xl">
                    Start Building →
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="btn-glow border-secondary/50 text-foreground hover:bg-secondary/40 bg-transparent font-semibold hover:border-primary/50">
                  Upload File
                </Button>
              </div>

              {/* Recent projects section */}
              <div className="pt-12">
                <h3 className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wide">Recent projects</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Shipping Agent', tag: 'DA' },
                    { name: 'deepfake-audio-forensics', tag: 'DA' },
                    { name: 'Fine-Tuning', tag: 'DA' },
                    { name: 'Data Analysis', tag: 'DA' },
                  ].map((project) => (
                    <div
                      key={project.name}
                      className="flex items-center justify-between rounded-lg bg-card p-3 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-pointer group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">{project.name}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                        {project.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Icon card */}
            <div className="flex items-center justify-center animate-in fade-in duration-1000 delay-300">
              <div
                className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-secondary to-card border border-border flex items-center justify-center p-8 transition-transform duration-300"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              >
                <div className="text-primary opacity-70">
                  <Code2 size={140} />
                </div>
              </div>
            </div>
          </section>

          {/* Goal Section */}
          <section className="py-12 md:py-20 mb-20 md:mb-32 animate-in fade-in duration-1000 delay-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Lightning Fast',
                  description: 'Generate production-ready code in seconds, not hours.',
                },
                {
                  icon: Users,
                  title: 'For Everyone',
                  description: 'Whether you are a beginner or expert developer.',
                },
                {
                  icon: Target,
                  title: 'Get It Right',
                  description: 'Refine and iterate until your project is perfect.',
                },
              ].map((goal, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl bg-card border border-border p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <goal.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{goal.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{goal.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="py-12 md:py-20 mb-20 md:mb-32 animate-in fade-in duration-1000 delay-700">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
                Meet Our <span className="text-primary">Core Team</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
                Designed and Built by
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <TeamMemberCard
                name="Hamza Motiwala"
                initials="HM"
                gradientColor="bg-gradient-to-br from-blue-500 to-blue-700"
                github="https://github.com"
                linkedin="https://linkedin.com"
                email="bilal@example.com"
              />
              <TeamMemberCard
                name="Zarish Asim"
                initials="ZA"
                gradientColor="bg-gradient-to-br from-blue-500 to-blue-700"
                github="https://github.com"
                linkedin="https://linkedin.com"
                email="abdullah@example.com"
              />
              <TeamMemberCard
                name="Noor Fatima"
                initials="NF"
                gradientColor="bg-gradient-to-br from-blue-500 to-blue-700"
                github="https://github.com"
                linkedin="https://linkedin.com"
                email="umer@example.com"
              />
              <TeamMemberCard
                name="Ayesha Khan"
                initials="AK"
                gradientColor="bg-gradient-to-br from-blue-500 to-blue-700"
                github="https://github.com"
                linkedin="https://linkedin.com"
                email="hamza@example.com"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
