"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./iluminacion.css";

const iluminacion = [
  {
    id: 1,
    src: "/iluminacion/iluminacion-3.jpg",
    alt: "Lampara de pie",
    titulo: "Lampara de Pie",
    descripcion: "Iluminacion auxiliar con cabezales ajustables",
    gridArea: "lampara",
  },
  {
    id: 2,
    src: "/iluminacion/iluminacion-2.jpg",
    alt: "Luz natural filtrada",
    titulo: "Luz Natural",
    descripcion: "Grandes ventanales con cortinas de lino difusoras",
    gridArea: "natural",
  },
  {
    id: 3,
    src: "/iluminacion/iluminacion-1.jpg",
    alt: "Sistema de spots",
    titulo: "Spots Direccionales",
    descripcion: "Riel con 4 focos orientables",
    gridArea: "spots",
  },
  {
    id: 4,
    src: "/iluminacion/iluminacion-4.jpg",
    alt: "Softboxes profesionales",
    titulo: "Softboxes",
    descripcion: "Kit de iluminacion continua profesional",
    gridArea: "softbox",
  },
];

function XIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Iluminacion() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section ref={sectionRef} className="iluminacion">
      <div className="iluminacion__container">
        <div
          className={`iluminacion__header ${isVisible ? "iluminacion__header--visible" : "iluminacion__header--hidden"}`}
        >
          <span className="iluminacion__label">Nuestra</span>
          <h2 className="iluminacion__title">Iluminacion</h2>
          <p className="iluminacion__description">
            Luz natural y artificial para lograr la atmosfera perfecta en cada
            sesion
          </p>
        </div>

        {/* Mobile Grid */}
        <div className="iluminacion__mobile-grid">
          {iluminacion.map((item, index) => (
            <div
              key={item.id}
              className={`iluminacion__mobile-item ${isVisible ? "iluminacion__mobile-item--visible" : "iluminacion__mobile-item--hidden"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => openLightbox(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="iluminacion__mobile-image"
                sizes="100vw"
              />
              <div className="iluminacion__mobile-overlay" />
              <div className="iluminacion__mobile-content">
                <h3 className="iluminacion__mobile-title">{item.titulo}</h3>
                <p className="iluminacion__mobile-desc">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Bento Grid */}
        <div className="iluminacion__desktop-grid">
          {iluminacion.map((item, index) => (
            <div
              key={item.id}
              className={`iluminacion__desktop-item iluminacion__desktop-item--${item.gridArea} ${isVisible ? "iluminacion__desktop-item--visible" : "iluminacion__desktop-item--hidden"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => openLightbox(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="iluminacion__desktop-image"
                sizes="33vw"
              />
              <div className="iluminacion__desktop-overlay" />
              <div className="iluminacion__desktop-content">
                <h3 className="iluminacion__desktop-title">{item.titulo}</h3>
                <p className="iluminacion__desktop-desc">{item.descripcion}</p>
              </div>
              <div className="iluminacion__desktop-corner" />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && selectedImage && (
        <div className="iluminacion__lightbox" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="iluminacion__lightbox-close"
          >
            <XIcon />
          </button>
          <div
            className="iluminacion__lightbox-image-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="iluminacion__lightbox-image"
              sizes="100vw"
              priority
            />
          </div>
          <div className="iluminacion__lightbox-caption">
            <h3 className="iluminacion__lightbox-title">
              {selectedImage.titulo}
            </h3>
            <p className="iluminacion__lightbox-desc">
              {selectedImage.descripcion}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
