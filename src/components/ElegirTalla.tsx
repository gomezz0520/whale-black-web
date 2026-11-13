"use client";

import Link from "next/link";
import { useState } from "react";
import type { Producto } from "@/data/productos";
import { enlaceWhatsApp } from "@/config/tienda";
import { useBolsa } from "./Bolsa";
import { IconoWhatsApp } from "./Iconos";

// Selector de talla + botón "Agregar a la bolsa" en la ficha del producto.

export function ElegirTalla({ producto }: { producto: Producto }) {
  const { agregar } = useBolsa();
  const [talla, setTalla] = useState<string | null>(null);
  const [agregado, setAgregado] = useState(false);
  const [aviso, setAviso] = useState(false);

  const alAgregar = () => {
    if (!talla) {
      setAviso(true);
      return;
    }
    agregar(producto.slug, talla);
    setAgregado(true);
  };

  return (
    <div className="ficha-compra">
      <fieldset className="tallas">
        <legend>Talla</legend>
        <div className="tallas-opciones">
          {producto.tallas.map((t) => (
            <button
              key={t}
              type="button"
              className={t === talla ? "talla elegida" : "talla"}
              aria-pressed={t === talla}
              onClick={() => {
                setTalla(t);
                setAviso(false);
                setAgregado(false);
              }}
            >
              {t}
            </button>
          ))}
        </div>
        {aviso && <p className="aviso" role="alert">Elige una talla primero.</p>}
      </fieldset>

      <div className="botones">
        <button type="button" className="boton-claro" onClick={alAgregar}>Agregar a la bolsa</button>
        <a
          className="boton-borde"
          target="_blank"
          rel="noopener noreferrer"
          href={enlaceWhatsApp(`¡Hola! Me interesa la camiseta ${producto.nombre}${talla ? ` en talla ${talla}` : ""}.`)}
        >
          <IconoWhatsApp />
          Preguntar por WhatsApp
        </a>
      </div>

      <p role="status" className="confirmacion">
        {agregado && (
          <>
            Listo, quedó en tu bolsa. <Link href="/bolsa">Ver la bolsa</Link>
          </>
        )}
      </p>
    </div>
  );
}
