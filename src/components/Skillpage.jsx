import React from "react";

const Skillpage = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-primary-light dark:border-primary-dark pb-2">
            My Skills
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition animate-slide-up">
            <div className="text-4xl text-primary-light dark:text-primary-dark mb-4">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="space-y-1">
              <li>React.js (Learning)</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS (Basics)</li>
            </ul>
          </div>

          {/* Backend */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-4xl text-secondary-light dark:text-secondary-dark mb-4">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="space-y-1">
              <li>Node.js (Basics)</li>
              <li>Express.js (Learning)</li>
              <li>Python (Basics)</li>
              <li>Django & Flask (Exploring)</li>
            </ul>
          </div>

          {/* Database */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl text-accent-light dark:text-accent-dark mb-4">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Database</h3>
            <ul className="space-y-1">
              <li>MongoDB (Basics)</li>
              <li>MySQL (Learning)</li>
              <li>Firebase (Exploring)</li>
            </ul>
          </div>

          {/* Tools & Practices */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-4xl text-primary-light dark:text-primary-dark mb-4">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tools & Practices</h3>
            <ul className="space-y-1">
              <li>Git & GitHub (Using)</li>
              <li>VS Code</li>
              <li>Learning Docker</li>
              <li>Testing Basics</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillpage;
