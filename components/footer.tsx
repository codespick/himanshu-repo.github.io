'use client'

import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/himanshu-gupta-393905230/', label: 'LinkedIn', color: 'text-blue-400' },
    { icon: Github, href: 'https://github.com/repo-tech', label: 'GitHub', color: 'text-slate-400' },
    { icon: Mail, href: 'mailto:hgupta414243@gmail.com', label: 'Email', color: 'text-red-400' },
  ]

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 pt-20 pb-8">
      {/* Top section with links and CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-slate-100 font-mono mb-2">HG</h3>
            <p className="text-slate-400 text-sm">
              Full Stack Developer crafting beautiful, scalable web applications
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-100 mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-100 mb-4 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all hover:-translate-y-1"
                    title={social.label}
                  >
                    <Icon className={`h-5 w-5 ${social.color}`} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400 flex items-center gap-1">
            <span>© {currentYear} Himanshu Gupta</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>Built with Next.js, React & Tailwind CSS</span>
          </div>

          <Button
            onClick={scrollToTop}
            size="sm"
            className="border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 rounded-lg gap-2 transition-all hover:border-indigo-500/50"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
