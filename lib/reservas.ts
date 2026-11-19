export type Reserva = {
  codigo: string;
  nombre: string;
  correo: string;
  fecha: string;
  hora: string;
  personas: number;
  experiencia: string;
  vino?: string;
  creada: string;
};

const KEY = "demo-vinedo-reservas";

export function leerReservas(): Reserva[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Reserva[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function guardarReserva(
  r: Omit<Reserva, "codigo" | "creada">,
): Reserva {
  const codigo = `VG-${new Date().getFullYear()}-${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;
  const reserva: Reserva = {
    ...r,
    codigo,
    creada: new Date().toISOString(),
  };
  const todas = leerReservas();
  todas.unshift(reserva);
  window.localStorage.setItem(KEY, JSON.stringify(todas));
  return reserva;
}

export function eliminarReserva(codigo: string): void {
  const todas = leerReservas().filter((r) => r.codigo !== codigo);
  window.localStorage.setItem(KEY, JSON.stringify(todas));
}
