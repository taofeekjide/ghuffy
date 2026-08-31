import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { ghuffyBrand, navigationLinks } from "../../data/ghuffyData";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50

        border-b border-white/[0.06]

        bg-ghuffy-forest/75
        backdrop-blur-xl

        supports-[backdrop-filter]:bg-ghuffy-forest/60
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Ghuffy brands */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
            aria-label={`${ghuffyBrand.name} home`}
          >
            {/* Brand mark */}
            <div
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-ghuffy-lime/30 bg-ghuffy-lime/5 transition-all duration-300 group-hover:border-ghuffy-lime/60 group-hover:bg-ghuffy-lime/10
              "
            >
              {/* Littles glow */}
              <div className="absolute inset-0 rounded-xl bg-ghuffy-lime/10 blur-xl" />

              <span className="relative bg-gradient-to-br from-ghuffy-lime to-ghuffy-emerald bg-clip-text text-xl font-black text-transparent">
                G
              </span>
            </div>

            {/* Brand name */}
            <div>
              <div className="text-lg font-black tracking-[0.14em] text-ghuffy-white">
                {ghuffyBrand.name}
              </div>

              <div className="text-[8px] font-semibold uppercase tracking-[0.3em] text-ghuffy-lime">
                Est. {ghuffyBrand.established}
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 text-sm font-medium text-ghuffy-muted transition-colors duration-300 hover:text-ghuffy-lime after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-ghuffy-lime after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            {/* WhatsApp Catalogue */}
            <a
              href={ghuffyBrand.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ghuffy-lime  to-ghuffy-emerald px-5 py-2.5 text-sm font-bold  text-ghuffy-forest shadow-[0_10px_30px_rgba(181,231,36,0.15)] transition-all duration-300  hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(181,231,36,0.25)]"
            >
              <MessageCircle size={17} />

              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex  h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ghuffy-white transition-all duration-300 hover:border-ghuffy-lime/40 hover:bg-ghuffy-lime/5 hover:text-ghuffy-lime lg:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            className="
              border-t border-white/[0.06] py-5 lg:hidden
            "
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="
                    rounded-xl px-4 py-3 text-sm font-medium text-ghuffy-muted transition-colors hover:bg-white/[0.04] hover:text-ghuffy-lime
                  "
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile WhatsApp CTA */}
              <a
                href={ghuffyBrand.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="
                  mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ghuffy-lime to-ghuffy-emerald px-5 py-3.5 text-sm font-bold text-ghuffy-forest
                "
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
