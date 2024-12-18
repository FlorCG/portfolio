import React from "react";

const skills = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Webflow", "Framer", "Wordpress", "Miro", "Optimal Sort", "Trello", "Notion", "Asana", "Jira", "Github", "Gitlab", "HTML5", "CSS3", "Scrum", "SASS", "Tailwind", "Javascript", "Node.js", "React", "Vue.js", "SQL Server", "MySQL"];

const Skills = () => {
  return (
    <section className="bg-black text-white py-16  interFont" id="skills">
      <div className="container max-w-[1228px] mx-auto text-center">
        <h3 className="text-5xl font-bold mb-12">Skills</h3>
        <ul className="flex flex-wrap justify-center mt-12 mb-12 gap-4">
          {skills.map((skill, index) => (
            <li 
              key={index} 
              className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-full text-md font-regular hover:bg-white hover:text-black transition-all duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

        