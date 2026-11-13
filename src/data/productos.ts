// ─────────────────────────────────────────────────────────────
// CATÁLOGO DE WHALE BLACK
// Para agregar una prenda: copia un bloque { ... }, cámbiale los
// datos y guarda. La página se actualiza sola.
//
// - slug: nombre corto para la dirección web (sin tildes ni espacios).
//   Ejemplo: "oversize-negra" → whaleblack.co/producto/oversize-negra
// - precio: en pesos, sin puntos. Ejemplo: 89000. Si aún no está
//   definido, deja null y la página muestra "Precio por confirmar".
// - colores: los tonos del dibujo de la camiseta (se usan mientras
//   no haya fotos reales).
// - fotos: cuando tengan la sesión de fotos, guarden las imágenes en
//   la carpeta /public/productos y pongan aquí la ruta, por ejemplo:
//   fotos: { frente: "/productos/oversize-negra-frente.jpg",
//            espalda: "/productos/oversize-negra-espalda.jpg" }
// ─────────────────────────────────────────────────────────────

export type Producto = {
  slug: string;
  nombre: string;
  categoria: "camisetas";
  precio: number | null;
  descripcion: string;
  tallas: string[];
  colores: { tela: string; borde: string; texto: string };
  fotos?: { frente: string; espalda: string };
};

const tallasCamiseta = ["S", "M", "L", "XL"];

export const productos: Producto[] = [
  {
    slug: "oversize-blanco-hueso",
    nombre: "Oversize blanco hueso",
    categoria: "camisetas",
    precio: null,
    descripcion: "Camiseta de corte oversize en tono blanco hueso.",
    tallas: tallasCamiseta,
    colores: { tela: "#EDE8DF", borde: "#CFC8BC", texto: "#2A2A2A" },
  },
  {
    slug: "oversize-negra",
    nombre: "Oversize negra",
    categoria: "camisetas",
    precio: null,
    descripcion: "Camiseta de corte oversize en negro.",
    tallas: tallasCamiseta,
    colores: { tela: "#161618", borde: "#55555A", texto: "#D9D9DC" },
  },
  {
    slug: "basica-gris-jaspe",
    nombre: "Básica gris jaspe",
    categoria: "camisetas",
    precio: null,
    descripcion: "Camiseta básica de corte clásico en gris jaspe.",
    tallas: tallasCamiseta,
    colores: { tela: "#8A8A8F", borde: "#6F6F74", texto: "#1A1A1A" },
  },
  {
    slug: "boxy-fit-beige",
    nombre: "Boxy fit beige",
    categoria: "camisetas",
    precio: null,
    descripcion: "Camiseta de corte boxy fit en beige.",
    tallas: tallasCamiseta,
    colores: { tela: "#C9B79C", borde: "#AE9C82", texto: "#2A2418" },
  },
  {
    slug: "oversize-verde-oliva",
    nombre: "Oversize verde oliva",
    categoria: "camisetas",
    precio: null,
    descripcion: "Camiseta de corte oversize en verde oliva.",
    tallas: tallasCamiseta,
    colores: { tela: "#5B6146", borde: "#4A4F38", texto: "#E8E6D8" },
  },
  {
    slug: "basica-azul-noche",
    nombre: "Básica azul noche",
    categoria: "camisetas",
    precio: null,
    descripcion: "Camiseta básica de corte clásico en azul noche.",
    tallas: tallasCamiseta,
    colores: { tela: "#2B3A55", borde: "#3E4F6E", texto: "#DCE4F0" },
  },
];

export function buscarProducto(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}

// Categorías que se muestran en "Arma tu outfit".
export const categorias = [
  "Bermudas de algodón perchado",
  "Jeans",
  "Tenis",
  "Medias",
  "Boxers",
];
