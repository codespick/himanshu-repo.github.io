'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'S.S. Jain Subodh P.G. College (Autonomous)',
    location: 'Jaipur',
    graduationDate: 'June 2023',
    cgpa: '8.1/10',
    highlights: ['Computer Science', 'Web Development', 'Database Systems', 'Software Engineering'],
  },
  {
    degree: 'Senior Secondary (Science)',
    institution: 'Maheshwari Public School',
    location: 'Jaipur',
    graduationDate: 'July 2020',
    percentage: '63%',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
]

export function Education() {
  const containerRef = useScrollReveal()

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Formal education combined with continuous self-learning and industry experience
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="reveal premium-card p-8 group relative overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-indigo-500 to-purple-500 transition-opacity duration-300 -z-10" />

              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">
                        {edu.cgpa || edu.percentage}
                      </div>
                      <p className="text-xs text-slate-400 font-mono">
                        {edu.cgpa ? 'CGPA' : 'Score'}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>{edu.graduationDate}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 font-mono hover:border-indigo-500/50 transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
