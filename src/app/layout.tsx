import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { BolsaProveedor } from "@/components/Bolsa";
import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import "./globals.css";

// Este es el "marco" que envuelve todas las páginas: encabezado arriba,
// pie de página abajo y el contenido de cada página en el medio.

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--fuente-texto" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--fuente-titulos" });

export const metadata: Metadata = {
  title: { default: "Whale Black", template: "%s · Whale Black" },
  description: "Moda en tendencia con entrega el mismo día en Medellín. Camisetas, bermudas, jeans y tenis.",
};

export const viewport: Viewport = { themeColor: "#0B0B0C" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <BolsaProveedor>
          <div className="pagina">
            <Encabezado />
            <main>{children}</main>
            <PiePagina />
          </div>
        </BolsaProveedor>
      </body>
    </html>
  );
}
