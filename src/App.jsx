import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-ghuffy-forest">
      <Navbar />

      <main
        id="home"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-ghuffy-lime">
            Established 2019
          </p>

          <h1 className="text-5xl font-black tracking-tight text-ghuffy-white sm:text-7xl">
            GHUFFY
          </h1>

          <p className="mt-4 text-ghuffy-muted">
            Elevate Every Day. Live Ghuffy!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
