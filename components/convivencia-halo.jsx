"use client";

import { useState, useEffect, useRef } from "react";
import "./convivencia-halo.css";

const rules = [
  {
    id: 1,
    title: "No fumar en el estudio",
    description: "Mantenemos un ambiente limpio y libre de humo",
    icon: (
      <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Ser cauteloso con el volumen de la musica",
    description: "Respetamos a nuestros vecinos y el ambiente de trabajo",
    icon: (
      <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Maximo 6 personas por produccion",
    description: "Para garantizar comodidad y calidad en cada sesion",
    icon: (
      <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "No arrastrar los muebles",
    description: "Cuidamos cada elemento del espacio",
    icon: (
      <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/>
        <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "No ingresar con calzado al estudio",
    description: "Preservamos la limpieza de los fondos y textiles",
    icon: (
      <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c0-3 2.5-6 7-6 1.5 0 2.8.4 4 1l6 3.5c2 1.2 3 2.5 3 4.5 0 2-1.5 3-3 3H4c-1.5 0-2-1-2-2v-4z"/>
        <path d="M6 12v3"/>
        <path d="M10 12v3"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Studio Halo fue creado con mucho amor, cuidemoslo entre todos",
    description: "Tu colaboracion hace la diferencia",
    icon: (
      <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

function RuleCard({ rule, index, isVisible }) {
  const isSpecial = index === rules.length - 1;

  return (
    <div
      className={`rule-card ${isVisible ? "visible" : ""} ${isSpecial ? "special" : ""}`}
      style={{ transitionDelay: `${index * 120 + 200}ms` }}
    >
      <div className="rule-icon-container">
        <div className="rule-ring" />
        {rule.icon}
      </div>
      <h3 className="rule-title">{rule.title}</h3>
      <p className="rule-description">{rule.description}</p>
    </div>
  );
}

export function ConvivenciaHalo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="convivencia" ref={sectionRef}>
      <div className="convivencia-container">
        <div className="convivencia-header">
          <span className="convivencia-label">
            <span className="convivencia-label-line" />
            Normas del espacio
            <span className="convivencia-label-line" />
          </span>
          <h2 className="convivencia-title">Convivencia Halo</h2>
          <p className="convivencia-subtitle">
            Para que todos disfrutemos del espacio, te pedimos que respetes estas simples normas
          </p>
        </div>

        <div className="rules-grid">
          {rules.map((rule, index) => (
            <RuleCard
              key={rule.id}
              rule={rule}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`convivencia-footer ${isVisible ? "visible" : ""}`}>
          <p className="convivencia-footer-text">Gracias por cuidar Studio Halo</p>
        </div>
      </div>
    </section>
  );
}
