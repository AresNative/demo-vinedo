"use client";

import { useEffect, useState } from "react";
import {
  eliminarReserva,
  leerReservas,
  type Reserva,
} from "@/lib/reservas";

export default function Panel() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    setReservas(leerReservas());
    setCargado(true);
  }, []);

  function onEliminar(codigo: string) {
    eliminarReserva(codigo);
    setReservas(leerReservas());
  }

  return (
    <div className="min-h-screen">
      <div className="bg-uva-dark px-4 py-2 text-center text-xs font-semibold tracking-wide text-cream">
        DEMO CON DATOS DE EJEMPLO — Panel de muestra del negocio.
      </div>

      <header className="border-b border-tinta/10 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-vino">
              Panel del negocio
            </h1>
            <p className="text-sm text-tinta/60">
              Reservas registradas en este navegador (localStorage)
            </p>
          </div>
          <a
            href="/"
            className="rounded-full border border-vino px-4 py-2 text-sm font-semibold text-vino transition hover:bg-vino hover:text-white"
          >
            ← Volver al sitio
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {!cargado ? (
          <p className="text-tinta/70">Cargando reservas…</p>
        ) : reservas.length === 0 ? (
          <div className="rounded-2xl border border-tinta/10 bg-white p-10 text-center shadow-sm">
            <p className="font-display text-2xl font-bold text-vino">
              Aún no hay reservas
            </p>
            <p className="mt-2 text-sm text-tinta/70">
              Cuando un visitante confirme una reserva en el sitio, aparecerá
              aquí. Las reservas se guardan solo en este navegador, porque es
              una demo sin servidor.
            </p>
            <a
              href="/#reservas"
              className="mt-6 inline-block rounded-full bg-vino px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-vino-dark"
            >
              Ir al formulario de reservas
            </a>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm text-tinta/70">
              {reservas.length}{" "}
              {reservas.length === 1 ? "reserva" : "reservas"} registradas.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {reservas.map((r) => (
                <article
                  key={r.codigo}
                  className="rounded-2xl border border-tinta/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-display text-xl font-bold text-vino">
                        {r.nombre}
                      </h2>
                      <p className="text-sm text-tinta/60">{r.correo}</p>
                    </div>
                    <span className="rounded-full bg-uva/10 px-3 py-1 text-xs font-bold text-uva">
                      {r.codigo}
                    </span>
                  </div>
                  <dl className="mt-4 space-y-1.5 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-tinta/60">Experiencia</dt>
                      <dd className="font-semibold">{r.experiencia}</dd>
                    </div>
                    {r.vino && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-tinta/60">Vino a degustar</dt>
                        <dd className="font-semibold">{r.vino}</dd>
                      </div>
                    )}
                    <div className="flex justify-between gap-4">
                      <dt className="text-tinta/60">Fecha</dt>
                      <dd className="font-semibold">
                        {new Date(`${r.fecha}T12:00:00`).toLocaleDateString(
                          "es-MX",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-tinta/60">Hora</dt>
                      <dd className="font-semibold">{r.hora} hrs</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-tinta/60">Personas</dt>
                      <dd className="font-semibold">{r.personas}</dd>
                    </div>
                  </dl>
                  <button
                    onClick={() => onEliminar(r.codigo)}
                    type="button"
                    className="mt-4 rounded-full border border-vino/40 px-4 py-1.5 text-xs font-semibold text-vino transition hover:bg-vino hover:text-white"
                  >
                    Eliminar reserva
                  </button>
                </article>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="bg-uva-dark px-4 py-8 text-center text-sm text-cream/80">
        Desarrollado por <strong>Juan José Eusebio Rodríguez</strong> ·{" "}
        <a className="underline" href="https://github.com/AresNative">
          github.com/AresNative
        </a>{" "}
        ·{" "}
        <a className="underline" href="https://eusebio.dev">
          eusebio.dev
        </a>
      </footer>
    </div>
  );
}
