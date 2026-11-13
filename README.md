# Whale Black · tienda web

Página web de Whale Black hecha con **Next.js** (una herramienta muy usada para crear tiendas y sitios web modernos).

## Cómo verla en tu computador

1. Instala **Node.js** (versión 20 o más nueva) desde https://nodejs.org
2. Abre una terminal en esta carpeta y escribe, una sola vez:
   ```
   npm install
   ```
3. Para encender la página:
   ```
   npm run dev
   ```
4. Abre en el navegador: http://localhost:3000

Mientras `npm run dev` esté encendido, cada cambio que guardes aparece solo en el navegador.

## Qué archivo cambiar para cada cosa

| Quiero cambiar…                         | Archivo                         |
| --------------------------------------- | ------------------------------- |
| Precios, nombres, tallas, agregar prendas | `src/data/productos.ts`         |
| Número de WhatsApp, Instagram, TikTok   | `src/config/tienda.ts`          |
| Colores y tamaños de la página          | `src/app/globals.css`           |
| Textos de la portada                    | `src/components/Portada.tsx`    |
| El perchero                             | `src/components/Perchero.tsx`   |

## Páginas que existen

- `/` Inicio (el diseño aprobado, con el perchero de camisetas que se voltean)
- `/producto/oversize-negra` (y una por cada prenda): ficha con talla y "Agregar a la bolsa"
- `/bolsa`: la bolsa de compras; el pedido se envía por WhatsApp

`whale-black-inicio.html` es el diseño original aprobado; se deja como referencia.
