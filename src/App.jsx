import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import MissionVision from "./components/sections/MissionVision";
import CoreValues from "./components/sections/CoreValues";
import OurStory from "./components/sections/OurStory";
import Ecosystem from "./components/sections/Ecosystem";
import Partnership from "./components/sections/Partnership";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ghuffy-forest">
      <Navbar />

      <main>
        <Hero />
        <About />
        <MissionVision />
        <CoreValues/>
        <OurStory/>
        <Ecosystem/>
        <Partnership/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
