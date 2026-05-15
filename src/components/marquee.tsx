import { motion } from "framer-motion";

export function Marquee() {
  const items = [
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "AWS S3",
    "WebSockets",
    "Express.js",
    "Firebase",
    "Python",
    "REST APIs",
  ];

  return (
    <section className="relative overflow-hidden border-y border-border py-8 sm:py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

      {/* Top Row */}
      <motion.div
        className="flex w-max gap-5 py-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            data-click-sound
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="group relative flex cursor-pointer items-center gap-3 rounded-full border border-border bg-card/40 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative text-base sm:text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
              {item}
            </span>

            <span className="relative text-primary transition-transform duration-300 group-hover:rotate-180">
              ✦
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Row */}
      <motion.div
        className="mt-5 flex w-max gap-5"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items.slice().reverse(), ...items.slice().reverse()].map((item, index) => (
          <motion.div
            key={index}
            data-click-sound
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="group relative flex cursor-pointer items-center gap-3 rounded-full border border-border bg-card/40 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative text-base sm:text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
              {item}
            </span>

            <span className="relative text-primary transition-transform duration-300 group-hover:rotate-180">
              ✦
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
