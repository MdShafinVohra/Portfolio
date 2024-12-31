import Navbar from "./components/Navbar";
import { navArray } from "./assets/data";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar navArray={navArray} />
      <Hero />
    </div>
  );
}

export default App;
