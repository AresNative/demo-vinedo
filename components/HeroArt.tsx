/** Arte decorativo del hero: paisaje del Valle de Guadalupe en SVG puro.
 *  Sin imágenes externas: solo gradientes y formas vectoriales. */
export default function HeroArt() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      viewBox="0 0 1200 600"
    >
      <defs>
        <linearGradient id="cielo" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f6e3c2" />
          <stop offset="55%" stopColor="#eec48f" />
          <stop offset="100%" stopColor="#d9a05b" />
        </linearGradient>
        <linearGradient id="colina-lejos" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7d8b5e" />
          <stop offset="100%" stopColor="#5c6b43" />
        </linearGradient>
        <linearGradient id="colina-cerca" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4a6b50" />
          <stop offset="100%" stopColor="#2e4a33" />
        </linearGradient>
        <linearGradient id="suelo" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8a5a33" />
          <stop offset="100%" stopColor="#5e3a1e" />
        </linearGradient>
      </defs>

      {/* Cielo y sol */}
      <rect width="1200" height="600" fill="url(#cielo)" />
      <circle cx="880" cy="140" r="70" fill="#fbeecb" opacity="0.9" />
      <circle cx="880" cy="140" r="95" fill="#fbeecb" opacity="0.25" />

      {/* Montañas al fondo */}
      <path
        d="M0 300 L180 190 L340 280 L520 170 L700 285 L880 200 L1040 290 L1200 210 L1200 600 L0 600 Z"
        fill="#8a9a6d"
        opacity="0.55"
      />

      {/* Colinas */}
      <path
        d="M0 340 Q 300 250 620 330 T 1200 320 L1200 600 L0 600 Z"
        fill="url(#colina-lejos)"
      />
      <path
        d="M0 420 Q 360 330 760 410 T 1200 400 L1200 600 L0 600 Z"
        fill="url(#colina-cerca)"
      />

      {/* Suelo con hileras de vides en perspectiva */}
      <path d="M0 470 Q 600 430 1200 470 L1200 600 L0 600 Z" fill="url(#suelo)" />
      {[
        { x1: 120, y1: 470, x2: 60, y2: 600 },
        { x1: 300, y1: 462, x2: 260, y2: 600 },
        { x1: 480, y1: 458, x2: 470, y2: 600 },
        { x1: 660, y1: 458, x2: 690, y2: 600 },
        { x1: 840, y1: 462, x2: 920, y2: 600 },
        { x1: 1020, y1: 470, x2: 1140, y2: 600 },
      ].map((l, i) => (
        <g key={i}>
          <line
            x1={l.x1}
            x2={l.x2}
            y1={l.y1}
            y2={l.y2}
            stroke="#1d3122"
            strokeWidth="5"
            opacity="0.85"
          />
          {[0.25, 0.5, 0.75].map((t) => (
            <circle
              key={t}
              cx={l.x1 + (l.x2 - l.x1) * t}
              cy={l.y1 + (l.y2 - l.y1) * t}
              r={7 + t * 6}
              fill="#4a6b50"
            />
          ))}
        </g>
      ))}

      {/* Pájaros */}
      <path
        d="M250 120 q10 -10 20 0 q10 -10 20 0"
        fill="none"
        stroke="#5e3a1e"
        strokeWidth="3"
      />
      <path
        d="M330 95 q8 -8 16 0 q8 -8 16 0"
        fill="none"
        stroke="#5e3a1e"
        strokeWidth="3"
      />
      <path
        d="M1050 90 q8 -8 16 0 q8 -8 16 0"
        fill="none"
        stroke="#5e3a1e"
        strokeWidth="3"
      />
    </svg>
  );
}
