import { Sparkles } from "lucide-react";

import Button from "./components/ui/Button";
import SectionHeader from "./components/ui/SectionHeader";
import GlassCard from "./components/ui/GlassCard";

function App() {
  return (
    <main className="min-h-screen bg-ghuffy-forest px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="GHUFFY"
          title="Elevate Every Day. Live Ghuffy!"
          description="A premium lifestyle ecosystem built around quality, innovation, and everyday living."
        />

        <GlassCard className="mx-auto max-w-xl p-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-ghuffy-lime/30 bg-ghuffy-lime/5">
              <Sparkles size={25} className="text-ghuffy-lime" />
            </div>

            <h3 className="text-2xl font-bold text-ghuffy-white">
              GHUFFY 
            </h3>

            <p className="mt-3 text-ghuffy-muted">
              Welcome, still
              Testing the design. Still building
            </p>

            <div className="mt-7">
              <Button>Testing button </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}

export default App;
