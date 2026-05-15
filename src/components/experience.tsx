import { motion } from "framer-motion";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

const items = [
  {
    period: "Mar 2025 — Present",
    role: "Software Development Engineer I · Full Stack",
    company: "Sheshi.AI · Bangalore",
    bullets: [
      "Led end-to-end development of Summary and Publish modules for production financial workflows.",
      "Designed a flexible style-guide system enabling dynamic formatting and currency conversion.",
      "Built reusable templates and an optimized HTML generation pipeline for faster reporting.",
      "Integrated AWS S3 and WebSockets for scalable storage and real-time updates.",
    ],
  },
  {
    period: "Oct 2024 — Nov 2024",
    role: "Frontend Developer Intern",
    company: "CodSoft · Sambhajinagar",
    bullets: [
      "Developed responsive React applications with REST API integration.",
      "Contributed to debugging, feature enhancements and stable deployments.",
    ],
  },
];

export function Experience() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-5 sm:px-6 md:px-10">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-20"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-5 sm:mb-6">
            Experience
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95]">
            A short <span className="font-serif-display text-muted-foreground">timeline</span>.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[22px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {items.map((it, index) => (
              <motion.div
                key={it.role}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-start ${
                  index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      "0 0 0px rgba(168,85,247,0.2)",
                      "0 0 20px rgba(168,85,247,0.5)",
                      "0 0 0px rgba(168,85,247,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[10px] top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background md:left-1/2 md:-translate-x-1/2"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                </motion.div>

                {/* Left Card */}
                <motion.div
                  data-click-sound
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="ml-12 md:ml-0 group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                >
                  {/* Animated Gradient */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-primary/10 blur-3xl"
                  />

                  <div className="relative flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p className="text-xs tracking-[0.25em] uppercase text-primary mb-3">
                        {it.period}
                      </p>

                      <h3 className="text-xl sm:text-2xl font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
                        {it.role}
                      </h3>

                      <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                        {it.company}
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/60 text-primary"
                    >
                      <BriefcaseBusiness className="size-5" />
                    </motion.div>
                  </div>

                  {/* Bottom Animated Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2,
                    }}
                    className="absolute bottom-0 left-0 h-[2px] bg-primary/80"
                  />
                </motion.div>

                {/* Right Content */}
                <div className="ml-12 md:ml-0 space-y-4 pt-2">
                  {it.bullets.map((b, idx) => (
                    <motion.div
                      key={b}
                      data-click-sound
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.08,
                      }}
                      whileHover={{
                        x: 6,
                      }}
                      className="group flex cursor-pointer gap-4 rounded-2xl border border-transparent bg-background/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card/40"
                    >
                      <div className="mt-0.5 text-primary">
                        <Sparkles className="size-4" />
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {b}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
