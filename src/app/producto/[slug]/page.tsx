import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CamisetaVolteable } from "@/components/CamisetaVolteable";
import { ElegirTalla } from "@/components/ElegirTalla";
import { buscarProducto, productos } from "@/data/productos";
import { formatoPrecio } from "@/lib/precio";

// Ficha de cada prenda. Next.js crea una página por cada producto del
// catálogo, por ejemplo /producto/oversize-negra.

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const producto = buscarProducto((await params).slug);
  return producto ? { title: producto.nombre, description: producto.descripcion } : {};
}

export default async function PaginaProducto({ params }: Props) {
  const producto = buscarProducto((await params).slug);
  if (!producto) notFound();

  return (
    <section className="contenedor ficha">
      <Link href="/#perchero" className="volver">← Volver al perchero</Link>
      <div className="ficha-fila">
        <div className="ficha-imagen">
          <CamisetaVolteable producto={producto} />
          <p className="perchero-ayuda" style={{ textAlign: "center" }}>Toca la camiseta para ver la espalda</p>
        </div>
        <div className="ficha-info">
          <p className="etiqueta">CAMISETAS</p>
          <h1 className="titulo-seccion">{producto.nombre}</h1>
          <p className="ficha-precio">{formatoPrecio(producto.precio)}</p>
          <p className="texto-suave">{producto.descripcion}</p>
          <ElegirTalla producto={producto} />
          <ul className="ficha-beneficios">
            <li>Entrega el mismo día en Medellín si pides antes del mediodía.</li>
            <li>Si no te queda, la cambiamos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
