'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const skillsData = {
  frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Redux',
    'React Router',
    'HTML5',
    'CSS3',
    'Web Performance',
    'Responsive Design',
    'UI/UX Implementation',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'NestJS',
    'Python',
    'Flask',
    'REST APIs',
    'GraphQL',
    'Authentication',
    'Microservices',
    'Database Design',
    'API Security',
    'Server Optimization',
  ],
  devops: [
    'Docker',
    'AWS',
    'CI/CD',
    'GitHub Actions',
    'Deployment',
    'Cloud Architecture',
    'Monitoring',
    'Error Tracking',
    'Performance Optimization',
    'Scalability',
    'DevOps Practices',
    'Infrastructure',
  ],
  tools: [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Elasticsearch',
    'Redis',
    'Firebase',
    'Git',
    'GitHub',
    'Stripe',
    'Razorpay',
    'Webpack',
    'Jest',
  ],
}

const categoryColors = {
  frontend: {
    bg: 'bg-blue-950/50',
    border: 'border-blue-500/30',
    text: 'text-blue-300',
    hover: 'hover:border-blue-500/50 hover:bg-blue-950/80',
  },
  backend: {
    bg: 'bg-green-950/50',
    border: 'border-green-500/30',
    text: 'text-green-300',
    hover: 'hover:border-green-500/50 hover:bg-green-950/80',
  },
  devops: {
    bg: 'bg-purple-950/50',
    border: 'border-purple-500/30',
    text: 'text-purple-300',
    hover: 'hover:border-purple-500/50 hover:bg-purple-950/80',
  },
  tools: {
    bg: 'bg-slate-800/50',
    border: 'border-slate-700',
    text: 'text-slate-300',
    hover: 'hover:border-slate-600 hover:bg-slate-800',
  },
}

export function Skills() {
  const containerRef = useScrollReveal()
  const [activeTab, setActiveTab] = useState('frontend')

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A comprehensive toolkit built through years of hands-on development and continuous learning
          </p>
        </div>

        {/* Skills Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="reveal">
          <TabsList className="grid w-full max-w-md grid-cols-4 bg-slate-900/50 border border-slate-800 p-1 rounded-lg mb-8">
            {Object.keys(skillsData).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize text-xs sm:text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-md transition-all"
              >
                {category === 'devops' ? 'DevOps' : category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillsData).map(([category, skills]) => {
            const colors = categoryColors[category as keyof typeof categoryColors]
            return (
              <TabsContent key={category} value={category} className="space-y-6 fade-in">
                <div className="premium-card p-8">
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, idx) => (
                      <Badge
                        key={skill}
                        className={`px-4 py-2.5 text-sm font-medium font-mono rounded-full border cursor-pointer transition-all hover:scale-110 ${colors.bg} ${colors.border} ${colors.text} ${colors.hover}`}
                        style={{
                          animationDelay: `${idx * 30}ms`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Completed' },
            { number: '50+', label: 'Technologies' },
            { number: '100%', label: 'Dedication' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="reveal premium-card p-6 text-center"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
