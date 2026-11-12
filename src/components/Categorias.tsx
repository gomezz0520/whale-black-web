import { categorias } from "@/data/productos";
import { IconoFlecha } from "./Iconos";

export function Categorias() {
  return (
    <section id="categorias" className="contenedor categorias">
      <p className="etiqueta" style={{ marginBottom: 10 }}>CATEGORÍAS</p>
      <h2 className="titulo-seccion" style={{ marginBottom: 40 }}>Arma tu outfit</h2>
      <div className="categorias-grilla">
        {categorias.map((nombre) => (
          <a key={nombre} href="#categorias" className="tarjeta-categoria">
            <div className="tarjeta-foto">FOTO DE PRODUCTO</div>
            <div className="tarjeta-pie">
              <span>{nombre}</span>
              <IconoFlecha />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
