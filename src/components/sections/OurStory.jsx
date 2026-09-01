import { ArrowUpRight, CalendarDays, Quote } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-[-180px] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-ghuffy-lime/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Story"
          title={
            <>
              Built From 2019.
              <span className="text-ghuffy-lime">Growing With Purpose.</span>
            </>
          }
          description="What started in 2019 has evolved into a growing lifestyle brand designed around better everyday experiences."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <GlassCard className="relative min-h-[420px] overflow-hidden p-7 sm:p-9 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-ghuffy-lime/[0.05] via-transparent to-ghuffy-emerald/[0.04]" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ghuffy-lime/25 bg-ghuffy-lime/[0.05]">
                  <CalendarDays size={18} className="text-ghuffy-lime" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-ghuffy-muted">
                  The Beginning
                </span>
              </div>

              <div className="py-12">
                <p className="text-[clamp(5rem,15vw,10rem)] font-black leading-none tracking-[-0.08em] text-ghuffy-white">
                  2019
                </p>

                <div className="mt-5 h-1 w-20 rounded-full bg-ghuffy-lime" />

                <p className="mt-5 max-w-xs text-sm leading-7 text-ghuffy-muted">
                  The year GHUFFY began its journey to redefine everyday
                  lifestyle experiences.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ghuffy-lime">
                <span>Our foundation</span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="relative overflow-hidden p-7 sm:p-9 lg:p-10">
            <div className="relative">
              <Quote size={34} className="text-ghuffy-lime/30" />

              <div className="mt-8 max-w-3xl space-y-6 text-sm leading-8 text-ghuffy-muted sm:text-base">
                <p>
                  GHUFFY began in 2019 with a simple vision: to create a trusted
                  brand that brings quality products and professional services
                  closer to everyday people.
                </p>

                <p>
                  What started as a growing business has evolved into a family
                  of brands spanning household essentials, beauty services,
                  personal care products, and modest fashion. Each arm of GHUFFY
                  is thoughtfully built to meet different needs while staying
                  connected by the same commitment to quality, reliability,
                  convenience, and excellent customer experience.
                </p>

                <p>
                  Today, GHUFFY continues to grow, innovate, and build
                  meaningful connections with individuals, families, and
                  businesses - with a vision to become a trusted name across the
                  markets we serve.
                </p>

                <p>GHUFFY - thoughtfully built, purposefully growing. </p>
                <span className="font-semibold text-ghuffy-white">
                  Elevate every day and live GHUFFY.
                </span>
              </div>

              <div className="mt-10 border-t border-white/[0.07] pt-7">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ghuffy-muted">
                      Our journey
                    </p>

                    <p className="mt-2 text-lg font-black text-ghuffy-white">
                      2019 → The Future
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-ghuffy-lime/20 bg-ghuffy-lime/[0.05]">
                    <ArrowUpRight size={17} className="text-ghuffy-lime" />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
