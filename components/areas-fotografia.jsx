"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "./areas-fotografia.css";

const images = [
  {
    src: "/areas-fotograficas/area-fotografia-1.jpg",
    alt: "Vista completa del estudio",
    category: "Estudio",
  },
  {
    src: "/areas-fotograficas/area-fotografia-2.jpg",
    alt: "Equipamiento de iluminacion",
    category: "Ambientacion",
  },
  {
    src: "/areas-fotograficas/area-fotografia-3.jpg",
    alt: "Setup fotografico con sillon butterfly",
    category: "Equipamiento",
  },
  {
    src: "/areas-fotograficas/area-fotografia-4.jpg",
    alt: "Escalera decorativa de madera",
    category: "Props",
  },
  {
    src: "/areas-fotograficas/area-fotografia-14.jpg",
    alt: "Setup fotografico",
    category: "Equipamiento",
  },
  {
    src: "/areas-fotograficas/area-fotografia-15.jpg",
    alt: "Setup fotografico",
    category: "Ambientacion",
  },
  {
    src: "/areas-fotograficas/area-fotografia-5.jpg",
    alt: "Setup fotografico",
    category: "Ambientacion",
  },
  {
    src: "/areas-fotograficas/area-fotografia-16.jpg",
    alt: "Setup fotografico",
    category: "Equipamiento",
  },

  {
    src: "/areas-fotograficas/area-fotografia-6.jpg",
    alt: "Detalles decorativos con plantas y escalera",
    category: "Detalles",
  },
  {
    src: "/areas-fotograficas/area-fotografia-7.jpg",
    alt: "Luces",
    category: "Equipamiento",
  },
  {
    src: "/areas-fotograficas/area-fotografia-8.jpg",
    alt: "Ambiente con sillon",
    category: "Ambientacion",
  },
  {
    src: "/areas-fotograficas/area-fotografia-17.jpg",
    alt: "Setup fotografico",
    category: "Equipamiento",
  },
  {
    src: "/areas-fotograficas/area-fotografia-9.jpg",
    alt: "Ambiente con sillon",
    category: "Ambientacion",
  },
  {
    src: "/areas-fotograficas/area-fotografia-10.jpg",
    alt: "Ambiente con sillon",
    category: "Props",
  },
  {
    src: "/areas-fotograficas/area-fotografia-11.jpg",
    alt: "Ambiente con sillon",
    category: "Props",
  },
  {
    src: "/areas-fotograficas/area-fotografia-12.jpg",
    alt: "Ambiente con sillon",
    category: "Ambientacion",
  },
  {
    src: "/areas-fotograficas/area-fotografia-13.jpg",
    alt: "Ambiente con sillon",
    category: "Props",
  },
];

function ChevronLeft() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
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

export function AreasFotografia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (!isPaused && !isLightboxOpen) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isLightboxOpen, nextSlide]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <section
        ref={sectionRef}
        className="areas-fotografia"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="areas-fotografia__container">
          <div
            className={`areas-fotografia__header ${isVisible ? "areas-fotografia__header--visible" : "areas-fotografia__header--hidden"}`}
          >
            <p className="areas-fotografia__label">Conoce nuestro espacio</p>
            <h2 className="areas-fotografia__title">Areas de Fotografia</h2>
            <p className="areas-fotografia__description">
              Un espacio disenado para capturar la esencia de cada proyecto.
            </p>
          </div>

          <div
            className={`areas-fotografia__carousel ${isVisible ? "areas-fotografia__carousel--visible" : "areas-fotografia__carousel--hidden"}`}
          >
            <div
              className="areas-fotografia__main-image"
              onClick={() => openLightbox(activeIndex)}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`areas-fotografia__image-wrapper ${index === activeIndex ? "areas-fotografia__image-wrapper--active" : "areas-fotografia__image-wrapper--inactive"}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="areas-fotografia__image"
                    sizes="1200px"
                    priority={index === 0}
                  />
                </div>
              ))}

              <div className="areas-fotografia__overlay">
                <span className="areas-fotografia__overlay-text">
                  Click para ampliar
                </span>
              </div>

              <div className="areas-fotografia__badge">
                {images[activeIndex].category}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="areas-fotografia__nav-btn areas-fotografia__nav-btn--prev"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="areas-fotografia__nav-btn areas-fotografia__nav-btn--next"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="areas-fotografia__thumbnails">
              <div className="areas-fotografia__thumbnails-scroll">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`areas-fotografia__thumbnail ${index === activeIndex ? "areas-fotografia__thumbnail--active" : ""}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="areas-fotografia__thumbnail-image"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="areas-fotografia__progress">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`areas-fotografia__progress-dot ${index === activeIndex ? "areas-fotografia__progress-dot--active" : ""}`}
                />
              ))}
            </div>

            <div className="areas-fotografia__counter">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div className="areas-fotografia__lightbox" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="areas-fotografia__lightbox-close"
          >
            <XIcon />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) => (prev - 1 + images.length) % images.length,
              );
            }}
            className="areas-fotografia__lightbox-nav areas-fotografia__lightbox-nav--prev"
          >
            <ChevronLeft />
          </button>
          <div
            className="areas-fotografia__lightbox-image-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="areas-fotografia__lightbox-image"
              sizes="100vw"
              priority
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % images.length);
            }}
            className="areas-fotografia__lightbox-nav areas-fotografia__lightbox-nav--next"
          >
            <ChevronRight />
          </button>
          <div className="areas-fotografia__lightbox-counter">
            {lightboxIndex + 1} de {images.length}
          </div>
        </div>
      )}
    </>
  );
}
