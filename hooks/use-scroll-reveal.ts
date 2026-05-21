'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const revealElements = ref.current.querySelectorAll('.reveal')
    
    revealElements.forEach((el) => {
      // Check if already in viewport
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('active')
      } else {
        observer.observe(el)
      }
    })

    return () => {
      revealElements.forEach((el) => {
        try {
          observer.unobserve(el)
        } catch (e) {
          // Element might already be unobserved
        }
      })
    }
  }, [])

  return ref
}
