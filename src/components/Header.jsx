import React, { useEffect, useState } from "react";
import { CiLight ,CiDark  } from "react-icons/ci";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-primary-light dark:text-primary-dark"
        >
          Dharmjit<span className="text-accent-light dark:text-accent-dark">.</span>
        </a>

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
              <i><CiLight /></i>
            ) : (
              <i ><CiDark /></i>
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 py-2 flex flex-col space-y-3">
            {["home", "about", "skills", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="py-2 hover:text-primary-light dark:hover:text-primary-dark transition capitalize"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
