import React from "react";

const projects = [
  {
    name: "Trackly",
    description:
      "A task and project tracking web app to help users organize, monitor progress, and collaborate efficiently in teams. Features include task assignments, deadlines, and notifications.",
    github: "https://github.com/007Dharmjit/Trackly",
    liveDemo: "http://trackly-4e19.vercel.app",
  },
  {
    name: "Authentication",
    description:
      "A robust authentication system implementing secure login, signup, password reset, and JWT-based user sessions for web applications.",
    github: "https://github.com/007Dharmjit/Authentication",
    liveDemo: "",
  },
  {
    name: "CodeNest_IO",
    description:
      "An online collaborative code editor supporting multiple programming languages with real-time syntax highlighting and live preview features.",
    github: "https://github.com/007Dharmjit/CodeNest_IO",
    liveDemo: "",
  },
  {
    name: "Portfolio",
    description:
      "My personal portfolio website showcasing my skills, projects, and contact information with a modern responsive design using React and Tailwind CSS.",
    github: "https://github.com/007Dharmjit/007Dharmjit",
    liveDemo: "https://007dharmjit.github.io/007Dharmjit",
  },
  {
    name: "Calculator",
    description:
      "A simple yet functional calculator app built with JavaScript supporting basic arithmetic operations and a clean user interface.",
    github: "https://github.com/007Dharmjit/calculator",
    liveDemo: "https://007dharmjit.github.io/calculator",
  },
  {
    name: "MoviesBar",
    description:
      "A movie discovery app that allows users to browse, search, and view detailed information about movies using a public API.",
    github: "https://github.com/HappyPrajapati004/MoviesBar",
    liveDemo: "",
  },
  {
    name: "Chat_App",
    description:
      "A real-time chat application enabling users to join chat rooms and send instant messages, built using WebSocket technology.",
    github: "https://github.com/007Dharmjit/Chat_App",
    liveDemo: "",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ name, description, github, liveDemo }) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md project-card transition"
            >
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="mb-4">{description}</p>
              <div className="flex space-x-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light dark:text-[#6366f1] hover:underline"
                >
                  View Code
                </a>
                {liveDemo && liveDemo.trim() !== "" && (
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-light dark:text-[#34d399] hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
