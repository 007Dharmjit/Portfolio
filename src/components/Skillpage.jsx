import React from "react";
// Import icons from react-icons/fa
import { 
  FaCogs, 
  FaReact, 
  FaDatabase, 
  FaTools, 
  FaCheckCircle 
} from "react-icons/fa";

const Skillpage = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
            My Technical Skills
          </span>
        </h2>

        {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Odoo & Backend Core */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 duration-300 group">
            <div className="text-4xl text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <FaCogs />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Odoo & Backend</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Odoo Framework (v16-19)</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Python (Core & Scripting)</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />XML (Views & Reports)</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />API Integration</li>
            </ul>
          </div>

          {/* Frontend Development */}
          <div
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 duration-300 group"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-4xl text-blue-500 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <FaReact />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Frontend</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />React.js (Intermediate)</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />JavaScript (ES6+)</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Tailwind CSS</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />HTML5 & CSS3</li>
            </ul>
          </div>

          {/* Database & System */}
          <div
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 duration-300 group"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Database & OS</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />PostgreSQL (Odoo Default)</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />MySQL</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Linux / Ubuntu</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Shell Scripting</li>
            </ul>
          </div>

          {/* Tools & Workflow */}
          <div
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 duration-300 group"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-4xl text-orange-500 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Tools</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Git & GitHub</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />VS Code / PyCharm</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Postman</li>
              <li className="flex items-center"><FaCheckCircle className="text-xs mr-2 opacity-50" />Docker (Basics)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skillpage;