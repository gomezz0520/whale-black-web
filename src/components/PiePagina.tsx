import { enlaceWhatsApp, tienda } from "@/config/tienda";

export function PiePagina() {
  const red = (url: string) => (url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : { href: "/#contacto" });

  return (
    <footer id="contacto" className="pie">
      <div className="contenedor pie-fila">
        <div className="pie-marca">
          <span className="logo" style={{ fontSize: 20 }}>WHALE BLACK</span>
          <p>Moda en tendencia con entrega el mismo día en Medellín.</p>
        </div>
        <div className="pie-columnas">
          <div className="pie-columna">
            <span className="pie-columna-titulo">Ayuda</span>
            <a href="/#contacto">Guía de tallas</a>
            <a href="/#contacto">Cambios y devoluciones</a>
            <a href="/#contacto">Envíos</a>
          </div>
          <div className="pie-columna">
            <span className="pie-columna-titulo">Síguenos</span>
            <a {...red(tienda.instagram)}>Instagram</a>
            <a {...red(tienda.tiktok)}>TikTok</a>
            <a href={enlaceWhatsApp()} target="_blank" rel="noopener noreferrer">
              WhatsApp {tienda.whatsapp ? `+${tienda.whatsapp}` : "[NÚMERO]"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
