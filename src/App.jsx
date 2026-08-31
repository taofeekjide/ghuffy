import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-ghuffy-forest">
      <Navbar />

      <main>
        <Hero />

        {/* Temporary section so we can test scrolling */}
        <section className="min-h-screen bg-ghuffy-surface px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-ghuffy-white">
              Next Section
            </h2>

            <p className="mt-4 text-ghuffy-muted">
              To test scrolling.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
