"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BotonBolsa } from "./BotonBolsa";
import { IconoBuscar, IconoCerrar, IconoMenu } from "./Iconos";

// Encabezado de la tienda. En computador el menú se ve completo; en celular
// se esconde detrás del botón de tres rayas para dejar más espacio a la ropa.

const menu = [
  { texto: "Nuevo", destino: "/#perchero" },
  { texto: "Camisetas", destino: "/#perchero" },
  { texto: "Bermudas", destino: "/#categorias" },
  { texto: "Jeans", destino: "/#categorias" },
  { texto: "Tenis", destino: "/#categorias" },
  { texto: "Medias y boxers", destino: "/#categorias" },
];

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const ruta = usePathname();

  // Cerrar el menú al cambiar de página.
  useEffect(() => setAbierto(false), [ruta]);

  // Cerrar el menú con la tecla Escape.
  useEffect(() => {
    if (!abierto) return;
    const alPresionar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alPresionar);
    return () => window.removeEventListener("keydown", alPresionar);
  }, [abierto]);

  return (
    <header className="encabezado">
      <div className="contenedor encabezado-fila">
        <Link href="/" className="logo">WHALE BLACK</Link>
        <nav
          id="menu-principal"
          aria-label="Categorías"
          className={abierto ? "menu abierto" : "menu"}
        >
          {menu.map((item) => (
            <Link key={item.texto} href={item.destino} onClick={() => setAbierto(false)}>
              {item.texto}
            </Link>
          ))}
        </nav>
        <div className="encabezado-botones">
          {/* El buscador todavía no funciona: se conecta cuando haya más prendas. */}
          <button type="button" aria-label="Buscar" className="boton-icono">
            <IconoBuscar />
          </button>
          <BotonBolsa />
          <button
            type="button"
            className="boton-icono boton-menu"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            aria-controls="menu-principal"
            onClick={() => setAbierto(!abierto)}
          >
            {abierto ? <IconoCerrar /> : <IconoMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
