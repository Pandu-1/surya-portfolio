import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";

import project3 from "../assets/project3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: proj2,
      title: "PU-College-Frontend Web Application",
      desc: "Developed a responsive PU college web application with modern frontend features.",
      tech: ["Html", "Css", "JavaScript"],
      link: "https://surya-pu-fronted.netlify.app/",
    },
    {
      id: 2,
      image: proj1,
      title: "Portfolio Web Application",
      desc: "Built a modern portfolio website showcasing projects, skills, and responsive web designs",
      tech: ["React", "JavaScript", "Html", "Css"],
      link: "https://surya-chowdary-portfolio.netlify.app/",
    },
    {
      id: 3,
      image: project3,
      title: "E-commerce web application",
      desc: "a modern E-commerce website showcasing projects, skills, and responsive web designs",
      tech: ["React", "Html", "Css"],
      link: "https://greencart-gs.vercel.app/",
    },
  ];
  return (
    <section className="py-16  bg-gray-900" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Projects.
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((tec, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded"
                    >
                      {tec}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end mt-auto ">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1  bg-primary text-white text-sm font-medium rounded-md hover:opacity-80 transition"
                  >
                    View Live ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
