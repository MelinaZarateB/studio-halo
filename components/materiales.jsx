"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./materiales.css";

const materiales = [
  {
    id: 1,
    src: "/materiales/materiales-2.jpg",
    alt: "Fondo textura piedra",
    titulo: "Texturados",
    descripcion: "Superficies con caracter para cada proyecto",
    gridArea: "fondos",
  },
  {
    id: 2,
    src: "/materiales/materiales-1.jpg",
    alt: "Cortinas de lino blanco",
    titulo: "Textiles",
    descripcion: "Cortinas que filtran la luz natural",
    gridArea: "textiles",
  },
  {
    id: 3,
    src: "/materiales/materiales-4.jpg",
    alt: "Ambiente completo del estudio",
    titulo: "Ambientacion",
    descripcion: "Composiciones curadas con textiles y arte",
    gridArea: "ambientacion",
  },
  {
    id: 4,
    src: "/materiales/materiales-5.jpg",
    alt: "Props decorativos naturales",
    titulo: "Elementos Naturales",
    descripcion: "Madera, fibras y texturas organicas",
    gridArea: "naturales",
  },
  {
    id: 5,
    src: "/materiales/materiales-3.jpg",
    alt: "Jarron ceramico escultural",
    titulo: "Artesanal",
    descripcion: "Piezas esculturales unicas",
    gridArea: "ceramica",
  },
  {
    id: 6,
    src: "/materiales/materiales-6.jpg",
    alt: "Silla plegable de pana",
    titulo: "Mobiliario",
    descripcion: "Sillas y asientos con texturas suaves",
    gridArea: "mobiliario",
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

export function Materiales() {
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

  const openLightbox = (material) => {
    setSelectedImage(material);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section ref={sectionRef} className="materiales">
      <div className="materiales__container">
        <div
          className={`materiales__header ${isVisible ? "materiales__header--visible" : "materiales__header--hidden"}`}
        >
          <span className="materiales__label">Nuestros</span>
          <h2 className="materiales__title">Materiales</h2>
          <p className="materiales__description">
            Texturas, fondos y elementos cuidadosamente seleccionados para
            elevar cada produccion
          </p>
        </div>

        {/* Mobile Grid */}
        <div className="materiales__mobile-grid">
          {materiales.map((material, index) => (
            <div
              key={material.id}
              className={`materiales__mobile-item ${isVisible ? "materiales__mobile-item--visible" : "materiales__mobile-item--hidden"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => openLightbox(material)}
            >
              <Image
                src={material.src}
                alt={material.alt}
                fill
                className="materiales__mobile-image"
                sizes="100vw"
              />
              <div className="materiales__mobile-overlay" />
              <div className="materiales__mobile-content">
                <h3 className="materiales__mobile-title">{material.titulo}</h3>
                <p className="materiales__mobile-desc">
                  {material.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Bento Grid */}
        <div className="materiales__desktop-grid">
          {materiales.map((material, index) => (
            <div
              key={material.id}
              className={`materiales__desktop-item materiales__desktop-item--${material.gridArea} ${isVisible ? "materiales__desktop-item--visible" : "materiales__desktop-item--hidden"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => openLightbox(material)}
            >
              <Image
                src={material.src}
                alt={material.alt}
                fill
                className="materiales__desktop-image"
                sizes="25vw"
              />
              <div className="materiales__desktop-overlay" />
              <div className="materiales__desktop-content">
                <h3 className="materiales__desktop-title">{material.titulo}</h3>
                <p className="materiales__desktop-desc">
                  {material.descripcion}
                </p>
              </div>
              <div className="materiales__desktop-corner" />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && selectedImage && (
        <div className="materiales__lightbox" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="materiales__lightbox-close"
          >
            <XIcon />
          </button>
          <div
            className="materiales__lightbox-image-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="materiales__lightbox-image"
              sizes="100vw"
              priority
            />
          </div>
          <div className="materiales__lightbox-caption">
            <h3 className="materiales__lightbox-title">
              {selectedImage.titulo}
            </h3>
            <p className="materiales__lightbox-desc">
              {selectedImage.descripcion}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
