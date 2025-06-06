import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Skillpage from "./components/Skillpage";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ScrollupButton from "./components/ScrollupButton";
import { ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() { 
  const isDarkMode = () =>
  document.documentElement.classList.contains("dark");
  return (
    <>
     <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme={isDarkMode() ? "dark" : "light"}
        transition={Bounce}
      />
      <Header />
      <Homepage />
      <Aboutpage />
      <Skillpage />
      <Project />
      <Contact />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3"
        aria-label="Scroll to top"
      >
        <ScrollupButton />
      </button>
    </>
  );
}

export default App;
