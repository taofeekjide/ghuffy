import { ArrowDown, Sparkles, Star } from "lucide-react";

import Button from "../ui/Button";
import {
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
} from "../ui/CustomSVGComponents";
import { ghuffyBrand } from "../../data/ghuffyData";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden pt-20
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[20%] h-[420px] w-[420px]  -translate-x-1/2 rounded-full bg-ghuffy-lime/[0.07] blur-[120px] sm:h-[550px] sm:w-[550px]
        "
      />

      {/* Emerald glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[35%] h-[350px] w-[350px] rounded-full bg-ghuffy-emerald/[0.07] blur-[100px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className=" pointer-events-none absolute inset-0 opacity-[0.035]
        [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)][background-size:70px_70px]
        [mask-image:linear-gradient(to_bottom,black,transparent_80%)]
        "
      />

      {/* Hero Container */}
      <div
        className="
          relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24
        "
      >
        <div
          className="
            grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10
          "
        >
          {/* Left side hero */}
          <div className="relative z-10">
            {/* Brand badge */}
            <div
              className="
                mb-7 inline-flex items-center gap-2.5 rounded-full border border-ghuffy-lime/25 bg-ghuffy-lime/[0.05] px-4 py-2
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full animate-ping rounded-full bg-ghuffy-lime opacity-60
                  "
                />

                <span
                  className="
                    relative inline-flex  h-2 w-2 rounded-full bg-ghuffy-lime
                  "
                />
              </span>

              <span
                className="
                  text-[10px] font-bold uppercase tracking-[0.22em] text-ghuffy-lime sm:text-xs
                "
              >
                Lifestyle. Quality. Purpose.
              </span>
            </div>

            <h1
              className="
                max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.045em] text-ghuffy-white sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.25rem]
              "
            >
              Elevate{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-ghuffy-lime
                  via-ghuffy-lime
                  to-ghuffy-emerald
                   bg-clip-text text-transparent
                "
              >
                Every Day.
              </span>
              <br />
              Live Ghuffy!
            </h1>

            <p
              className="
                mt-7  max-w-xl text-base
                leading-7 text-ghuffy-muted sm:text-lg  sm:leading-8
              "
            >
              {ghuffyBrand.name} is a lifestyle ecosystem committed to enhancing
              everyday living through quality products, exceptional service, and
              a passion for innovation.
            </p>

            <div
              className=" mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap
              "
            >
              <Button href="https://wa.me/c/2347052975224">
                Shop Our Catalogue
              </Button>

              <Button href="#ecosystem" variant="secondary">
                Explore Our Ecosystem
              </Button>
            </div>

            <div
              className=" mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap
              "
            >
              <p>Our Socials:</p>
              <a
                href="https://www.instagram.com/ghuffy__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-ghuffy-lime">
                  <InstagramIcon />
                </span>
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://www.tiktok.com/@ghuffysubbrands"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-ghuffy-lime">
                  <TikTokIcon />
                </span>
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://www.facebook.com/share/1GPnuRYQ13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-ghuffy-lime">
                  <FacebookIcon />
                </span>
              </a>
            </div>

            <div
              className="
              mt-12 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-3
              "
            >
              <TrustItem
                icon={Sparkles}
                title="Premium Quality"
                description="Curated with care"
              />

              <TrustItem
                icon={Star}
                title="Since 2019"
                description="Built on trust"
              />

              <TrustItem
                icon={ArrowDown}
                title="Customer First"
                description="You're our priority"
              />
            </div>
          </div>

          {/* Right side */}
          <div
            className="
              relative hidden lg:flex lg:items-center lg:justify-center
            "
          >
            <HeroVisual />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="
          absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ghuffy-muted transition-colors hover:text-ghuffy-lime lg:flex
        "
      >
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll to explore
        </span>

        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}

function TrustItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="
          flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-ghuffy-lime/20 bg-ghuffy-lime/[0.05]
        "
      >
        <Icon size={15} className="text-ghuffy-lime" />
      </div>

      <div>
        <p
          className="
            text-xs
            font-bold
            text-ghuffy-white
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-[11px]
            text-ghuffy-muted
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div
      className="
        relative
        flex
        aspect-square
        w-full
        max-w-[510px]
        items-center
        justify-center
      "
    >
      {/* Outer glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          h-[70%]
          w-[70%]
          rounded-full
          bg-ghuffy-lime/[0.08]
          blur-[90px]
        "
      />

      {/* Outer decorative ring */}
      <div
        className="
          absolute inset-[7%] rounded-full border border-ghuffy-lime/10
        "
      />

      {/* Second decorative ring */}
      <div
        className="
          absolute inset-[16%] rounded-full border border-ghuffy-emerald/10 border-dashed
        "
      />

      <div
        className="
          relative flex
          h-[62%]
          w-[62%]
          items-center justify-center rounded-[3rem] border border-ghuffy-lime/20 bg-gradient-to-br from-ghuffy-surface-light via-ghuffy-forest to-ghuffy-surface shadow-[0_0_100px_rgba(181,231,36,0.10)]
        "
      >
        {/* Inner glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-[15%]
            rounded-[2rem]
            bg-gradient-to-br
            from-ghuffy-lime/[0.12]
            to-ghuffy-emerald/[0.04]
            blur-2xl
          "
        />
        {/* Brand logo */}
        <img src="Ghuffy_logo.jpg" alt="Ghuffy logo" className="rounded-4xl" />

        {/* Brand label */}
        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
          "
        >
          <span
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.4em]
              text-ghuffy-white
            "
          >
            GHUFFY
          </span>
        </div>
      </div>

      {/* Floating badge - Top */}
      <div
        className="
          absolute
          right-[5%]
          top-[13%]
          rounded-2xl border border-white/[0.08] bg-ghuffy-forest/80 px-4 py-3 shadow-xl backdrop-blur-xl
        "
      >
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-ghuffy-muted
          "
        >
          Established
        </p>

        <p
          className="
            mt-1
            text-lg
            font-black
            text-ghuffy-lime
          "
        >
          2019
        </p>
      </div>

      {/* Floating badge - Bottom */}
      <div
        className="
          absolute
          bottom-[13%]
          left-[3%] 
          rounded-2xl border border-white/[0.08] bg-ghuffy-forest/80 px-4 py-3 shadow-xl backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-ghuffy-lime
              shadow-[0_0_12px_rgba(181,231,36,0.8)]
            "
          />

          <span
            className="
              text-xs
              font-bold
              text-ghuffy-white
            "
          >
            Lifestyle Ecosystem
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
