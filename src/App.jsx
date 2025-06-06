import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Skillpage from "./components/Skillpage";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ScrollupButton from "./components/ScrollupButton";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
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
