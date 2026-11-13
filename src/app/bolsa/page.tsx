import type { Metadata } from "next";
import { ContenidoBolsa } from "./ContenidoBolsa";

export const metadata: Metadata = { title: "Tu bolsa" };

export default function PaginaBolsa() {
  return (
    <section className="contenedor bolsa">
      <p className="etiqueta" style={{ marginBottom: 10 }}>TU BOLSA</p>
      <h1 className="titulo-seccion" style={{ marginBottom: 40 }}>Bolsa de compras</h1>
      <ContenidoBolsa />
    </section>
  );
}
