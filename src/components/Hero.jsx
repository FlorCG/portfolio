import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-8" id="hero">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">¡Hola! Soy [Tu Nombre]</h2>
          <p className="text-gray-600">Desarrollador especializado en diseño web y creación de experiencias digitales modernas.</p>
        </div>
        <div>
          <img src="assets/images/mi-foto.jpg" alt="Foto de perfil" className="rounded-full shadow-lg w-64 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
