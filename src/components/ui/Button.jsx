import { ArrowRight } from "lucide-react";

function Button({ children, href = "#", variant = "primary", icon = true }) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-ghuffy-lime to-ghuffy-emerald text-ghuffy-forest shadow-[0_12px_35px_rgba(181,231,36,0.18)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(181,231,36,0.28)]",

    secondary:
      "border border-ghuffy-lime/40 bg-transparent text-ghuffy-white hover:bg-ghuffy-lime/10 hover:text-ghuffy-lime",

    ghost: "text-ghuffy-muted hover:text-ghuffy-lime",
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}

      {icon && <ArrowRight size={17} />}
    </a>
  );
}

export default Button;
