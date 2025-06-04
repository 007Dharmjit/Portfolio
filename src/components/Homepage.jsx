import React from "react";
import myImage from "../assets/dharmjit.png";
import Social from "./Social";

const Homepage = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm
            <span className="text-primary-light dark:text-primary-dark">
              Dharmjit
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-accent-light dark:text-accent-dark">
            MERN Stack Developer
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            I build exceptional digital experiences using modern technologies.
            Passionate about creating efficient, scalable solutions with
            beautiful interfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View Work
            </a>
            <a
              href="/Dharmjit_Resume.pdf"
              download
              target="_blank"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center"
            >
              <i className="fas fa-download mr-2"></i> Resume
            </a>
          </div>

          <div className="mt-8 flex space-x-4">
            <Social />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-float">
          <img
            src={myImage}
            alt="My Image"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-[#e3f0eb] dark:border-[#e3f0eb] shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
