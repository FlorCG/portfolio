import React from "react";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción breve del proyecto.",
    image: "assets/images/proyecto1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción breve del proyecto.",
    image: "assets/images/proyecto2.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Proyectos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline">Ver más</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
