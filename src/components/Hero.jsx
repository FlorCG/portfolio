import React from "react";
import Image from '../assets/images/profile.png'

const Hero = () => {
  return (
    <section className="interFont bg-black min-h-screen flex items-center justify-center p-4" id="hero">
      <div className="hero max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div> 
          <h1 className="text-4xl font-bold mb-4 text-white">I’m Florencia, a UX/UI Designer passionate about crafting unique digital experiences, with strong expertise in frontend development.</h1>
          
        </div>
        <div>
          <img src={Image}  alt="Foto de perfil"  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
