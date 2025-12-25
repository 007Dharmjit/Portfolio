import React from "react";
// Import icons from react-icons/fa
import { 
  FaPython, 
  FaReact, 
  FaGithub, 
  FaExternalLinkAlt 
} from "react-icons/fa";

const projects = [
  // ================= ODOO PROJECTS =================
  {
    name: "Library Management System (Odoo)",
    type: "odoo",
    description:
      "Developed a complete Odoo module to manage library operations including book cataloging, member registration, issue/return workflows, late fee calculation, and automated email notifications using Python, XML, and QWeb.",
  },
  {
    name: "Product QR Code Integration",
    type: "odoo",
    description:
      "Built an Odoo inventory extension to generate and manage QR codes for products. Warehouse users can scan QR codes to instantly view product details, stock levels, and locations.",
  },
  {
    name: "Amazon Product Review Fetcher",
    type: "odoo",
    description:
      "Created a custom Odoo module to fetch Amazon product reviews using ASIN and domain via external APIs. Reviews are displayed inside the product form with group-based access control and admin-configurable API keys.",
  },
  {
    name: "Company-wise Location & Access Control",
    type: "odoo",
    description:
      "Implemented multi-company record rules and dynamic location filtering in Odoo to ensure users can access only company-specific warehouses, partners, and inventory records.",
  },

  // ================= REACT / FULL STACK PROJECTS =================
  {
    name: "Trackly",
    type: "react",
    description:
      "A task and project tracking web app that helps teams manage work efficiently with task assignments, deadlines, progress tracking, and notifications.",
    github: "https://github.com/007Dharmjit/Trackly",
    liveDemo: "http://trackly-4e19.vercel.app",
  },
  {
    name: "CodeNest_IO",
    type: "react",
    description:
      "An online collaborative code editor supporting multiple programming languages with real-time syntax highlighting and live execution.",
    github: "https://github.com/007Dharmjit/CodeNest_IO",
  },
  {
    name: "Chat_App",
    type: "react",
    description:
      "A real-time chat application built using WebSocket technology that allows users to join rooms and exchange instant messages.",
    github: "https://github.com/007Dharmjit/Chat_App",
  },
  {
    name: "Portfolio",
    type: "react",
    description:
      "My personal portfolio website showcasing MERN, Odoo, and Python projects with a modern responsive UI using React and Tailwind CSS.",
    github: "https://github.com/007Dharmjit/007Dharmjit",
    liveDemo: "https://dharmjitportfolio.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md transition hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight pr-4">
                    {project.name}
                  </h3>
                  {/* Icon Badge */}
                  <div className={`p-2 rounded-lg ${project.type === "odoo" ? "bg-yellow-100 dark:bg-yellow-900/30" : "bg-blue-100 dark:bg-blue-900/30"}`}>
                    {project.type === "odoo" ? (
                      <FaPython className="text-yellow-600 dark:text-yellow-400 text-xl" />
                    ) : (
                      <FaReact className="text-blue-500 dark:text-blue-400 text-xl" />
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Links ONLY for non-Odoo projects */}
              {project.type !== "odoo" && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-light dark:text-[#6366f1] hover:underline font-medium text-sm transition"
                  >
                    <FaGithub className="mr-2 text-lg" /> View Code
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 dark:text-green-400 hover:underline font-medium text-sm transition"
                    >
                      <FaExternalLinkAlt className="mr-2 text-sm" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;