/** Muestra un precio en pesos colombianos: 89000 → "$ 89.000". */
export function formatoPrecio(precio: number | null): string {
  if (precio === null) return "Precio por confirmar";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(precio);
}
