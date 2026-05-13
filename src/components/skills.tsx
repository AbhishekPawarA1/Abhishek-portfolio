const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Python", icon: "🐍" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind", icon: "💨" },
  { name: "Express", icon: "🚂" },
  { name: "Firebase", icon: "🔥" },
  { name: "AWS S3", icon: "☁️" },
  { name: "Git", icon: "🔧" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-5 sm:px-6 md:px-10 bg-card/40 border-y border-border overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-6">Toolkit</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] mb-12 md:mb-20">
          Stack & <span className="font-serif-display text-muted-foreground">tooling</span>.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-5 md:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Crafting with a <span className="font-serif-display text-primary">curated</span> set
              of tools.
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              From building responsive UIs with React and Tailwind to architecting backends with
              Node.js, MongoDB, and AWS — these are the technologies I reach for daily to ship
              reliable, performant products.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Frontend", "Backend", "Database", "Cloud", "DevOps"].map((t) => (
                <span
                  key={t}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border text-xs sm:text-sm bg-background"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: circular orbit */}
          <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] mx-auto [--outer:115px] sm:[--outer:160px] md:[--outer:200px] lg:[--outer:240px] [--inner:65px] sm:[--inner:90px] md:[--inner:115px] lg:[--inner:140px]">
            {/* rings */}
            <div className="absolute inset-0 rounded-full border border-border/60" />
            <div className="absolute inset-[12%] rounded-full border border-border/50" />
            <div className="absolute inset-[26%] rounded-full border border-border/40" />
            {/* glow */}
            <div
              className="absolute inset-[30%] rounded-full blur-3xl opacity-60"
              style={{ background: "var(--gradient-glow)" }}
            />
            {/* center badge */}
            <div className="absolute inset-[36%] rounded-full bg-background border border-primary/40 shadow-[var(--shadow-glow)] flex items-center justify-center">
              <span className="font-serif-display text-base sm:text-xl md:text-2xl text-primary italic">
                stack
              </span>
            </div>

            {/* outer orbit (clockwise) */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
              {skills.slice(0, 8).map((s, i) => {
                const angle = (i / 8) * 360;
                return (
                  <div
                    key={s.name}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={{ transform: `rotate(${angle}deg) translateY(-50%)` }}
                  >
                    <div
                      className="absolute -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]"
                      style={{ transform: `translateY(calc(var(--outer) * -1))` }}
                    >
                      <div
                        className="rounded-xl sm:rounded-2xl border border-border bg-background/90 backdrop-blur px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 flex items-center gap-1.5 sm:gap-2 shadow-lg hover:border-primary hover:scale-110 transition-all"
                        style={{ transform: `rotate(${-angle}deg)` }}
                      >
                        <span className="text-sm sm:text-base md:text-xl">{s.icon}</span>
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
                          {s.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* inner orbit (counter-clockwise) */}
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite_reverse]">
              {skills.slice(8).map((s, i) => {
                const angle = (i / 4) * 360;
                return (
                  <div
                    key={s.name}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div
                      className="absolute -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite]"
                      style={{ transform: `translateY(calc(var(--inner) * -1))` }}
                    >
                      <div
                        className="rounded-lg sm:rounded-xl border border-primary/30 bg-card px-2 py-1 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2 shadow-md"
                        style={{ transform: `rotate(${-angle}deg)` }}
                      >
                        <span className="text-xs sm:text-sm md:text-base">{s.icon}</span>
                        <span className="text-[9px] sm:text-[10px] md:text-xs font-medium whitespace-nowrap">
                          {s.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
