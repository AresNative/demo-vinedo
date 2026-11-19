export type Vino = {
  id: string;
  nombre: string;
  tipo: "Tinto" | "Blanco" | "Rosado" | "Espumoso";
  varietal: string;
  anio: number;
  notas: string;
  precio: number;
  destacado?: boolean;
};

export const VINOS: Vino[] = [
  {
    id: "neblina-tinto",
    nombre: "Neblina del Valle",
    tipo: "Tinto",
    varietal: "Nebbiolo · Cabernet Sauvignon",
    anio: 2021,
    notas: "Frutos rojos, cereza negra y un toque de vainilla. Taninos firmes y final largo.",
    precio: 680,
    destacado: true,
  },
  {
    id: "atardecer-rosado",
    nombre: "Atardecer Rosado",
    tipo: "Rosado",
    varietal: "Grenache · Syrah",
    anio: 2024,
    notas: "Fresa fresca, pétalos de rosa y toronja. Ligero, fresco y muy versátil.",
    precio: 420,
    destacado: true,
  },
  {
    id: "bruma-blanca",
    nombre: "Bruma Blanca",
    tipo: "Blanco",
    varietal: "Sauvignon Blanc · Chardonnay",
    anio: 2024,
    notas: "Cítricos, manzana verde y notas herbales. Acidez viva y final mineral.",
    precio: 460,
  },
  {
    id: "reserva-abad",
    nombre: "Reserva del Abad",
    tipo: "Tinto",
    varietal: "Tempranillo · Merlot",
    anio: 2020,
    notas: "Ciruela madura, cacao y especias dulces. 14 meses en barrica de roble francés.",
    precio: 950,
    destacado: true,
  },
  {
    id: "cosecha-luna",
    nombre: "Cosecha de Luna",
    tipo: "Tinto",
    varietal: "Syrah · Petit Verdot",
    anio: 2022,
    notas: "Mora, pimienta negra y violetas. Estructurado, ideal para guarda.",
    precio: 720,
  },
  {
    id: "espuma-valle",
    nombre: "Espuma del Valle",
    tipo: "Espumoso",
    varietal: "Chardonnay · Pinot Noir",
    anio: 2023,
    notas: "Burbuja fina, pan tostado y manzana. Método tradicional, 18 meses en rima.",
    precio: 590,
  },
  {
    id: "dorado-tarde",
    nombre: "Dorado de Tarde",
    tipo: "Blanco",
    varietal: "Chenin Blanc",
    anio: 2023,
    notas: "Durazno, miel y flores blancas. Untuoso y elegante, perfecto para mariscos.",
    precio: 520,
  },
  {
    id: "tierra-roja",
    nombre: "Tierra Roja",
    tipo: "Tinto",
    varietal: "Cabernet Franc · Malbec",
    anio: 2021,
    notas: "Pimiento verde, grosella y tierra húmeda. Carácter franco del Valle.",
    precio: 640,
  },
];

export type Evento = {
  id: string;
  fecha: string;
  titulo: string;
  descripcion: string;
  precio: number;
};

export const EVENTOS: Evento[] = [
  {
    id: "cata-luna-llena",
    fecha: "Sábado 13 de diciembre de 2026 · 18:00",
    titulo: "Cata bajo la luna llena",
    descripcion:
      "Degustación de cinco etiquetas al aire libre, con maridaje de quesos regionales y música en vivo.",
    precio: 650,
  },
  {
    id: "vendimia",
    fecha: "Sábado 20 de diciembre de 2026 · 12:00",
    titulo: "Fiesta de la vendimia",
    descripcion:
      "Pisa de uva, recorrido por la bodega y comida campirana. Actividad familiar, niños gratis.",
    precio: 450,
  },
  {
    id: "cata-vertical",
    fecha: "Viernes 9 de enero de 2027 · 17:00",
    titulo: "Cata vertical: Nebbiolo 2019–2022",
    descripcion:
      "Cuatro añadas de nuestro tinto insignia guiadas por la enóloga de la casa. Cupo limitado a 20 personas.",
    precio: 850,
  },
  {
    id: "maridaje-invierno",
    fecha: "Sábado 24 de enero de 2027 · 19:00",
    titulo: "Cena maridaje de invierno",
    descripcion:
      "Menú de cuatro tiempos de cocina bajacaliforniana, cada plato con su vino. Reserva anticipada.",
    precio: 1200,
  },
];

export type Experiencia = {
  id: string;
  titulo: string;
  duracion: string;
  precio: number;
  descripcion: string;
  incluye: string[];
};

export const EXPERIENCIAS: Experiencia[] = [
  {
    id: "tour-vinedo",
    titulo: "Tour por el viñedo",
    duracion: "1.5 horas",
    precio: 350,
    descripcion:
      "Recorrido guiado entre las vides, la bodega y la sala de barricas, con historia del Valle y del viñedo.",
    incluye: ["Guía en español", "Degustación de 2 vinos", "Copa de regalo"],
  },
  {
    id: "cata-guiada",
    titulo: "Cata guiada",
    duracion: "1 hora",
    precio: 450,
    descripcion:
      "Sesión de cata con nuestra sommelier: cinco etiquetas, técnica de degustación y maridaje con quesos locales.",
    incluye: ["5 vinos", "Tabla de quesos", "Guía impresa de cata"],
  },
  {
    id: "restaurante",
    titulo: "Restaurante de cocina de autor",
    duracion: "Almuerzo o cena",
    precio: 850,
    descripcion:
      "Menú de temporada con producto del Valle y del mar de Ensenada, con opción de maridaje por copa.",
    incluye: ["Menú de 3 tiempos", "Vista al viñedo", "Maridaje opcional"],
  },
];

export const HORARIOS = [
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export function formatoMXN(n: number): string {
  return `$${n.toLocaleString("es-MX")} MXN`;
}
