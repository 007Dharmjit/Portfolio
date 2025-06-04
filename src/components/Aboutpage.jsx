import React from "react";

const Aboutpage = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
            About Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Developer working at a desk with laptop"
              className="rounded-xl shadow-xl w-full max-w-md "
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              I'm an aspiring full-stack developer currently building my skills
              in JavaScript (React, Node.js), Python , and
              database technologies. I enjoy creating responsive, user-friendly
              interfaces and learning how to build robust backend systems.
            </p>
            <p className="text-lg mb-6">
              While I may not have professional experience yet, I'm actively
              working on personal projects, contributing to open-source, and
              continually expanding my knowledge through tutorials, tech blogs,
              and hands-on practice.
            </p>
            <p className="text-lg mb-8">
              I'm eager to grow, collaborate, and bring creative ideas to life
              through clean code and modern design principles.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow">
                <i className="fas fa-laptop-code text-accent-light dark:text-accent-dark mr-2"></i>
                <span>Learning Full-Stack Development</span>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow">
                <i className="fas fa-project-diagram text-accent-light dark:text-accent-dark mr-2"></i>
                <span>5+ Personal Projects</span>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow">
                <i className="fas fa-book text-accent-light dark:text-accent-dark mr-2"></i>
                <span>100+ Hours of Learning</span>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow">
                <i className="fas fa-code text-accent-light dark:text-accent-dark mr-2"></i>
                <span>Practicing Clean, Modern Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
