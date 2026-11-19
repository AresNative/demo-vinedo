# Demo Viñedo — Sitio web para una vinícola del Valle de Guadalupe

Demo pública de un sitio web para una vinícola y turismo en el Valle de
Guadalupe, Ensenada, Baja California. Es un ejemplo de lo que se puede
construir para un negocio local: catálogo de vinos, reservas de degustación,
eventos, experiencias y contacto, con un pequeño panel del negocio.

> **Demo con datos de ejemplo.** Todos los vinos, precios, eventos y datos de
> contacto son inventados para mostrar el producto. No hay servidor ni base de
> datos: las reservas se guardan en el navegador (localStorage).

Inspirado en el proyecto **s-i ("Solución integral")** de Juan José Eusebio
Rodríguez — mismo stack (Next.js + Tailwind) adaptado como sitio público para
un cliente de turismo, sin reutilizar sus pantallas de administración ni sus
endpoints privados.

## Qué incluye

- **Inicio** — hero con paisaje del Valle dibujado en SVG (sin imágenes externas).
- **Catálogo de vinos** — 8 etiquetas de ejemplo con tipo, varietal, notas de cata y precio en MXN, con filtro por tipo y botón "Reservar degustación".
- **Reservas de degustación y visita** — formulario (fecha, hora, personas, nombre, correo) que genera un código de reserva (ej. `VG-2026-AB12`) y muestra confirmación.
- **Eventos** — catas, vendimia y cena maridaje con fecha y precio.
- **Experiencias** — tour por el viñedo, cata guiada y restaurante.
- **Contacto y ubicación** — Valle de Guadalupe, Ensenada.
- **Panel del negocio** (`/panel`) — lista las reservas guardadas en localStorage, con opción de eliminarlas.

## Stack

- Next.js 16 (App Router) con `output: 'export'` — sitio 100% estático, listo para Firebase Hosting.
- React 19, TypeScript, Tailwind CSS 4.
- Sin backend, sin llamadas a APIs externas, sin secretos.

## Cómo correrlo

```bash
npm install
npm run dev     # desarrollo en http://localhost:3000
npm run build   # genera la carpeta out/ con el sitio estático
```

Para servir el build localmente:

```bash
npx serve out
```

## Demo en vivo

_Pendiente de publicar — se agregará el enlace de Firebase Hosting aquí._

## Crédito

Juan José Eusebio Rodríguez — [github.com/AresNative](https://github.com/AresNative) — [eusebio.dev](https://eusebio.dev)
