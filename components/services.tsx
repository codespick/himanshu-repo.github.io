'use client'

import { Zap, Wrench, ShoppingCart } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const services = [
  {
    icon: Zap,
    title: 'Fast & Scalable Frontend',
    description: 'Building high-performance user interfaces with React, Next.js, and TypeScript. Optimized for speed, accessibility, and excellent user experience.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-400 to-cyan-400',
    accentColor: 'text-blue-400'
  },
  {
    icon: Wrench,
    title: 'Robust Backend APIs',
    description: 'Creating scalable backend systems with Node.js, NestJS, and databases. RESTful APIs, real-time systems, and cloud deployment expertise.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-green-400 to-teal-400',
    accentColor: 'text-green-400'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & SaaS',
    description: 'Complete solutions for online platforms with payment integration, analytics, and scalability. Experience with Razorpay, Stripe, and Elasticsearch.',
    technologies: ['Razorpay', 'Stripe', 'Elasticsearch', 'AWS'],
    gradient: 'from-orange-400 to-red-400',
    accentColor: 'text-orange-400'
  },
]

export function Services() {
  const containerRef = useScrollReveal()

  return (
    <section id="services" ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">What I Bring</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Expertise across the full stack to deliver complete solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="reveal premium-card p-8 overflow-hidden group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-slate-950" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 font-mono hover:border-slate-600 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
