import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description:
    "Demo pública de sitio web para una vinícola del Valle de Guadalupe: catálogo de vinos, reservas de degustación, eventos y experiencias.",
  title: "Viñedo del Valle — Vinos y experiencias | Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
