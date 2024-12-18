import React, { useState, useEffect } from "react";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar el scroll para ajustar la clase de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md text-white py-5 "
          : "bg-black text-white py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-xl font-black bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">FCG</div>

          {/* Menú en pantallas grandes */}
          <ul className="font-medium text-lg hidden md:flex space-x-8">
          <li>
            <a href="#projects" className=" text-white hover:text-purple-600">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="path/to/cv.pdf" target="_blank" className="hover:text-purple-600">
              RESUME
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" className="hover:text-purple-600" rel="noreferrer">
              LINKEDIN
            </a>
          </li>
        </ul>

        {/* Botón del menú hamburguesa */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full  bg-black/90 backdrop-blur-md  text-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#projects" className="font-medium py-6 text-lg hover:text-purple-600">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="path/to/cv.pdf" target="_blank" className="font-medium text-lg py-6 hover:text-purple-600">
                RESUME
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" className="font-medium text-lg py-6 hover:text-purple-600" rel="noreferrer">
                LINKEDIN
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
    
  );
};
export default Navbar;
