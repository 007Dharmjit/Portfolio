import React, { useEffect, useState } from "react";
import { CiLight, CiDark, CiMenuBurger, CiCircleRemove } from "react-icons/ci";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    
    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]); // Re-run when menuOpen changes

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky px-6 md:px-16 top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto py-4 flex justify-between items-center relative z-50">
        <a
          href="#"
          className="text-2xl font-bold text-primary-light dark:text-primary-dark"
        >
          Dharmjit
          <span className="text-accent-light dark:text-accent-dark">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="transition-colors duration-300 capitalize hover:text-primary-light dark:hover:text-primary-dark"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <CiLight className="text-xl" />
            ) : (
              <CiDark className="text-xl" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition relative z-50"
          >
            {menuOpen ? (
              <CiCircleRemove className="text-2xl" />
            ) : (
              <CiMenuBurger className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-8 md:hidden h-screen w-screen">
          {["home", "about", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-2xl font-medium capitalize text-gray-800 dark:text-gray-100 hover:text-primary-light dark:hover:text-primary-dark transition-transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;