"use client";

import { useState } from "react";
import HeroArt from "@/components/HeroArt";
import ReservationForm from "@/components/ReservationForm";
import {
  EVENTOS,
  EXPERIENCIAS,
  VINOS,
  formatoMXN,
  type Vino,
} from "@/lib/data";

const TIPOS: Array<"Todos" | Vino["tipo"]> = [
  "Todos",
  "Tinto",
  "Blanco",
  "Rosado",
  "Espumoso",
];

const NAV = [
  { href: "#vinos", label: "Vinos" },
  { href: "#reservas", label: "Reservas" },
  { href: "#eventos", label: "Eventos" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#contacto", label: "Contacto" },
];

export default function Home() {
  const [filtro, setFiltro] = useState<(typeof TIPOS)[number]>("Todos");
  const [vinoSeleccionado, setVinoSeleccionado] = useState<string | null>(
    null,
  );
  const vinos = filtro === "Todos" ? VINOS : VINOS.filter((v) => v.tipo === filtro);

  function reservarVino(nombre: string) {
    setVinoSeleccionado(nombre);
    document
      .getElementById("reservas")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen">
      {/* Aviso de demo */}
      <div className="bg-uva-dark px-4 py-2 text-center text-xs font-semibold tracking-wide text-cream">
        DEMO CON DATOS DE EJEMPLO — Sitio de muestra para una vinícola del
        Valle de Guadalupe. Nada de lo que ves aquí es un negocio real.
      </div>

      {/* Encabezado */}
      <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#inicio" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-vino">
              Viñedo del Valle
            </span>
            <span className="hidden text-xs tracking-widest text-tinta/60 uppercase sm:inline">
              Valle de Guadalupe
            </span>
          </a>
          <nav className="flex items-center gap-1 text-sm font-semibold sm:gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-2.5 py-1.5 text-tinta/80 transition hover:bg-cream-dark hover:text-vino sm:px-3"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/panel"
              className="ml-1 rounded-full bg-uva px-3 py-1.5 text-white transition hover:bg-uva-dark"
            >
              Panel del negocio
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <HeroArt />
          <div className="absolute inset-0 bg-gradient-to-r from-uva-dark/70 via-uva-dark/35 to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-24 sm:py-32">
          <p className="text-sm font-bold tracking-[0.25em] text-dorado-light uppercase">
            Valle de Guadalupe · Ensenada, Baja California
          </p>
          <h1 className="mt-4 max-w-xl font-display text-5xl leading-tight font-bold text-white sm:text-6xl">
            Vinos con carácter del Valle
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/90">
            Viñedo familiar entre cerros y brisa marina. Degusta nuestras
            etiquetas, recorre la bodega y quédate a comer con vista a las
            vides.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#reservas"
              className="rounded-full bg-vino px-6 py-3 font-semibold text-white transition hover:bg-vino-dark"
            >
              Reservar degustación
            </a>
            <a
              href="#vinos"
              className="rounded-full bg-white/95 px-6 py-3 font-semibold text-vino transition hover:bg-white"
            >
              Ver catálogo de vinos
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-white">
            {[
              ["12", "etiquetas propias"],
              ["18 ha", "de viñedo"],
              ["2016", "primera cosecha"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold">{num}</p>
                <p className="text-sm text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de vinos */}
      <section id="vinos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
        <p className="text-sm font-bold tracking-widest text-dorado uppercase">
          Catálogo
        </p>
        <h2 className="mt-1 font-display text-4xl font-bold text-vino">
          Nuestros vinos
        </h2>
        <p className="mt-2 max-w-2xl text-tinta/75">
          Precios de ejemplo en pesos mexicanos, por botella de 750 ml.
          Disponibles en sala de degustación y para envío dentro de México.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TIPOS.map((t) => (
            <button
              key={t}
              onClick={() => setFiltro(t)}
              type="button"
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filtro === t
                  ? "bg-vino text-white"
                  : "border border-tinta/20 bg-white text-tinta/80 hover:border-vino hover:text-vino"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vinos.map((v) => (
            <article
              key={v.id}
              className="flex flex-col rounded-2xl border border-tinta/10 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="rounded-full bg-uva/10 px-3 py-1 text-xs font-bold text-uva">
                  {v.tipo} · {v.anio}
                </span>
                {v.destacado && (
                  <span className="rounded-full bg-dorado/20 px-3 py-1 text-xs font-bold text-dorado">
                    Destacado
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-vino">
                {v.nombre}
              </h3>
              <p className="text-sm font-semibold text-tinta/60">
                {v.varietal}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-tinta/80">
                {v.notas}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="font-display text-2xl font-bold text-tinta">
                  {formatoMXN(v.precio)}
                </p>
                <button
                  onClick={() => reservarVino(v.nombre)}
                  type="button"
                  className="rounded-full bg-vino px-4 py-2 text-sm font-semibold text-white transition hover:bg-vino-dark"
                >
                  Reservar degustación
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reservas */}
      <section
        id="reservas"
        className="scroll-mt-24 bg-uva-dark py-16 text-cream"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-bold tracking-widest text-dorado-light uppercase">
              Reservas
            </p>
            <h2 className="mt-1 font-display text-4xl font-bold">
              Degustación y visita
            </h2>
            <p className="mt-3 leading-relaxed text-cream/85">
              Reserva tu lugar en la sala de degustación o en una de nuestras
              experiencias. Grupos de más de 10 personas, escríbenos directo
              para una visita privada.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2">
                <span aria-hidden="true">🕐</span> Miércoles a domingo, 11:00
                a 18:00 hrs.
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">🍷</span> Degustación general: 5
                vinos por $450 MXN por persona.
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">👨‍👩‍👧</span> Menores de edad entran
                gratis acompañados de un adulto.
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">🐾</span> Mascotas bienvenidas en
                terraza.
              </li>
            </ul>
          </div>
          <ReservationForm
            key={vinoSeleccionado ?? "ninguno"}
            vinoPreseleccionado={vinoSeleccionado}
          />
        </div>
      </section>

      {/* Eventos */}
      <section id="eventos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
        <p className="text-sm font-bold tracking-widest text-dorado uppercase">
          Próximamente
        </p>
        <h2 className="mt-1 font-display text-4xl font-bold text-vino">
          Eventos en el viñedo
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {EVENTOS.map((e) => (
            <article
              key={e.id}
              className="rounded-2xl border border-tinta/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold text-uva">{e.fecha}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-vino">
                {e.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta/80">
                {e.descripcion}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-display text-xl font-bold">
                  {formatoMXN(e.precio)}{" "}
                  <span className="text-sm font-normal text-tinta/60">
                    por persona
                  </span>
                </p>
                <a
                  href="#reservas"
                  className="rounded-full border border-vino px-4 py-2 text-sm font-semibold text-vino transition hover:bg-vino hover:text-white"
                >
                  Apartar lugar
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experiencias */}
      <section
        id="experiencias"
        className="scroll-mt-24 bg-cream-dark py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold tracking-widest text-dorado uppercase">
            Vive el Valle
          </p>
          <h2 className="mt-1 font-display text-4xl font-bold text-vino">
            Experiencias
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {EXPERIENCIAS.map((x) => (
              <article
                key={x.id}
                className="flex flex-col rounded-2xl border border-tinta/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-2xl font-bold text-vino">
                  {x.titulo}
                </h3>
                <p className="mt-1 text-sm font-semibold text-tinta/60">
                  {x.duracion} · desde {formatoMXN(x.precio)} por persona
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-tinta/80">
                  {x.descripcion}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-tinta/75">
                  {x.incluye.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <span aria-hidden="true" className="text-uva">✓</span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <a
                  href="#reservas"
                  className="mt-5 rounded-full bg-uva px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-uva-dark"
                >
                  Reservar experiencia
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
        <p className="text-sm font-bold tracking-widest text-dorado uppercase">
          Visítanos
        </p>
        <h2 className="mt-1 font-display text-4xl font-bold text-vino">
          Contacto y ubicación
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-tinta/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold text-vino">
              Dirección
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-tinta/80">
              Carretera Ensenada – Tecate, km 88
              <br />
              Valle de Guadalupe, Ensenada
              <br />
              Baja California, México
            </p>
          </div>
          <div className="rounded-2xl border border-tinta/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold text-vino">
              Contacto
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-tinta/80">
              Teléfono: +52 (646) 555-0123
              <br />
              Correo: contacto@demo-vinedo.mx
              <br />
              Instagram: @demo.vinedo.valle
            </p>
          </div>
          <div className="rounded-2xl border border-tinta/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold text-vino">
              Horario
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-tinta/80">
              Miércoles a domingo
              <br />
              11:00 – 18:00 hrs
              <br />
              Lunes y martes cerrado
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-tinta/60">
          A 25 minutos del centro de Ensenada por la carretera escénica.
          Estacionamiento gratuito en el viñedo.
        </p>
      </section>

      {/* Pie */}
      <footer className="bg-uva-dark px-4 py-10 text-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">Viñedo del Valle</p>
            <p className="mt-1 text-sm text-cream/70">
              Demo con datos de ejemplo · Valle de Guadalupe, Ensenada, B.C.
            </p>
          </div>
          <p className="text-sm text-cream/80">
            Desarrollado por{" "}
            <strong>Juan José Eusebio Rodríguez</strong> ·{" "}
            <a
              className="underline hover:text-white"
              href="https://github.com/AresNative"
            >
              github.com/AresNative
            </a>{" "}
            ·{" "}
            <a className="underline hover:text-white" href="https://eusebio.dev">
              eusebio.dev
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
