import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

import bgVideo from "../global/4k Video ｜ Technology Looped Background ｜ No Copyright Loop Background Video.webm";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 md:px-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/webm" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 z-[1] opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.3em] text-gray-300 uppercase mb-6 sm:mb-8"
        >
          Portfolio · 2026
        </motion.p>

        <h1 className="font-display leading-[0.95] tracking-tight text-white">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif-display text-gray-300"
          >
            I'm a
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold uppercase"
          >
            Full-Stack
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="block text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold uppercase text-right"
          >
            Developer
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold uppercase"
          >
            <span className="font-serif-display text-gray-300 text-[10vw] md:text-[7vw] lg:text-[6vw] mr-4">
              &
            </span>
            Software <span className="text-primary">Engineer</span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-8 md:gap-10 items-end"
        >
          <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
            I'm <span className="text-white">Abhishek Pawar</span>, an SDE I at Sheshi.AI with 1.2+
            years building scalable, high-performance web applications using{" "}
            <span className="text-white">React</span>, <span className="text-white">Node.js</span>,
            RESTful APIs and AI-driven solutions.
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              View my work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:border-primary hover:text-primary transition"
            >
              Contact me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
