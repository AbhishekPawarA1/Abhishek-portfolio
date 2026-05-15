import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Financial Report Generation System",
    role: "Sheshi.AI · Production",
    desc: "Engineered a scalable financial reporting system generating dynamic Excel/PDF reports with reusable templates, style-guide customization, currency conversion, AWS S3 storage, and real-time WebSocket updates for production workflows.",
    tags: ["React.js", "Node.js", "WebSockets", "AWS S3"],
  },
  {
    title: "Summary & Publish Modules",
    role: "Sheshi.AI · Full Stack Development",
    desc: "Led end-to-end development of Summary and Publish modules, building reusable templates and an optimized HTML generation pipeline to improve reporting efficiency, scalability, and reliability.",
    tags: ["React.js", "Node.js", "PostHog", "Middleware"],
  },
  {
    title: "Image to Text Converter",
    role: "Personal Project",
    desc: "Built an OCR-based web application that extracts text from images with a responsive UI and efficient client-side processing for a smooth user experience.",
    tags: ["React.js", "Tesseract.js"],
  },
  {
    title: "Frontend Developer Intern",
    role: "CodSoft · Internship",
    desc: "Developed responsive React.js applications with REST API integration, improving UI responsiveness, data flow efficiency, debugging, deployment, and frontend scalability.",
    tags: ["React.js", "REST APIs", "Frontend"],
  },
];

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-20 md:py-32 px-5 sm:px-6 md:px-10">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="flex items-end justify-between mb-10 md:mb-16 flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-5 sm:mb-6">
              Selected Work
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95]">
              Things I've <span className="font-serif-display text-muted-foreground">built</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm sm:text-base text-muted-foreground max-w-sm"
          >
            A handful of projects from production systems and side experiments — shipping React,
            Node.js and AI integrations.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              data-click-sound
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-6 sm:p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] cursor-pointer"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-primary/10 blur-3xl"
              />

              {/* Top */}
              <div className="relative flex items-start justify-between gap-6 mb-6">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  0{i + 1} · {p.role}
                </span>

                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Title */}
              <h3 className="relative text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 leading-tight transition-colors duration-300 group-hover:text-primary">
                {p.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.05,
                    }}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Bottom Animated Border */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                }}
                className="absolute bottom-0 left-0 h-[2px] bg-primary/80"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
