import {
  ArrowUpRight,
  ExternalLink,
  Home,
  Package,
  Shirt,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { ecosystemItems } from "../../data/ghuffyData";

const ecosystemIcons = [Home, Sparkles, ShoppingBag, Shirt];

function EcosystemImageGallery({ images = [], name }) {
  if (!images.length) return null;

  const imageCount = images.length;

  return (
    <div
      className={`relative mb-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/20 ${imageCount === 1 ? "aspect-[16/9]" : "grid aspect-[16/9] grid-cols-2 gap-1.5"}`}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`group/image relative overflow-hidden ${imageCount === 3 && index === 0 ? "row-span-2" : ""}`}
        >
          <img
            src={image}
            alt={`${name} ${index + 1}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-105"
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ghuffy-forest/40 via-transparent to-transparent opacity-70" />

          <div className="pointer-events-none absolute inset-0 bg-ghuffy-lime/[0.04] opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />
        </div>
      ))}

      {imageCount > 1 && (
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur-md">
          {imageCount} Photos
        </div>
      )}
    </div>
  );
}

function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-ghuffy-lime/[0.035] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Ecosystem"
          title={
            <>
              Four Worlds.{" "}
              <span className="text-ghuffy-lime">One GHUFFY Experience.</span>
            </>
          }
          description="From the home to beauty, products, and personal style, our ecosystem brings different parts of everyday life together under one trusted brand."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {ecosystemItems.map((item, index) => {
            const Icon = ecosystemIcons[index];

            return (
              <GlassCard
                key={item.name}
                className="group relative overflow-hidden p-5 sm:p-7 lg:p-9"
              >
                {/* Large background number */}
                <span className="pointer-events-none absolute -right-3 -top-8 select-none text-[10rem] font-black leading-none tracking-[-0.1em] text-white/[0.025] transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-2 sm:text-[12rem]">
                  {item.number}
                </span>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-ghuffy-lime/[0.05] blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  {/* Image Gallery */}
                  <EcosystemImageGallery
                    images={item.images}
                    name={item.name}
                  />

                  {/* Card header */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-black tracking-[0.25em] text-ghuffy-lime">
                      {item.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 group-hover:border-ghuffy-lime/30 group-hover:bg-ghuffy-lime/[0.06]">
                      <Icon size={21} className="text-ghuffy-lime" />
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ghuffy-muted">
                      GHUFFY
                    </p>

                    <h3 className="mt-3 max-w-md text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-ghuffy-white sm:text-3xl">
                      {item.name}
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-ghuffy-muted">
                      {item.description}
                    </p>
                  </div>

                  {/* Products / Services */}
                  <div className="mt-7">
                    <div className="mb-3 flex items-center gap-2">
                      <Package size={15} className="text-ghuffy-lime" />

                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ghuffy-muted">
                        Products / Services
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.productsServices.map((product) => (
                        <span
                          key={product}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-ghuffy-muted transition-colors duration-300 group-hover:border-ghuffy-lime/15 group-hover:text-ghuffy-white"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ghuffy-lime/[0.07]">
                      <Truck size={15} className="text-ghuffy-lime" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ghuffy-muted">
                        Delivery
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-ghuffy-white">
                        {item.delivery}
                      </p>
                    </div>
                  </div>

                  {/* Bottom link */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-ghuffy-muted transition-colors duration-300 group-hover:text-ghuffy-white">
                      {item.shortName}
                    </span>

                    <a
                      href={item.destination}
                      className="flex items-center gap-2 text-sm font-bold text-ghuffy-lime transition-all duration-300 hover:gap-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here to Explore
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Ecosystem footer */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-ghuffy-lime/10 bg-ghuffy-lime/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-sm font-bold text-ghuffy-white">
              One ecosystem. Multiple ways to live better.
            </p>

            <p className="mt-1 text-xs leading-6 text-ghuffy-muted">
              Explore the GHUFFY family and discover the world that fits you.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-ghuffy-lime">
            <ExternalLink size={14} />
            <span>Explore GHUFFY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
