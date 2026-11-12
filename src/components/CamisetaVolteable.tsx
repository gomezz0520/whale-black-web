"use client";

import { useState } from "react";
import type { Producto } from "@/data/productos";
import { CamisetaDibujo } from "./CamisetaDibujo";

// La camiseta que se voltea: al pasar el cursor (en computador) o al
// tocarla (en celular) gira y muestra la espalda.

export function CamisetaVolteable({ producto }: { producto: Producto }) {
  const [volteada, setVolteada] = useState(false);

  return (
    <button
      type="button"
      className={volteada ? "shirt flipped" : "shirt"}
      onClick={() => setVolteada(!volteada)}
      aria-label={`Voltear camiseta ${producto.nombre}`}
      aria-pressed={volteada}
    >
      <div className="inner">
        <div className="face">
          <CamisetaDibujo producto={producto} lado="frente" />
        </div>
        <div className="face back">
          <CamisetaDibujo producto={producto} lado="espalda" />
        </div>
      </div>
    </button>
  );
}
