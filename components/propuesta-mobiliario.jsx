"use client"

import { useEffect, useRef, useState } from "react"
import { MobiliarioCard } from "./mobiliario-card"
import "./propuesta-mobiliario.css"

const categories = [
  {
    category: "Iluminacion",
    categoryNumber: "01",
    items: [
      { name: "Luz natural", icon: "sun" },
      { name: "Softbox y Lampara de pie", icon: "lightbulb" },
      { name: "Perchero", icon: "hanger" },
    ],
  },
  {
    category: "Fondos y Texturas",
    categoryNumber: "02",
    items: [
      { name: "Alfombras con textura", icon: "carpet" },
      { name: "Espejo", icon: "mirror" },
      { name: "Sinfin fotografico blanco & textura piedra", icon: "backdrop" },
    ],
  },
  {
    category: "Decoracion",
    categoryNumber: "03",
    items: [
      { name: "Cortinas de lino blancas", icon: "curtain" },
      { name: "Cuadros", icon: "frame" },
      { name: "Accesorios decorativos", icon: "sparkle" },
    ],
  },
  {
    category: "Ambientacion y Equipo",
    categoryNumber: "04",
    items: [
      { name: "Ambientaciones tematicas", icon: "box" },
      { name: "Sillas y sillon", icon: "armchair" },
      { name: "Modelos & fotografos", icon: "users" },
    ],
  },
]

export function PropuestaMobiliario() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="propuesta-mobiliario">
      <div className="propuesta-mobiliario__pattern" />

      <div className="propuesta-mobiliario__container">
        {/* Section Header */}
        <div className={`propuesta-mobiliario__header ${isVisible ? 'propuesta-mobiliario__header--visible' : 'propuesta-mobiliario__header--hidden'}`}>
          <span className="propuesta-mobiliario__label">Equipamiento del estudio</span>
          <h2 className="propuesta-mobiliario__title">Propuesta Mobiliario</h2>
          <div className="propuesta-mobiliario__line" />
          <p className="propuesta-mobiliario__description">
            Cada elemento ha sido cuidadosamente seleccionado para crear el ambiente perfecto
            en tu estudio fotografico.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`propuesta-mobiliario__grid ${isVisible ? 'propuesta-mobiliario__grid--visible' : ''}`}>
          {categories.map((cat, index) => (
            <MobiliarioCard
              key={cat.categoryNumber}
              category={cat.category}
              categoryNumber={cat.categoryNumber}
              items={cat.items}
              index={index}
            />
          ))}
        </div>

        {/* Bottom counter */}
        <div className={`propuesta-mobiliario__counter ${isVisible ? 'propuesta-mobiliario__counter--visible' : 'propuesta-mobiliario__counter--hidden'}`}>
          <div className="propuesta-mobiliario__counter-item">
            <span className="propuesta-mobiliario__counter-number">12</span>
            <span className="propuesta-mobiliario__counter-label">Elementos</span>
          </div>
          <div className="propuesta-mobiliario__counter-divider" />
          <div className="propuesta-mobiliario__counter-item">
            <span className="propuesta-mobiliario__counter-number">4</span>
            <span className="propuesta-mobiliario__counter-label">Categorias</span>
          </div>
          <div className="propuesta-mobiliario__counter-divider" />
          <div className="propuesta-mobiliario__counter-item">
            <span className="propuesta-mobiliario__counter-number">1</span>
            <span className="propuesta-mobiliario__counter-label">Vision</span>
          </div>
        </div>
      </div>
    </section>
  )
}
