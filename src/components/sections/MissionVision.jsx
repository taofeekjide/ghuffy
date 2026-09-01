import { Eye, Target } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

const missionVision = [
  {
    type: "Mission",
    icon: Target,
    title: "Making everyday living better.",
    description:
      "To simplify and enhance daily living by providing trusted products, stylish essentials, professional home services, and modest fashion delivered with convenience, care, and value wherever our customers are.",
  },
  {
    type: "Vision",
    icon: Eye,
    title: "Building a trusted lifestyle brand.",
    description:
      "To be a trusted lifestyle brand known for delivering beauty, comfort, and convenience into every home and daily experience.",
  },
];

function MissionVision() {
  return (
    <section className="relative py-24 sm:py-32" id="mission">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Mission & Vision"
          title={
            <>
              What Drives <span className="text-ghuffy-lime">GHUFFY.</span>
            </>
          }
          description="Our mission keeps us focused on what we do today, while our vision defines the future we're building."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {missionVision.map((item) => {
            const Icon = item.icon;

            return (
              <GlassCard
                key={item.type}
                className="group relative overflow-hidden p-7 sm:p-9 lg:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-ghuffy-lime/[0.07] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ghuffy-lime/25 bg-ghuffy-lime/[0.05] transition-colors duration-300 group-hover:border-ghuffy-lime/50 group-hover:bg-ghuffy-lime/10">
                    <Icon size={26} className="text-ghuffy-lime" />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-ghuffy-lime">
                    Our {item.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-ghuffy-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-ghuffy-muted sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-ghuffy-lime/40 via-ghuffy-emerald/20 to-transparent" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-ghuffy-muted">
                      GHUFFY • {item.type.toUpperCase()}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-ghuffy-lime shadow-[0_0_12px_rgba(181,231,36,0.6)]" />
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
