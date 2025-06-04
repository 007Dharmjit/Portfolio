import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Skillpage from "./components/Skillpage";
import Project from "./components/Project";
import Contact from "./components/Contact"; 
import ScrollupButton from './components/ScrollupButton'

function App() {
  return (
    <>
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
