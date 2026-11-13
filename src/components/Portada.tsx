import { enlaceWhatsApp } from "@/config/tienda";
import { IconoWhatsApp } from "./Iconos";

export function Portada() {
  return (
    <section id="inicio" className="contenedor portada">
      <p className="etiqueta">MEDELLÍN · NUEVA COLECCIÓN</p>
      <h1 className="portada-titulo">Lo que está en tendencia, en tu puerta hoy.</h1>
      <p className="portada-texto">
        Camisetas, bermudas, jeans y tenis seleccionados cada semana. Pide antes del mediodía y
        te llega el mismo día en Medellín.
      </p>
      <div className="botones">
        <a href="#perchero" className="boton-claro">Ver el perchero</a>
        <a href={enlaceWhatsApp("¡Hola Whale Black! Quiero información.")} target="_blank" rel="noopener noreferrer" className="boton-borde">
          <IconoWhatsApp />
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
