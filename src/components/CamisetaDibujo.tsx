import type { Producto } from "@/data/productos";

// Dibuja la camiseta de frente o de espalda con los colores del producto.
// Si el producto ya tiene fotos reales, muestra la foto en su lugar.

const silueta =
  "L176 28 L198 78 L162 94 L156 80 L156 244 L44 244 L44 80 L38 94 L2 78 L24 28 Z";

export function CamisetaDibujo({ producto, lado }: { producto: Producto; lado: "frente" | "espalda" }) {
  const etiqueta = `Camiseta ${producto.nombre}, ${lado}`;

  if (producto.fotos) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={producto.fotos[lado]} alt={etiqueta} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    );
  }

  const { tela, borde, texto } = producto.colores;

  if (lado === "frente") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 250" role="img" aria-label={etiqueta}>
        <path d={`M70 6 Q100 34 130 6 ${silueta}`} fill={tela} stroke={borde} strokeWidth="2" strokeLinejoin="round" />
        <path d="M70 6 Q100 34 130 6" fill="none" stroke={borde} strokeWidth="3" />
        <text x="128" y="74" fontFamily="var(--fuente-titulos), sans-serif" fontWeight="700" fontSize="11" letterSpacing="1.5" fill={texto}>WB</text>
      </svg>
    );
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 250" role="img" aria-label={etiqueta}>
      <path d={`M70 6 Q100 20 130 6 ${silueta}`} fill={tela} stroke={borde} strokeWidth="2" strokeLinejoin="round" />
      <text x="100" y="118" textAnchor="middle" fontFamily="var(--fuente-titulos), sans-serif" fontWeight="700" fontSize="20" letterSpacing="3" fill={texto}>WHALE</text>
      <text x="100" y="144" textAnchor="middle" fontFamily="var(--fuente-titulos), sans-serif" fontWeight="700" fontSize="20" letterSpacing="3" fill={texto}>BLACK</text>
      <text x="100" y="166" textAnchor="middle" fontFamily="var(--fuente-texto), sans-serif" fontSize="9" letterSpacing="2" fill={texto}>MEDELLÍN</text>
    </svg>
  );
}
