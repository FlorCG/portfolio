import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FCG</h1>
        <ul className="flex space-x-4">
          <li><a href="#projects" className="hover:text-gray-400">Proyects</a></li>
          <li><a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Resume</a></li>
          <li><a href="https://linkedin.com/in/mi-perfil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
