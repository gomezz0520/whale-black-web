import { IconoCamara } from "./Iconos";

export function Probador() {
  return (
    <section aria-labelledby="probador" className="contenedor probador-zona">
      <div className="probador">
        <div className="probador-texto">
          <p className="etiqueta">PRÓXIMAMENTE</p>
          <h2 id="probador" className="probador-titulo">Pruébatela con tu cámara</h2>
          <p className="probador-detalle">
            Abre la cámara del celular o del computador y mira cómo te queda la camiseta antes de
            comprarla.
          </p>
        </div>
        <div className="probador-vista">
          <IconoCamara />
          <span style={{ fontSize: 14 }}>Vista del probador</span>
        </div>
      </div>
    </section>
  );
}
