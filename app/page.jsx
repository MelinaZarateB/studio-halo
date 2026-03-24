import { Hero } from "../components/hero"
import { SobreNosotras } from "../components/sobre-nosotras"
import { PropuestaMobiliario } from "../components/propuesta-mobiliario"
import { AreasFotografia } from "../components/areas-fotografia"
import { Materiales } from "../components/materiales"
import { Iluminacion } from "../components/iluminacion"
import { TablaPrecios } from "../components/tabla-precios"
import { ServiciosAdicionales } from "../components/servicios-adicionales"
import { ConvivenciaHalo } from "../components/convivencia-halo"
import { Contacto } from "../components/contacto"

export default function Page() {
  return (
    <main className="main">
      <Hero />
      <SobreNosotras />
      <PropuestaMobiliario />
      <AreasFotografia />
      <Materiales />
      <Iluminacion />
      <TablaPrecios />
      <ServiciosAdicionales />
      <ConvivenciaHalo />
      <Contacto />
    </main>
  )
}
