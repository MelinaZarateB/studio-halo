"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./contacto.css";

const contactInfo = [
  {
    label: "Instagram",
    value: "@studiohalo",
    href: "https://instagram.com/studiohalo",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "studiohalo.ba@gmail.com",
    href: "mailto:studiohalo.ba@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Nicole",
    value: "11-6973-1826",
    href: "tel:+5411-6973-1826",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export function Contacto() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contacto" ref={sectionRef}>
      <div className="contacto-container">
        <div className="contacto-grid">
          {/* Image */}
          <div
            className={`contacto-image-wrapper ${isVisible ? "visible" : ""}`}
          >
            <div className="contacto-image-container">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b76fd1bb688d03bdbede4b8cff8645cb-M8pPYqTMhbUQeT8rfYMXzUQrZOM9Ej.jpg"
                alt="Cafe y bloc de notas"
                fill
                className="contacto-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="contacto-image-accent-1" />
            <div className="contacto-image-accent-2" />
          </div>

          {/* Content */}
          <div className={`contacto-content ${isVisible ? "visible" : ""}`}>
            <span className="contacto-label">
              <span className="contacto-label-line" />
              Contacto
            </span>
            <h2 className="contacto-title">Hablemos</h2>
            <p className="contacto-subtitle">
              Estamos para ayudarte a crear contenido increible
            </p>

            <div className="contacto-items">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contacto-item"
                >
                  <div className="contacto-item-icon">{item.icon}</div>
                  <div className="contacto-item-text">
                    <span className="contacto-item-label">{item.label}</span>
                    <span className="contacto-item-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`contacto-footer ${isVisible ? "visible" : ""}`}>
          <span className="contacto-footer-logo">HALO</span>
        </div>
      </div>
    </section>
  );
}
