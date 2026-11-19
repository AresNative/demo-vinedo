"use client";

import { useMemo, useState } from "react";
import { EXPERIENCIAS, HORARIOS } from "@/lib/data";
import { guardarReserva, type Reserva } from "@/lib/reservas";

export default function ReservationForm({
  vinoPreseleccionado,
}: {
  vinoPreseleccionado: string | null;
}) {
  const hoy = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState(HORARIOS[2]);
  const [personas, setPersonas] = useState(2);
  const [experiencia, setExperiencia] = useState(EXPERIENCIAS[1].id);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");
  const [confirmada, setConfirmada] = useState<Reserva | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fecha || !nombre.trim() || !correo.trim()) {
      setError("Completa la fecha, tu nombre y tu correo para continuar.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      setError("Revisa el correo electrónico, no tiene un formato válido.");
      return;
    }
    setError("");
    const experienciaNombre =
      EXPERIENCIAS.find((x) => x.id === experiencia)?.titulo ??
      "Degustación general";
    const reserva = guardarReserva({
      nombre: nombre.trim(),
      correo: correo.trim(),
      fecha,
      hora,
      personas,
      experiencia: experienciaNombre,
      vino: vinoPreseleccionado ?? undefined,
    });
    setConfirmada(reserva);
  }

  function otraReserva() {
    setConfirmada(null);
    setFecha("");
    setNombre("");
    setCorreo("");
  }

  if (confirmada) {
    return (
      <div className="rounded-2xl border-2 border-uva bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold tracking-widest text-uva uppercase">
          Reserva confirmada
        </p>
        <h3 className="mt-2 font-display text-3xl text-vino">
          ¡Nos vemos en el viñedo, {confirmada.nombre.split(" ")[0]}!
        </h3>
        <p className="mt-3 text-tinta/80">
          Tu código de reserva es{" "}
          <strong className="text-vino">{confirmada.codigo}</strong>. Guarda
          este código: te lo pediremos al llegar. Te enviamos los detalles a{" "}
          <strong>{confirmada.correo}</strong> (en esta demo no se envía
          correo real).
        </p>
        <dl className="mt-6 space-y-2 rounded-xl bg-cream p-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-tinta/60">Experiencia</dt>
            <dd className="font-semibold">{confirmada.experiencia}</dd>
          </div>
          {confirmada.vino && (
            <div className="flex justify-between gap-4">
              <dt className="text-tinta/60">Vino a degustar</dt>
              <dd className="font-semibold">{confirmada.vino}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt className="text-tinta/60">Fecha</dt>
            <dd className="font-semibold">
              {new Date(`${confirmada.fecha}T12:00:00`).toLocaleDateString(
                "es-MX",
                { day: "numeric", month: "long", year: "numeric" },
              )}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-tinta/60">Hora</dt>
            <dd className="font-semibold">{confirmada.hora} hrs</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-tinta/60">Personas</dt>
            <dd className="font-semibold">{confirmada.personas}</dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={otraReserva}
            className="rounded-full bg-vino px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-vino-dark"
            type="button"
          >
            Hacer otra reserva
          </button>
          <a
            href="/panel"
            className="rounded-full border border-vino px-5 py-2.5 text-sm font-semibold text-vino transition hover:bg-vino hover:text-white"
          >
            Ver panel del negocio
          </a>
        </div>
      </div>
    );
  }

  const label = "mb-1 block text-sm font-semibold text-tinta";
  const input =
    "w-full rounded-lg border border-tinta/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-vino focus:ring-2 focus:ring-vino/30";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-tinta/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-2xl text-vino">Reserva tu visita</h3>
      <p className="mt-1 text-sm text-tinta/70">
        Elige fecha y hora. La reserva queda guardada en este navegador y
        aparece en el panel del negocio.
      </p>

      {vinoPreseleccionado && (
        <p className="mt-4 rounded-lg bg-cream-dark px-3 py-2 text-sm">
          Degustación seleccionada:{" "}
          <strong className="text-vino">{vinoPreseleccionado}</strong>
        </p>
      )}

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div>
          <label className={label} htmlFor="fecha">
            Fecha
          </label>
          <input
            className={input}
            id="fecha"
            min={hoy}
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            value={fecha}
          />
        </div>
        <div>
          <label className={label} htmlFor="hora">
            Hora
          </label>
          <select
            className={input}
            id="hora"
            onChange={(e) => setHora(e.target.value)}
            value={hora}
          >
            {HORARIOS.map((h) => (
              <option key={h} value={h}>
                {h} hrs
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="personas">
            Personas
          </label>
          <select
            className={input}
            id="personas"
            onChange={(e) => setPersonas(Number(e.target.value))}
            value={personas}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "persona" : "personas"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className={label} htmlFor="experiencia">
          Experiencia
        </label>
        <select
          className={input}
          id="experiencia"
          onChange={(e) => setExperiencia(e.target.value)}
          value={experiencia}
        >
          <option value="degustacion">Degustación general</option>
          {EXPERIENCIAS.map((x) => (
            <option key={x.id} value={x.id}>
              {x.titulo}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="nombre">
            Nombre completo
          </label>
          <input
            className={input}
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. María González"
            type="text"
            value={nombre}
          />
        </div>
        <div>
          <label className={label} htmlFor="correo">
            Correo electrónico
          </label>
          <input
            className={input}
            id="correo"
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="tu@correo.com"
            type="email"
            value={correo}
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-vino/10 px-3 py-2 text-sm font-semibold text-vino">
          {error}
        </p>
      )}

      <button
        className="mt-6 w-full rounded-full bg-vino px-6 py-3 font-semibold text-white transition hover:bg-vino-dark"
        type="submit"
      >
        Confirmar reserva
      </button>
      <p className="mt-3 text-center text-xs text-tinta/60">
        Cancelación gratuita hasta 24 horas antes. Sin pago anticipado en esta
        demo.
      </p>
    </form>
  );
}
