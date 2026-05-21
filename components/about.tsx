'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export function About() {
  const containerRef = useScrollReveal()

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mb-12">
            I&apos;m a passionate Full Stack Developer from Jaipur with 3+ years of hands-on experience building scalable web applications. I specialize in creating fast, performant solutions using modern technologies like React, Next.js, and Node.js.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main content */}
          <div className="reveal space-y-6">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">My Journey</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Starting as a full stack developer at Deeporion Technology, I've had the privilege of working on diverse projects ranging from e-commerce platforms to school management systems. My experience spans the entire development lifecycle, from architecture and design to deployment and optimization.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I believe in writing clean, maintainable code and have a passion for performance optimization. Whether it&apos;s reducing API response times by 30% or implementing search that&apos;s 45% faster, I&apos;m driven by measurable results and continuous improvement.
              </p>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">What Drives Me</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-indigo-400 flex-shrink-0">▪</span>
                  <span>Building products that solve real problems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 flex-shrink-0">▪</span>
                  <span>Writing scalable, maintainable code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 flex-shrink-0">▪</span>
                  <span>Mentoring junior developers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 flex-shrink-0">▪</span>
                  <span>Staying at the forefront of web technology</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            {[
              { number: '3+', label: 'Years of Experience', color: 'from-indigo-500 to-purple-500' },
              { number: '20+', label: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
              { number: '50+', label: 'Technologies Mastered', color: 'from-pink-500 to-red-500' },
              { number: '100%', label: 'Commitment to Quality', color: 'from-red-500 to-orange-500' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="reveal premium-card p-6 group hover:shadow-lg hover:shadow-indigo-500/20"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-block text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
