// Íconos dibujados con SVG (los mismos del diseño aprobado).

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconoBuscar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  );
}

export function IconoBolsa() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function IconoWhatsApp({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z" />
    </svg>
  );
}

export function IconoFlecha() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconoCamion() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.8" {...base} stroke="#9CC7E8">
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export function IconoTarjeta() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.8" {...base} stroke="#9CC7E8">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

export function IconoCambio() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.8" {...base} stroke="#9CC7E8">
      <path d="M4 12a8 8 0 0 1 14-5.3L20 9" />
      <path d="M20 4v5h-5" />
      <path d="M20 12a8 8 0 0 1-14 5.3L4 15" />
      <path d="M4 20v-5h5" />
    </svg>
  );
}

export function IconoCamara() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.6" {...base}>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function IconoGancho() {
  return (
    <svg width="70" height="46" viewBox="0 0 70 46" fill="none" stroke="#8E8E93" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M35 14V9a5 5 0 1 0-5-5" />
      <path d="M35 14L4 40h62L35 14z" />
    </svg>
  );
}
