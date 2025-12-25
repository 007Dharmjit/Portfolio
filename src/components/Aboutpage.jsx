import React from "react";
// Importing icons to replace HTML <i> tags
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaSchool, 
  FaCode, 
  FaReact, 
  FaPython 
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
            About Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Image Section 
              - Mobile: Normal scroll
              - Desktop: Sticky (stays in view while reading text)
          */}
          <div className="w-full md:w-1/3 flex justify-center md:sticky md:top-24 h-fit">
            <img
              src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080&auto=format&fit=crop"
              alt="Dharmjit - Odoo Developer"
              className="rounded-xl shadow-xl w-full max-w-sm md:max-w-md object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 animate-fade-in-up">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a dedicated <strong>Odoo Developer</strong> with a passion for
              building comprehensive business solutions. I specialize in backend
              development using <strong>Python</strong> and <strong>XML</strong>, 
              creating robust modules and customized workflows on{" "}
              <strong>Linux</strong> environments.
            </p>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond the backend, I possess intermediate expertise in modern
              Frontend technologies. I enjoy crafting responsive user interfaces
              using <strong>React.js</strong>, <strong>Tailwind CSS</strong>,
              and <strong>JavaScript</strong>, ensuring that powerful
              functionality is matched by a clean user experience.
            </p>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md mb-8 border border-gray-100 dark:border-gray-600">
              <h3 className="text-xl font-bold mb-6 border-l-4 border-primary-light dark:border-[#6366f1] pl-3 text-gray-800 dark:text-white">
                Education Journey
              </h3>
              
              <div className="space-y-6">
                {/* Degree */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-light dark:text-[#6366f1] text-xl">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                      B.Tech (Bachelor of Technology)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Computer Science & Engineering
                    </p>
                  </div>
                </div>

                {/* HSC */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-light dark:text-[#6366f1] text-xl">
                    <FaUniversity />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                      12th Grade (HSC)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Higher Secondary Education
                    </p>
                  </div>
                </div>

                {/* SSC */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-light dark:text-[#6366f1] text-xl">
                    <FaSchool />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                      10th Grade (SSC)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Secondary School Education
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium px-4 py-2 rounded-full transition hover:bg-blue-200 dark:hover:bg-blue-800 cursor-default">
                <FaCode className="mr-2" /> Odoo v16-v19
              </span>
              <span className="flex items-center bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm font-medium px-4 py-2 rounded-full transition hover:bg-green-200 dark:hover:bg-green-800 cursor-default">
                <FaReact className="mr-2" /> React & Tailwind
              </span>
              <span className="flex items-center bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-sm font-medium px-4 py-2 rounded-full transition hover:bg-yellow-200 dark:hover:bg-yellow-800 cursor-default">
                <FaPython className="mr-2" /> Python & XML
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;