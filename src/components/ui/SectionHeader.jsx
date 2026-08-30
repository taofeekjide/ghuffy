function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <div className={`max-w-3xl ${alignment} mb-12`}>
      <div
        className={`
          mb-4 flex items-center gap-3
          ${align === "left" ? "" : "justify-center"}
        `}
      >
        <span className="h-px w-8 bg-ghuffy-lime" />

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-ghuffy-lime">
          {eyebrow}
        </span>

        <span className="h-px w-8 bg-ghuffy-lime" />
      </div>

      {/* Main heading */}
      <h2 className="text-3xl font-black tracking-tight text-ghuffy-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 text-base leading-7 text-ghuffy-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
