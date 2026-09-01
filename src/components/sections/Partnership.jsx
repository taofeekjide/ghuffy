import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

const contactDetails = [
  {
    icon: Phone,
    label: "24-Hour Phone Line",
    value: "+234 906 895 9576",
    href: "tel:+2349068959576",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria | Online",
    href: "#partnership",
  },
  {
    icon: Mail,
    label: "Operational Email",
    value: "ghuffysubbrands@gmail.com",
    href: "mailto:ghuffysubbrands@gmail.com",
  },
];

function Partnership() {
  return (
    <section
      id="partnership"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ghuffy-lime/[0.035] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-ghuffy-lime/15 bg-ghuffy-lime/[0.035] p-7 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-ghuffy-lime/10" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-ghuffy-lime/[0.06]" />

          <div className="pointer-events-none absolute bottom-[-120px] left-1/3 h-64 w-64 rounded-full bg-ghuffy-emerald/[0.08] blur-[90px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ghuffy-lime/20 bg-ghuffy-lime/[0.06]">
                  <MessageCircle size={18} className="text-ghuffy-lime" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-ghuffy-lime">
                  Partnership & Collaboration
                </span>
              </div>

              <h2 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-ghuffy-white sm:text-5xl lg:text-7xl">
                Let's Build
                <br />
                <span className="text-ghuffy-lime">Something Together.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-ghuffy-muted sm:text-base">
                GHUFFY is open to meaningful collaborations, strategic
                partnerships, business opportunities, and relationships that
                create lasting value.
              </p>

              <a
                href="https://wa.me/2347052975224?text=Hello%20GHUFFY%2C%20I%20am%20interested%20in%20partnership%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-ghuffy-lime px-6 py-3.5 text-sm font-black text-ghuffy-forest transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(190,242,100,0.18)]"
              >
                Start a Conversation
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="border-t border-white/[0.08] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ghuffy-muted">
                What we're open to
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Brand partnerships",
                  "Business collaborations",
                  "Strategic opportunities",
                  "Creative collaborations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-ghuffy-lime" />

                    <span className="text-sm font-medium text-ghuffy-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="mt-6">
          <SectionHeader
            eyebrow="Connect With Us"
            title={
              <>
                We're Easy <span className="text-ghuffy-lime">To Reach.</span>
              </>
            }
            description="Whether you're a customer, partner, supplier, or collaborator, our team is ready to hear from you."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {contactDetails.map((contact) => {
              const Icon = contact.icon;

              return (
                <GlassCard
                  key={contact.label}
                  className="group p-6 transition-all duration-300 hover:border-ghuffy-lime/20"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 group-hover:border-ghuffy-lime/25 group-hover:bg-ghuffy-lime/[0.05]">
                      <Icon size={18} className="text-ghuffy-lime" />
                    </div>

                    {contact.label === "24-Hour Phone Line" && (
                      <Clock3 size={15} className="text-ghuffy-lime/50" />
                    )}
                  </div>

                  <div className="mt-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ghuffy-muted">
                      {contact.label}
                    </p>

                    <a
                      href={contact.href}
                      className="mt-2 block text-base font-bold text-ghuffy-white transition-colors duration-300 group-hover:text-ghuffy-lime"
                    >
                      {contact.value} (Click to reach out)
                    </a>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
