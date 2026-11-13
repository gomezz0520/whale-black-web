"use client";

import Link from "next/link";
import { useBolsa } from "./Bolsa";
import { IconoBolsa } from "./Iconos";

export function BotonBolsa() {
  const { totalPrendas } = useBolsa();
  const etiqueta =
    totalPrendas > 0 ? `Bolsa de compras, ${totalPrendas} prendas` : "Bolsa de compras";

  return (
    <Link href="/bolsa" aria-label={etiqueta} className="boton-icono">
      <IconoBolsa />
      {totalPrendas > 0 && <span className="contador-bolsa" aria-hidden="true">{totalPrendas}</span>}
    </Link>
  );
}
