import { Beneficios } from "@/components/Beneficios";
import { Categorias } from "@/components/Categorias";
import { Perchero } from "@/components/Perchero";
import { Portada } from "@/components/Portada";
import { Probador } from "@/components/Probador";

// Página de inicio: las secciones en el mismo orden del diseño aprobado.

export default function Inicio() {
  return (
    <>
      <Portada />
      <Beneficios />
      <Perchero />
      <Categorias />
      <Probador />
    </>
  );
}
