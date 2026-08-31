import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import MissionVision from "./components/sections/MissionVision";

function App() {
  return (
    <div className="min-h-screen bg-ghuffy-forest">
      <Navbar />

      <main>
        <Hero />
        <About />
        <MissionVision />
      </main>
    </div>
  );
}

export default App;
