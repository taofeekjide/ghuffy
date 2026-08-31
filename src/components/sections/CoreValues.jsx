import {
  Award,
  CircleCheck,
  Gem,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { coreValues } from "../../data/ghuffyData";

const valueIcons = {
  quality: Gem,
  integrity: CircleCheck,
  excellence: Award,
  customer: HeartHandshake,
  growth: TrendingUp,
};

function CoreValues() {
  return (
    <section id="values" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-160px] top-1/4 h-80 w-80 rounded-full bg-ghuffy-emerald/[0.05] blur-[110px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Core Values"
          title={
            <>
              The Principles Behind{" "}
              <span className="text-ghuffy-lime">Everything We Do.</span>
            </>
          }
          description="Our values shape the way we create, serve, collaborate, and build the GHUFFY ecosystem."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {coreValues.map((value, index) => {
            const Icon = valueIcons[value.icon];

            const isBottomRow = index >= 3;

            return (
              <GlassCard
                key={value.title}
                className={`group relative overflow-hidden p-7 sm:p-8 lg:col-span-2 ${
                  isBottomRow ? "lg:col-span-3" : ""
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ghuffy-lime/[0.07] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-black tracking-[0.2em] text-ghuffy-lime/50">
                      0{index + 1}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 group-hover:border-ghuffy-lime/30 group-hover:bg-ghuffy-lime/[0.06]">
                      <Icon size={20} className="text-ghuffy-lime" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h3 className="text-xl font-black tracking-tight text-ghuffy-white sm:text-2xl">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-ghuffy-muted">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px flex-1 bg-gradient-to-r from-ghuffy-lime/40 to-transparent transition-all duration-300 group-hover:from-ghuffy-lime/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-ghuffy-lime" />
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

export default CoreValues;
