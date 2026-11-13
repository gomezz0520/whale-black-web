import Link from "next/link";
import { BotonBolsa } from "./BotonBolsa";
import { IconoBuscar } from "./Iconos";

const menu = [
  { texto: "Nuevo", destino: "/#perchero" },
  { texto: "Camisetas", destino: "/#perchero" },
  { texto: "Bermudas", destino: "/#categorias" },
  { texto: "Jeans", destino: "/#categorias" },
  { texto: "Tenis", destino: "/#categorias" },
  { texto: "Medias y boxers", destino: "/#categorias" },
];

export function Encabezado() {
  return (
    <header className="encabezado">
      <div className="contenedor encabezado-fila">
        <Link href="/" className="logo">WHALE BLACK</Link>
        <nav aria-label="Categorías" className="menu">
          {menu.map((item) => (
            <Link key={item.texto} href={item.destino}>{item.texto}</Link>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8 }}>
          {/* El buscador todavía no funciona: se conecta cuando haya más prendas. */}
          <button type="button" aria-label="Buscar" className="boton-icono">
            <IconoBuscar />
          </button>
          <BotonBolsa />
        </div>
      </div>
    </header>
  );
}
