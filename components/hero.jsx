"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import "./hero.css"

// Icon components
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero__background">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c7143dc4d024844ee68fb135ca2258a8-3AbTGvVGr57jyhvOkxlyWlTlhcmLjF.jpg"
          alt="Studio Halo - Espacio creativo"
          fill
          className="hero__background-image"
          priority
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__inner">
          {/* Logo/Title */}
          <div className={`hero__logo ${isVisible ? 'hero__logo--visible' : 'hero__logo--hidden'}`}>
            <h1 className="hero__title">
              <span className="hero__title-halo">HALO</span>
              <span className="hero__title-studio">STUDIO</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className={`hero__tagline ${isVisible ? 'hero__tagline--visible' : 'hero__tagline--hidden'}`}>
            Donde la moda, el diseno y la fotografia se encuentran
          </p>

          {/* Decorative line */}
          <div className={`hero__line ${isVisible ? 'hero__line--visible' : 'hero__line--hidden'}`} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`hero__scroll ${isVisible ? 'hero__scroll--visible' : 'hero__scroll--hidden'}`}>
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot" />
        </div>
      </div>

      {/* Contact Info */}
      <div className={`hero__contact ${isVisible ? 'hero__contact--visible' : 'hero__contact--hidden'}`}>
        <div className="hero__contact-inner">
          <div className="hero__contact-list">
            <a
              href="https://instagram.com/studiohalo"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__contact-item"
            >
              <div className="hero__contact-icon">
                <InstagramIcon />
              </div>
              <span className="hero__contact-text">@studiohalo</span>
            </a>

            <a href="mailto:studiohalo.ba@gmail.com" className="hero__contact-item">
              <div className="hero__contact-icon">
                <MailIcon />
              </div>
              <span className="hero__contact-text">studiohalo.ba@gmail.com</span>
            </a>

            <a href="tel:+5411-6973-1826" className="hero__contact-item">
              <div className="hero__contact-icon">
                <PhoneIcon />
              </div>
              <div>
                <span className="hero__contact-label">Nicole</span>
                <span className="hero__contact-text">11-6973-1826</span>
              </div>
            </a>
          </div>
        </div>
        <div className="hero__contact-line" />
      </div>
    </section>
  )
}
