"use client"

import { useEffect, useRef, useState } from "react"
import "./tabla-precios.css"

function ClockIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}

function CalendarIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
}

const precios = [
  { duracion: "2 Horas", precio: "$60.000", descripcion: "Sesion express", icon: "clock" },
  { duracion: "4 Horas", precio: "$90.000", descripcion: "Media jornada", icon: "clock" },
  { duracion: "6 Horas", precio: "$140.000", descripcion: "Jornada extendida", icon: "clock" },
  { duracion: "1 Jornada", precio: "$200.000", descripcion: "9 a 18hs completo", icon: "calendar" },
]

function PrecioCard({ option, index, isVisible }) {
  return (
    <div 
      className={`tabla-precios__card ${isVisible ? 'tabla-precios__card--visible' : 'tabla-precios__card--hidden'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      
      <div className="tabla-precios__card-inner">
        <div className="tabla-precios__card-gradient" />
        
        <div className="tabla-precios__card-icon">
          {option.icon === 'clock' ? <ClockIcon /> : <CalendarIcon />}
        </div>
        
        <h3 className="tabla-precios__card-duration">{option.duracion}</h3>
        <p className="tabla-precios__card-desc">{option.descripcion}</p>
        
        <div>
          <span className="tabla-precios__card-price">{option.precio}</span>
        </div>
        
        <div className="tabla-precios__card-accent" />
      </div>
    </div>
  )
}

export function TablaPrecios() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section ref={sectionRef} className="tabla-precios">
      <div className="tabla-precios__bg">
        <div className="tabla-precios__bg-circle-1" />
        <div className="tabla-precios__bg-circle-2" />
      </div>
      
      <div className="tabla-precios__container">
        <div className={`tabla-precios__header ${isVisible ? 'tabla-precios__header--visible' : 'tabla-precios__header--hidden'}`}>
          <p className="tabla-precios__label">Tarifas</p>
          <h2 className="tabla-precios__title">Area de Fotografia</h2>
          <div className="tabla-precios__line" />
        </div>
        
        <div className="tabla-precios__grid">
          {precios.map((option, index) => (
            <PrecioCard key={option.duracion} option={option} index={index} isVisible={isVisible} />
          ))}
        </div>
        
        <p className={`tabla-precios__footer ${isVisible ? 'tabla-precios__footer--visible' : 'tabla-precios__footer--hidden'}`}>
          Todos los precios incluyen acceso completo al equipamiento del estudio
        </p>
      </div>
    </section>
  )
}
