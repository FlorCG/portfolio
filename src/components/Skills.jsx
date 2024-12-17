import React from "react";

const skills = ["Figma", "CSS", "HTML", "React", "Tailwind CSS"];

const Skills = () => {
  return (
    <section className="bg-white py-16" id="skills">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <ul className="flex flex-wrap justify-center space-x-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-md">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
