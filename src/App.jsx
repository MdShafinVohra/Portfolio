import Navbar from "./components/Navbar";
import { navArray } from "./assets/data";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar navArray={navArray} />
      <Hero />
    </>
  );
}

export default App;
