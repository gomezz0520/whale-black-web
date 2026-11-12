import { IconoCambio, IconoCamion, IconoTarjeta, IconoWhatsApp } from "./Iconos";

const beneficios = [
  { icono: <IconoCamion />, titulo: "Entrega el mismo día", detalle: "En toda Medellín" },
  { icono: <IconoTarjeta />, titulo: "Paga como quieras", detalle: "Tarjeta, PSE y Nequi" },
  { icono: <IconoCambio />, titulo: "Cambios fáciles", detalle: "Si no te queda, la cambiamos" },
  {
    icono: <span style={{ color: "#9CC7E8", display: "flex" }}><IconoWhatsApp size={24} strokeWidth={1.8} /></span>,
    titulo: "Asesoría por WhatsApp",
    detalle: "Te ayudamos con la talla",
  },
];

export function Beneficios() {
  return (
    <section aria-label="Beneficios" className="beneficios">
      <div className="contenedor beneficios-grilla">
        {beneficios.map((b) => (
          <div key={b.titulo} className="beneficio">
            {b.icono}
            <div>
              <p className="beneficio-titulo">{b.titulo}</p>
              <p className="beneficio-detalle">{b.detalle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
