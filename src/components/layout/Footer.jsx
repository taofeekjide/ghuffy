import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import { ecosystemItems } from "../../data/ghuffyData";

const footerNavigation = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Mission & Vision", href: "#mission" },
      { label: "Core Values", href: "#values" },
      { label: "Our Story", href: "#story" },
      { label: "Ecosystem", href: "#ecosystem" },
    ],
  },
];

const contactLinks = [
  {
    icon: Phone,
    label: "+234 906 895 9576",
    href: "tel:+2349068959576",
  },
  {
    icon: Mail,
    label: "ghuffysubbrands@gmail.com",
    href: "mailto:ghuffysubbrands@gmail.com",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-black/20">
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-ghuffy-lime/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div className="max-w-md">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="GHUFFY home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ghuffy-lime/20 bg-ghuffy-lime/[0.05]">
                <img src="Ghuffy_logo.jpg" alt="Ghuffy logo" className="rounded-xl" />
              </div>

              <span className="text-lg font-black tracking-[0.16em] text-ghuffy-white">
                GHUFFY
              </span>
            </a>

            <p className="mt-7 text-2xl font-black leading-tight tracking-[-0.03em] text-ghuffy-white sm:text-3xl">
              Elevate Every Day.
              <br />
              <span className="text-ghuffy-lime">Live Ghuffy!</span>
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-ghuffy-muted">
              A growing lifestyle ecosystem built around quality, thoughtful
              experiences, and the things that make everyday life better.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/c/2347052975224"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-ghuffy-lime/20 bg-ghuffy-lime/[0.05] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-ghuffy-lime transition-all duration-300 hover:border-ghuffy-lime/40 hover:bg-ghuffy-lime/[0.09]"
            >
              <MessageCircle size={16} />
              WhatsApp Catalogue
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Navigation column */}
          <div>
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-ghuffy-lime">
                  {group.title}
                </p>

                <nav className="mt-6 flex flex-col gap-4">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="w-fit text-sm font-medium text-ghuffy-muted transition-colors duration-300 hover:text-ghuffy-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Ecosystem + contact column */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-ghuffy-lime">
              Our Ecosystem
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {ecosystemItems.map((item) => (
                <a
                  key={item.name}
                  href={item.destination}
                  className="group flex items-center justify-between gap-4 text-sm font-medium text-ghuffy-muted transition-colors duration-300 hover:text-ghuffy-white"
                >
                  <span>{item.name}</span>

                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-ghuffy-lime opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>

            {/* Contact links */}
            <div className="mt-8 border-t border-white/[0.07] pt-7">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-ghuffy-lime">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-4">
                {contactLinks.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center gap-3 text-sm text-ghuffy-muted transition-colors duration-300 hover:text-ghuffy-white"
                    >
                      <Icon size={15} className="text-ghuffy-lime" />
                      {contact.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/[0.07] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ghuffy-muted">
            © {currentYear} GHUFFY. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <div className="hidden h-px w-10 bg-ghuffy-lime/30 sm:block" />

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-ghuffy-muted">
              Established <span className="text-ghuffy-lime">2019</span>
            </p>

            <a
              href="#home"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-ghuffy-muted transition-all duration-300 hover:border-ghuffy-lime/30 hover:text-ghuffy-lime"
              aria-label="Back to top"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
