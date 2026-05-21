'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const projects = [
  {
    title: 'Navo Ergonomics',
    subtitle: 'E-commerce Platform',
    description: 'A comprehensive e-commerce platform with wishlist management, shopping cart optimization, and integrated payment gateways. Implemented Elasticsearch for lightning-fast product search.',
    keyAchievement: '45% faster search',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Elasticsearch', 'MongoDB', 'PostgreSQL'],
    isClientProject: true,
    gradient: 'from-blue-400 to-cyan-400',
    accentColor: 'text-blue-400',
  },
  {
    title: 'Engagmo',
    subtitle: 'School Management System',
    description: 'A robust multi-timezone calendar system scaled to handle 10,000+ concurrent users with optimized performance and 99.9% uptime.',
    keyAchievement: '99.9% uptime',
    technologies: ['React.js', 'Next.js', 'PostgreSQL', 'MongoDB', 'Redux', 'AWS'],
    isClientProject: true,
    gradient: 'from-purple-400 to-pink-400',
    accentColor: 'text-purple-400',
  },
  {
    title: 'Pypestream',
    subtitle: 'AI Platform',
    description: 'An AI-powered platform with sophisticated API architecture, real-time payment processing, and enterprise-grade monitoring deployed on AWS with Docker.',
    keyAchievement: '30% faster APIs',
    technologies: ['Node.js', 'Docker', 'AWS', 'REST APIs', 'Payment APIs'],
    isClientProject: true,
    gradient: 'from-green-400 to-teal-400',
    accentColor: 'text-green-400',
  },
  {
    title: 'Super-Pro',
    subtitle: 'E-commerce Platform',
    description: 'An enterprise e-commerce solution with advanced onboarding flows and role-based access control. Reduced onboarding time by 50% and improved retention by 40%.',
    keyAchievement: '50% faster onboarding',
    technologies: ['React.js', 'TypeScript', 'Redux', 'MongoDB', 'PostgreSQL'],
    isClientProject: true,
    gradient: 'from-orange-400 to-red-400',
    accentColor: 'text-orange-400',
  },
]

export function Projects() {
  const containerRef = useScrollReveal()

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Crafted applications that solve real problems and deliver measurable impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="reveal premium-card overflow-hidden group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient background image placeholder */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} opacity-20 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold ${project.accentColor} tracking-widest`}>
                    {project.subtitle.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400">{project.subtitle}</p>
                </div>

                {/* Achievement Chip */}
                {project.keyAchievement && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30">
                    <span className="text-xs font-semibold text-indigo-400">⚡</span>
                    <span className="text-xs font-semibold text-indigo-300">{project.keyAchievement}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-indigo-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-800">
                  <Button
                    size="sm"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold gap-2 group/btn"
                  >
                    View Demo
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  {!project.isClientProject && (
                    <Button
                      size="sm"
                      className="flex-1 border border-slate-700 hover:border-slate-600 bg-slate-900/50 hover:bg-slate-800 text-slate-100 rounded-lg font-semibold gap-2"
                    >
                      Code
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.isClientProject && (
                    <div className="flex-1 flex items-center justify-center px-3 rounded-lg bg-slate-800/30 border border-slate-700 text-xs font-semibold text-slate-400">
                      Client Work
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
