// ─────────────────────────────────────────────────────────────
// DATOS DE CONTACTO DE LA TIENDA
// Cambia estos valores y se actualizan en toda la página.
// ─────────────────────────────────────────────────────────────

export const tienda = {
  nombre: "Whale Black",

  // Número de WhatsApp con código de país, sin "+", sin espacios.
  // Ejemplo: "573001234567". Mientras esté vacío, el botón abre
  // WhatsApp para que el cliente elija a quién escribir.
  whatsapp: "",

  // Enlaces a las redes. Déjalos vacíos si aún no los tienes.
  instagram: "",
  tiktok: "",
};

/** Arma el enlace de WhatsApp con un mensaje ya escrito. */
export function enlaceWhatsApp(mensaje?: string): string {
  const base = `https://wa.me/${tienda.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
