import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-80 w-80 rounded-full bg-ghuffy-lime/[0.04] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Us"
          title={
            <>
              More Than a Brand.{" "}
              <span className="text-ghuffy-lime">It's a Lifestyle.</span>
            </>
          }
          description="GHUFFY is a growing lifestyle brand built around premium products, professional services, and thoughtful customer experiences."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassCard className="relative overflow-hidden p-7 sm:p-9 lg:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-ghuffy-lime/[0.06] blur-[70px]" />

            <div className="relative">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ghuffy-lime/25 bg-ghuffy-lime/[0.05]">
                  <Sparkles size={22} className="text-ghuffy-lime" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-ghuffy-muted">
                  GHUFFY
                </span>
              </div>

              <h3 className="max-w-xl text-2xl font-black tracking-tight text-ghuffy-white sm:text-3xl">
                Ghuffy sub-brands
              </h3>

              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-ghuffy-muted sm:text-base">
                <p>
                  Through its specialized sub-brands, GHUFFY operates across household essentials, beauty, and personal care, home-care products, and modest fashion, delivering quality, convenience, and reliable service to customers both locally and nationwide.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm font-bold text-ghuffy-lime">
                <span>Elevate the everyday</span>
                <ArrowUpRight size={17} />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="relative overflow-hidden p-7 sm:p-9 lg:p-10">
            <div className="absolute bottom-[-80px] right-[-80px] h-56 w-56 rounded-full bg-ghuffy-emerald/[0.07] blur-[80px]" />

            <div className="relative flex h-full flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-ghuffy-lime">
                Our Philosophy
              </span>

              <div className="my-auto py-10">
                <div className="text-6xl font-black leading-none tracking-[-0.05em] text-ghuffy-white sm:text-7xl">
                  Better
                  <br />
                  <span className="bg-gradient-to-r from-ghuffy-lime to-ghuffy-emerald bg-clip-text text-transparent">
                    Every Day.
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-ghuffy-muted">
                  Quality isn't an occasional promise at GHUFFY. It's part of
                  how we approach everything we create, curate, and deliver.
                </p>
              </div>

              <div className="border-t border-white/[0.07] pt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-ghuffy-muted">
                  Established
                </p>

                <p className="mt-1 text-2xl font-black text-ghuffy-lime">
                  2019
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default About;
