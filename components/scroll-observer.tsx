'use client'

import { useEffect } from 'react'

export function ScrollObserver() {
  useEffect(() => {
    // Wait for DOM to be ready
    const setupObserver = () => {
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

      // Get all reveal elements
      const revealElements = document.querySelectorAll('.reveal')
      
      revealElements.forEach((el) => {
        // Check if element is already in viewport on initial load
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
    }

    // Use requestAnimationFrame to ensure DOM is ready
    const id = requestAnimationFrame(() => {
      setupObserver()
    })

    return () => cancelAnimationFrame(id)
  }, [])

  return null
}
