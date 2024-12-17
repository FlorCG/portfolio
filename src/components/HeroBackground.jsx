import React from 'react';

const HeroBackground = () => {
  return (
    <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1600 800"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      {/* Gradiente radial para desvanecer ovaladamente */}
      <radialGradient id="fadeOval" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0.15 }} />
        <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
      </radialGradient>

      {/* Patrón de cuadrícula */}
      <pattern
        id="gridPattern"
        x="0"
        y="0"
        width="30"
        height="30"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(1)"
      >
        <rect x="0" y="0" width="30" height="30" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      </pattern>

      {/* Máscara ovalada */}
      <mask id="ovalMask">
        <rect width="100%" height="100%" fill="url(#fadeOval)" />
      </mask>
    </defs>

    {/* Fondo cuadriculado con máscara aplicada */}
    <rect
      width="1600"
      height="800"
      fill="url(#gridPattern)"
      mask="url(#ovalMask)"
      transform="translate(0, 0)"
    />
  </svg>
  );
};

export default HeroBackground;
