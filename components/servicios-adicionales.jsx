"use client"

import { useState, useEffect, useRef } from "react"
import "./servicios-adicionales.css"

function CameraIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg> }
function UsersIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
function UserIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg> }
function SparkleIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg> }
function PackageIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg> }
function CheckIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> }
function ChevronIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg> }

const servicios = [
  { id: "fotoproducto", titulo: "Fotoproducto", subtitulo: "Contenido digital listo para publicar", icon: "camera", items: ["Catalogo fondo blanco", "MercadoLibre", "Ambientado", "Creativo", "Lifestyle"] },
  { id: "modelos", titulo: "Modelos", subtitulo: "Para tu produccion", icon: "users" },
  { id: "fotografo", titulo: "Fotografo profesional", subtitulo: "Excelente recomendacion", icon: "user" },
  { id: "contenido-integral", titulo: "Contenido Integral", subtitulo: "Con o sin modelo", icon: "sparkle", items: ["Fotoproducto", "Reels/Videos", "Paleta de colores", "Contenido para redes", "Edicion/Retoques", "Entrega digital lista para publicar"] },
  { id: "pack-preferencial", titulo: "Pack Preferencial", subtitulo: "Armamos lo que necesites segun tu idea", icon: "package", destacado: true, nota: "Nosotras nos ocupamos de la creacion del contenido para tu marca. Solo necesitas enviarnos los productos!" },
]

const iconComponents = { camera: CameraIcon, users: UsersIcon, user: UserIcon, sparkle: SparkleIcon, package: PackageIcon }

function ServicioCard({ servicio, index, isActive, onClick }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setTimeout(() => setIsVisible(true), index * 100) }, { threshold: 0.1 })
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  const isExpandable = servicio.items && servicio.items.length > 0
  const IconComponent = iconComponents[servicio.icon]

  return (
    <div
      ref={cardRef}
      onClick={isExpandable ? onClick : undefined}
      className={`servicios-adicionales__card ${isVisible ? 'servicios-adicionales__card--visible' : 'servicios-adicionales__card--hidden'} ${servicio.destacado ? 'servicios-adicionales__card--destacado' : ''} ${isExpandable ? 'servicios-adicionales__card--expandable' : ''}`}
    >
      {servicio.destacado && <div className="servicios-adicionales__card-gradient" />}

      <div className="servicios-adicionales__card-content">
        <div className="servicios-adicionales__card-header">
          <div className="servicios-adicionales__card-info">
            <div className="servicios-adicionales__card-icon"><IconComponent /></div>
            <div>
              <h3 className="servicios-adicionales__card-title">{servicio.titulo}</h3>
              <p className="servicios-adicionales__card-subtitle">{servicio.subtitulo}</p>
            </div>
          </div>
          {isExpandable && (
            <div className={`servicios-adicionales__card-chevron ${isActive ? 'servicios-adicionales__card-chevron--active' : ''}`}><ChevronIcon /></div>
          )}
        </div>

        {servicio.items && (
          <div className={`servicios-adicionales__items ${isActive ? 'servicios-adicionales__items--active' : 'servicios-adicionales__items--inactive'}`}>
            <div className="servicios-adicionales__items-inner">
              <div className="servicios-adicionales__items-grid">
                {servicio.items.map((item, i) => (
                  <div key={i} className="servicios-adicionales__item" style={{ transitionDelay: `${i * 50}ms` }}>
                    <span className="servicios-adicionales__item-check"><CheckIcon /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {servicio.nota && <p className="servicios-adicionales__card-nota">*{servicio.nota}</p>}
      </div>

      <div className="servicios-adicionales__card-line" />
    </div>
  )
}

export function ServiciosAdicionales() {
  const [activeId, setActiveId] = useState(null)
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setTitleVisible(true) }, { threshold: 0.1 })
    if (titleRef.current) observer.observe(titleRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="servicios-adicionales">
      <div className="servicios-adicionales__container">
        <div ref={titleRef} className={`servicios-adicionales__header ${titleVisible ? 'servicios-adicionales__header--visible' : 'servicios-adicionales__header--hidden'}`}>
          <span className="servicios-adicionales__label">Lo que ofrecemos</span>
          <h2 className="servicios-adicionales__title">Servicios Adicionales</h2>
          <div className="servicios-adicionales__line" />
        </div>

        <div className="servicios-adicionales__grid">
          {servicios.map((servicio, index) => (
            <ServicioCard key={servicio.id} servicio={servicio} index={index} isActive={activeId === servicio.id} onClick={() => setActiveId(activeId === servicio.id ? null : servicio.id)} />
          ))}
        </div>

        <p className={`servicios-adicionales__footer ${titleVisible ? 'servicios-adicionales__footer--visible' : 'servicios-adicionales__footer--hidden'}`}>
          Hace click en las tarjetas para ver mas detalles
        </p>
      </div>
    </section>
  )
}
