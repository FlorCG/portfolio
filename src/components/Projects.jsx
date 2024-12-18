import React from "react";
import Image from '../assets/images/placeholder.png'

const projects = [
  {
    id: 1,
    title: "Airport",
    description: "Descripción breve del proyecto.",
    image: Image,
    link: "#",
  },
  {
    id: 2,
    title: "Kerry",
    description: "Descripción breve del proyecto.",
    image: Image,
    link: "#",
  },
  {
    id: 3,
    title: "Example",
    description: "Descripción breve del proyecto.",
    image: Image,
    link: "#",
  },
  {
    id: 4,
    title: "Academy",
    description: "Descripción breve del proyecto.",
    image: Image,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-black text-white interFont" id="projects">
    <div className="container max-w-[1228px] mx-auto text-center">
      <h3 className="text-5xl font-bold mb-12">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden cursor-pointer rounded-lg"
          >
            {/* Imagen del proyecto */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform transform group-hover:scale-105"
              />
            </div>
            {/* Contenido del proyecto */}
            <div className="py-8 text-left">
              <h4 className="text-3xl font-bold mb-2">{project.title}</h4>
              <p className="text-white text-lg mb-4">{project.description}</p>
              {/* Enlace visible al hover */}
              <a
                href={project.link}
                className="text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                See the project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;
