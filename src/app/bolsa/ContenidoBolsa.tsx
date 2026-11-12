"use client";

import Link from "next/link";
import { useBolsa } from "@/components/Bolsa";
import { CamisetaDibujo } from "@/components/CamisetaDibujo";
import { IconoWhatsApp } from "@/components/Iconos";
import { enlaceWhatsApp } from "@/config/tienda";
import { buscarProducto } from "@/data/productos";
import { formatoPrecio } from "@/lib/precio";

// Lista de lo que el cliente agregó. Por ahora el pedido se termina por
// WhatsApp; más adelante aquí se conecta el pago con Wompi o Mercado Pago.

export function ContenidoBolsa() {
  const { items, cambiarCantidad } = useBolsa();

  const lineas = items.flatMap((item) => {
    const producto = buscarProducto(item.slug);
    return producto ? [{ ...item, producto }] : [];
  });

  if (lineas.length === 0) {
    return (
      <div className="bolsa-vacia">
        <p className="texto-suave">Tu bolsa está vacía.</p>
        <Link href="/#perchero" className="boton-claro">Ver el perchero</Link>
      </div>
    );
  }

  const total = lineas.reduce((suma, l) => suma + (l.producto.precio ?? 0) * l.cantidad, 0);
  const faltanPrecios = lineas.some((l) => l.producto.precio === null);

  const mensaje = [
    "¡Hola Whale Black! Quiero hacer este pedido:",
    ...lineas.map(
      (l) => `• ${l.cantidad} x ${l.producto.nombre} (talla ${l.talla}) — ${formatoPrecio(l.producto.precio)}`,
    ),
    faltanPrecios ? "Total: por confirmar" : `Total: ${formatoPrecio(total)}`,
  ].join("\n");

  return (
    <div className="bolsa-fila">
      <ul className="bolsa-lista">
        {lineas.map((l) => (
          <li key={`${l.slug}-${l.talla}`} className="bolsa-item">
            <div className="bolsa-miniatura">
              <CamisetaDibujo producto={l.producto} lado="frente" />
            </div>
            <div style={{ flex: 1 }}>
              <Link href={`/producto/${l.slug}`} className="bolsa-nombre">{l.producto.nombre}</Link>
              <p className="texto-suave">Talla {l.talla} · {formatoPrecio(l.producto.precio)}</p>
            </div>
            <div className="cantidad" role="group" aria-label={`Cantidad de ${l.producto.nombre}`}>
              <button type="button" aria-label="Quitar una" onClick={() => cambiarCantidad(l.slug, l.talla, l.cantidad - 1)}>−</button>
              <span aria-live="polite">{l.cantidad}</span>
              <button type="button" aria-label="Agregar una" onClick={() => cambiarCantidad(l.slug, l.talla, l.cantidad + 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <aside className="bolsa-resumen">
        <div className="bolsa-total">
          <span>Total</span>
          <span>{faltanPrecios ? "Por confirmar" : formatoPrecio(total)}</span>
        </div>
        <p className="texto-suave">Te confirmamos disponibilidad, envío y forma de pago por WhatsApp.</p>
        <a href={enlaceWhatsApp(mensaje)} target="_blank" rel="noopener noreferrer" className="boton-claro">
          <IconoWhatsApp />
          Pedir por WhatsApp
        </a>
      </aside>
    </div>
  );
}
