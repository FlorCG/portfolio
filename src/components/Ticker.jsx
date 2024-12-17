import React from "react";


const Ticker = () => {
  const words = [
    "Wireframing",
    <span>&#10039;</span>,
    "Prototyping",
    <span>&#10039;</span>,
    "User Research",
    <span>&#10039;</span>,
    "UI Design",
    <span>&#10039;</span>,
    "Accessibility",
    <span>&#10039;</span>,
    "Frontend Development",
    <span>&#10039;</span>,
    "Design Systems",
    <span>&#10039;</span>,
  ];

  // Duplicamos las palabras para hacer el bucle infinito
  const repeatedWords = [...words, ...words];

  return (
    <div className="relative overflow-hidden bg-black py-4">
    {/* Gradiente para efecto de desvanecimiento */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black z-10"></div>

    {/* Contenedor del ticker */}
    <div className="flex items-center relative">
      {/* Primer contenedor de las palabras */}
      <div className="ticker-content flex animate-marquee">
        {repeatedWords.map((word, index) => (
            <span key={index} className="text-white text-lg  mx-3 flex-shrink-0">
            {/* Aquí se incorpora el icono de chispa entre las palabras */}
            {index % 2 === 0 ? (
              <>
                {word} 
              </>
            ) : (
              word
            )}
          </span>
        ))}
      </div>
      {/* Segundo contenedor de las palabras (copia) */}
      <div className="ticker-content flex animate-marquee">
        {repeatedWords.map((word, index) => (
          <span
            key={index}
            className="text-white text-lg  mx-3 flex-shrink-0"
          >
            {word} 
          </span>
        ))}
      </div>
    </div>
  </div>
  );
};
export default Ticker;

