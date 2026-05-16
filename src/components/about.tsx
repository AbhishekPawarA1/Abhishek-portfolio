import { motion } from "framer-motion";
import { Code2, Rocket, BrainCircuit, Database, ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Development",
    icon: Code2,
    body: "End-to-end ownership — from architecture to production. I build scalable React frontends, Node.js APIs, and real-time systems with WebSockets that ship to real users.",
  },
  {
    title: "Performance",
    icon: Rocket,
    body: "Optimized HTML/PDF generation pipelines, reusable templates and middleware that improve report generation efficiency and system reliability.",
  },
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    body: "Integrated AI-driven workflows and analytics with PostHog. Comfortable wiring LLMs and OCR (Tesseract.js) into production-ready experiences.",
  },
  {
    title: "Cloud & Data",
    icon: Database,
    body: "AWS S3 storage at scale, MongoDB and SQL data modeling, plus a flexible style-guide system for dynamic formatting and currency conversion.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32 px-5 sm:px-6 md:px-10">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-14">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-5 sm:mb-6">
            About
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95]">
            Where <span className="font-serif-display text-muted-foreground">expertise</span> meets{" "}
            <span className="text-primary">innovation</span>.
          </h2>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md">
            I focus on building scalable, elegant, and high-performing digital experiences with
            clean architecture and modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              >
                {/* Animated Gradient Glow */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-primary/10 blur-3xl"
                />

                {/* Top */}
                <div className="relative flex items-start justify-between mb-6">
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/60 text-primary"
                  >
                    <Icon className="size-6" />
                  </motion.div>

                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </div>

                {/* Bottom Animated Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                  }}
                  className="absolute bottom-0 left-0 h-[2px] bg-primary/80"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
