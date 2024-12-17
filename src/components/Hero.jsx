import React from "react";
import Image from '../assets/images/profile.png'
import HeroBackground from "./HeroBackground";


const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center ">
      {/* Fondo */}
      <HeroBackground />

      <div className="max-w-[1228px] mx-auto p-4 grid grid-flow-col md:gap-0 lg:grid-cols-2 lg:gap-12 items-center z-10 relative hero">
        {/* Contenedor de texto */}
        <div className="hero-text flex flex-col justify-center text-center lg:text-left mb-6 lg:mb-0 col-span-12" >
          <span className="text-[2.5rem] leading-[3rem] font-bold ">
            I’m Florencia, a UX/UI Designer passionate about crafting unique digital experiences, with strong expertise in frontend development.
          </span>
        </div>

        {/* Contenedor de la imagen */}
        <div className="lg:flex justify-end items-center mt-12 lg:mt-0 col-span-1">
          <img
            src={Image}
            alt="Foto de perfil"
            className="w-full max-w-[250px] lg:max-w-[300px] rounded-lg mx-auto lg:mx-0 hidden lg:block"
          />
        </div>
      </div>
      
    </section>
     
  );
};
export default Hero;