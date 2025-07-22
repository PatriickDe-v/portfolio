import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EndFooter from "./components/EndFooter";
import Academic from "./components/Academic";
import Certificates from "./components/Cartificates";

function App() {
  return (
    <>
      <div
        className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300
  selection:text-cyan-900 relative min-h-screen"
      >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className="container mx-auto px-8 sm:px-16 lg:px-40">
          <NavBar />
          <Hero />
          <Technologies />
          <Experience />
          <Academic />
          <Certificates />
          <Projects />
          <EndFooter />
        </div>
      </div>
    </>
  );
}

export default App;
