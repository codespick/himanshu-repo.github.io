'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const experiences = [
  {
    id: 'exp3',
    company: 'Freelance & Independent Projects',
    position: 'Full Stack Developer',
    location: 'Jaipur, Rajasthan',
    period: 'Aug 2025 – Present',
    badge: 'Full Time',
    highlights: [
      'Working on personal and freelance web projects',
      'Deepening expertise in Next.js, TypeScript, system design, and AI integrations',
      'Building scalable applications with modern architectural patterns',
      'Contributing to open-source projects and building developer tools',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'React', 'AI Integration', 'System Design'],
  },
  {
    id: 'exp1',
    company: 'Helpful Insights Pvt Ltd',
    position: 'MERN Stack Developer',
    location: 'Jaipur, Rajasthan',
    period: 'May 2025 – Aug 2025',
    badge: 'Short-term Contract',
    highlights: [
      'Spearheaded end-to-end development of scalable applications using React.js, Next.js, TypeScript, Node.js, NestJS, and Python (Flask)',
      'Designed frontend architecture for high-traffic platforms, improving page load performance by 35%',
      'Developed secure backend APIs and integrated MongoDB & PostgreSQL databases',
      'Optimized CI/CD pipelines with automated testing to ensure 98% build stability',
      'Led developers, collaborated cross-functionally, and delivered projects from inception to deployment',
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'exp2',
    company: 'Deeporion Technology Pvt Ltd',
    position: 'Software Developer',
    location: 'Jaipur, Rajasthan',
    period: 'May 2022 – Dec 2024',
    duration: '2.8 years',
    badge: 'Full Time',
    highlights: [
      'Led development of React.js and Next.js applications, architecting frontend frameworks with TypeScript',
      'Built RESTful APIs in Node.js, improving API performance by 30%',
      'Enhanced payment APIs for 20% faster transactions',
      'Mentored junior developers, conducted code reviews, and implemented Agile practices',
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'Payment Integration', 'Agile'],
  },
]

export function Experience() {
  const containerRef = useScrollReveal()

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 reveal active">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A journey of building products, mentoring teams, and solving complex problems
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - removed */}

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className="reveal active"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Timeline dot and line */}
                <div className="flex gap-6">
                  {/* Dot */}
                  <div className="hidden md:flex flex-col items-center relative">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 ring-4 ring-slate-950 shadow-lg shadow-indigo-500/50 flex-shrink-0 mt-2" />
                    {idx < experiences.length - 1 && (
                      <div className="w-1 flex-1 bg-slate-700/50 mt-2" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <div className="premium-card p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-100">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-indigo-400 font-semibold mt-1">{exp.company}</p>
                          <p className="text-sm text-slate-400 mt-2">{exp.location} • {exp.period}</p>
                        </div>
                        <div className="flex-shrink-0">
                          {exp.badge === 'Full Time' ? (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30">
                              <span className="inline-flex h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                              <span className="text-xs font-bold text-emerald-400">{exp.badge}</span>
                            </div>
                          ) : (
                            <span className="inline-block px-3 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-xs font-bold text-blue-400">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hidx) => (
                            <li key={hidx} className="text-sm text-slate-300 flex gap-3">
                              <span className="text-indigo-400 flex-shrink-0">→</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-mono hover:border-indigo-500/50 hover:bg-slate-700 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
