import Link from "next/link";
import { productos } from "@/data/productos";
import { formatoPrecio } from "@/lib/precio";
import { CamisetaVolteable } from "./CamisetaVolteable";
import { IconoGancho } from "./Iconos";

// El perchero: una barra con las camisetas colgadas y balanceándose.

export function Perchero() {
  const camisetas = productos.filter((p) => p.categoria === "camisetas");

  return (
    <section id="perchero" className="contenedor perchero">
      <div className="perchero-encabezado">
        <div>
          <p className="etiqueta" style={{ marginBottom: 10 }}>EL PERCHERO</p>
          <h2 className="titulo-seccion">Camisetas de la semana</h2>
        </div>
        <p className="texto-suave" style={{ maxWidth: 340 }}>
          Pasa el cursor o toca una camiseta para darle la vuelta y ver la espalda.
        </p>
      </div>

      <div className="perchero-barra-zona">
        <div aria-hidden="true" className="perchero-barra" />
        <div className="perchero-grilla">
          {camisetas.map((producto) => (
            <div key={producto.slug} className="perchero-item">
              <div className="sway">
                <IconoGancho />
                <CamisetaVolteable producto={producto} />
              </div>
              <Link href={`/producto/${producto.slug}`} className="perchero-nombre">
                {producto.nombre}
              </Link>
              <p className="perchero-ayuda">Toca para ver la espalda</p>
              <p className="perchero-precio">{formatoPrecio(producto.precio)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
