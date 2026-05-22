'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const roles = [
  'Full Stack Developer',
  'React & Next.js Expert',
  'Node.js Backend Engineer',
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentRole = roles[roleIndex]

    if (isTyping) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
        }, 50)
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1))
        }, 30)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedRole, isTyping, roleIndex])

  const handleContactClick = () => {
      const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1btujU7Z3AVxAJ1C6D_dNOBC0tTWqfWgh";

      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Himanshu-Gupta-Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 reveal active">
            {/* Open to work badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/50">
              <span className="inline-flex h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">Available for opportunities</span>
            </div>

            {/* Name with gradient */}
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-tight">
                <span className="gradient-text">Himanshu</span>
                <br />
                <span className="gradient-text">Gupta</span>
              </h1>

              {/* Typing effect */}
              <div className="text-xl md:text-2xl font-semibold text-slate-300 h-8">
                <span>{displayedRole}</span>
                <span className={`inline-block w-1 h-8 ml-1 ${isTyping ? 'animate-pulse' : ''}`} style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }} />
              </div>

              {/* Subtitle */}
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                Crafting high-performance web applications with modern technologies. Specialized in scalable architecture, seamless user experiences, and production-grade code.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/himanshu-gupta-393905230/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-950/50 transition-all hover:shadow-lg hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-indigo-400" />
              </a>
              <a
                href="https://github.com/repo-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-1"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-slate-300" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold gap-2 rounded-xl glow-indigo shadow-lg"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                onClick={handleContactClick}
                className="border-2 border-indigo-500/30 bg-transparent hover:bg-indigo-500/10 text-slate-100 font-semibold rounded-xl transition-all"
                variant="outline"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right - Premium Avatar */}
          <div className="flex justify-center items-center reveal active animation-delay-300">
            <div className="relative group">
              {/* Glowing halo background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Gradient border circle */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <Avatar className="h-72 w-72 rounded-full border-4 border-slate-800 relative shadow-2xl group-hover:shadow-indigo-500/20 transition-shadow">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Himanshu Gupta"
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                  HG
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-xs text-slate-400 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-indigo-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
