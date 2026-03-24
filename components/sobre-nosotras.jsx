"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./sobre-nosotras.css";

export function SobreNosotras() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} className="sobre-nosotras">
      <div className="sobre-nosotras__line-top" />

      <div className="sobre-nosotras__container">
        <div className="sobre-nosotras__grid">
          {/* Text Content */}
          <div
            className={`sobre-nosotras__text ${isVisible ? "sobre-nosotras__text--visible" : "sobre-nosotras__text--hidden"}`}
          >
            <div className="sobre-nosotras__label">
              <div className="sobre-nosotras__label-line" />
              <span className="sobre-nosotras__label-text">Bienvenidos</span>
            </div>

            <h2 className="sobre-nosotras__title">Sobre nosotras</h2>

            <div className="sobre-nosotras__description">
              <p>
                Entre cafes, ideas sueltas y suenos compartidos, nacio la
                necesidad de construir un lugar distinto: un espacio donde la
                moda, el diseno y la fotografia se encuentren y se potencien.
              </p>
              <p>
                Asi surgio{" "}
                <span className="sobre-nosotras__highlight">STUDIO HALO</span>,
                un estudio creado para inspirar. Un punto de encuentro entre la
                estetica y la emocion, donde cada detalle —desde la luz hasta
                los colores— esta pensado para que las marcas y las personas se
                sientan comodas, fluyan y creen sin limites.
              </p>
            </div>

            <div
              className={`sobre-nosotras__signature ${isVisible ? "sobre-nosotras__signature--visible" : "sobre-nosotras__signature--hidden"}`}
            >
              <div className="sobre-nosotras__signature-icon">
                <Image
                  src="/logo.jpg"
                  alt="Logo Studio Halo"
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%" }}
                  priority
                />
              </div>
              <div>
                <p className="sobre-nosotras__signature-small">
                  Un espacio para
                </p>
                <p className="sobre-nosotras__signature-tagline">
                  crear sin limites
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`sobre-nosotras__image-wrapper ${isVisible ? "sobre-nosotras__image-wrapper--visible" : "sobre-nosotras__image-wrapper--hidden"}`}
          >
            <div className="sobre-nosotras__image-frame">
              <div className="sobre-nosotras__image-border" />
              <div className="sobre-nosotras__corner--top" />
              <div className="sobre-nosotras__corner--bottom" />

              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03d52e3869e2d974f57fbe68a7cb06cd%20%281%29-FElVd6zjeGRFZZzRso3l3bvkTx1PLG.jpg"
                alt="Interior de Studio Halo - espacio minimalista con espejo arqueado, alfombra bereber y luz natural"
                fill
                className="sobre-nosotras__image"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div
              className={`sobre-nosotras__floating-label ${isVisible ? "sobre-nosotras__floating-label--visible" : "sobre-nosotras__floating-label--hidden"}`}
            >
              <p className="sobre-nosotras__floating-small">Estudio</p>
              <p className="sobre-nosotras__floating-name">Studio Halo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sobre-nosotras__line-bottom" />
    </section>
  );
}
