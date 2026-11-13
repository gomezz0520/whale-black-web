"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// La "bolsa de compras" (carrito). Recuerda lo que el cliente agregó,
// incluso si cierra la página, guardándolo en su navegador.

export type ItemBolsa = { slug: string; talla: string; cantidad: number };

type BolsaValor = {
  items: ItemBolsa[];
  totalPrendas: number;
  agregar: (slug: string, talla: string) => void;
  cambiarCantidad: (slug: string, talla: string, cantidad: number) => void;
  vaciar: () => void;
};

const BolsaContexto = createContext<BolsaValor | null>(null);
const LLAVE = "whale-black-bolsa";

export function BolsaProveedor({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemBolsa[]>([]);
  const [cargada, setCargada] = useState(false);

  // Al abrir la página: recuperar la bolsa guardada.
  useEffect(() => {
    try {
      const guardada = localStorage.getItem(LLAVE);
      if (guardada) setItems(JSON.parse(guardada));
    } catch {}
    setCargada(true);
  }, []);

  // Cada vez que cambia: guardarla.
  useEffect(() => {
    if (!cargada) return;
    try {
      localStorage.setItem(LLAVE, JSON.stringify(items));
    } catch {}
  }, [items, cargada]);

  const agregar = (slug: string, talla: string) =>
    setItems((actual) => {
      const existe = actual.find((i) => i.slug === slug && i.talla === talla);
      if (existe) {
        return actual.map((i) => (i === existe ? { ...i, cantidad: i.cantidad + 1 } : i));
      }
      return [...actual, { slug, talla, cantidad: 1 }];
    });

  const cambiarCantidad = (slug: string, talla: string, cantidad: number) =>
    setItems((actual) =>
      cantidad <= 0
        ? actual.filter((i) => !(i.slug === slug && i.talla === talla))
        : actual.map((i) => (i.slug === slug && i.talla === talla ? { ...i, cantidad } : i)),
    );

  const vaciar = () => setItems([]);
  const totalPrendas = items.reduce((suma, i) => suma + i.cantidad, 0);

  return (
    <BolsaContexto.Provider value={{ items, totalPrendas, agregar, cambiarCantidad, vaciar }}>
      {children}
    </BolsaContexto.Provider>
  );
}

export function useBolsa(): BolsaValor {
  const valor = useContext(BolsaContexto);
  if (!valor) throw new Error("useBolsa debe usarse dentro de <BolsaProveedor>");
  return valor;
}
