import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Internship from "./Components/Internship/Internship";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#0b0b10] via-[#11111a] to-[#0b0b10] min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internship />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
