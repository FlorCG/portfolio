import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 z-50 interFont">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o nombre */}
        <div className="text-lg font-bold">FCG</div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#projects" className="hover:text-gray-300">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="path/to/cv.pdf" target="_blank" className="hover:text-gray-300">
              RESUME
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" className="hover:text-gray-300">
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
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#projects" className="text-lg hover:text-gray-300">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="path/to/cv.pdf" target="_blank" className="text-lg hover:text-gray-300">
                RESUME
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" className="text-lg hover:text-gray-300">
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

