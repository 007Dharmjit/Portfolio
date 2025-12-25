import React from "react";
import { CiImport } from "react-icons/ci"; // Import a download icon
import myImage from "../assets/dharmjit.png";
import Social from "./Social";

const Homepage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 bg-transparent"
    >
      {/* Container: Changed px-16 to px-6 for mobile, md:px-16 for desktop */}
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center">
        
        {/* Text Section: Centered on mobile, Left-aligned on Desktop */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-primary-light dark:text-primary-dark">
              Dharmjit
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-6 text-accent-light dark:text-accent-dark">
            MERN Stack Developer
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-lg text-gray-600 dark:text-gray-300">
            I build exceptional digital experiences using modern technologies.
            Passionate about creating efficient, scalable solutions with
            beautiful interfaces.
          </p>

          {/* Buttons: Centered on mobile using justify-center */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              View Work
            </a>
            <a
              href="/Dharmjit_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 text-gray-700 dark:text-gray-200"
            >
              {/* Replaced 'fas fa-download' with React Icon */}
              <CiImport className="text-xl" /> 
              <span>Resume</span>
            </a>
          </div>

          <div className="mt-8 flex space-x-4">
            <Social />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center animate-float">
          <img
            src={myImage}
            alt="Dharmjit Profile"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-[#e3f0eb] dark:border-gray-700 shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;