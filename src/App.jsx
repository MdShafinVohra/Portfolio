import Navbar from "./components/Navbar";
import { navArray } from "./assets/data";
import About from "./components/About";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar navArray={navArray} />
      <Banner />
      <Projects />
      <Skills />
      <Certificates />
      <About />
      <Services />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
