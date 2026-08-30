function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/[0.08]
        bg-white/[0.025]
        backdrop-blur-xl
        transition-all duration-300
        hover:border-ghuffy-lime/30
        hover:bg-ghuffy-lime/[0.03]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;
