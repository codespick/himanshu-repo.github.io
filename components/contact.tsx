'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MapPin, Linkedin, Github, Mail, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const inquiryTypes = [
  { value: 'project', label: 'Project Discussion' },
  { value: 'opportunity', label: 'Job Opportunity' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'other', label: 'Other' },
]

export function Contact() {
  const containerRef = useScrollReveal()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'project',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      
      setFormData({ name: '', email: '', inquiryType: 'project', message: '' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 reveal text-center max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind? Let's discuss how I can help bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="reveal premium-card p-6 group">
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-shadow">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-1">Location</h3>
                  <p className="text-sm text-slate-400">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="reveal premium-card p-6 group" style={{ animationDelay: '100ms' }}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-1">Email</h3>
                  <a href="mailto:hgupta414243@gmail.com" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    hgupta414243@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="reveal premium-card p-6 group" style={{ animationDelay: '200ms' }}>
              <h3 className="font-bold text-slate-100 mb-4">Follow Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-indigo-500/50 hover:bg-indigo-950/50 hover:text-indigo-400 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/himanshu-gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800 transition-all"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 reveal premium-card p-8 space-y-6"
            style={{ animationDelay: '300ms' }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500/50 focus:ring-indigo-500/20"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500/50 focus:ring-indigo-500/20"
              />
            </div>

            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 focus:border-indigo-500/50 focus:ring-indigo-500/20 transition-colors"
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <Textarea
              name="message"
              placeholder="Tell me about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500/50 focus:ring-indigo-500/20 resize-none"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-lg gap-2 glow-indigo disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              I typically respond within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
