import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  // Navbar scroll animation
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scroll DOWN -> hide navbar
        setShowNav(false);
      } else {
        // Scroll UP -> show navbar
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -120 }}
        animate={{
          y: showNav ? 0 : -140,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2"
      >
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background/55 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
          {/* Infinite Snake Border */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl">
            <motion.div
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 h-[2px] w-72 bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]"
            />
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/5 opacity-40 blur-3xl" />

          <div className="relative flex items-center justify-between px-5 md:px-8 py-4">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-foreground/20 px-5 py-2.5 text-sm tracking-wide transition-all duration-500 hover:border-primary"
              >
                {/* Hover Glow */}
                <span className="absolute inset-0 bg-primary/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* Shine */}
                <span className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

                <span className="relative z-10 font-medium">Abhishek Pawar</span>

                <sup className="relative z-10 text-[9px] text-primary">™</sup>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm text-foreground/75 transition-all duration-300 hover:text-primary"
                >
                  {/* Hover Background */}
                  <span className="absolute inset-0 scale-0 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-100" />

                  {/* Glow */}
                  <span className="absolute inset-0 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 bg-primary/20" />

                  {/* Shine */}
                  <span className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
              href="mailto:abhishekanandpawar1@gmail.com"
              className="group relative hidden overflow-hidden md:flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary"
            >
              {/* Base */}
              <span className="absolute inset-0 bg-primary/10 transition-all duration-500 group-hover:bg-primary/20" />

              {/* Shine Sweep */}
              <span className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

              {/* Glow */}
              <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

              {/* Pulse Border */}
              <span className="absolute inset-0 rounded-full border border-primary/50 opacity-0 blur-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

              <span className="relative z-10 tracking-wide transition-transform duration-300 group-hover:-translate-x-0.5">
                Hire Me
              </span>

              <ArrowUpRight className="relative z-10 size-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="group relative flex md:hidden items-center justify-center overflow-hidden rounded-full border border-foreground/20 p-2.5 transition-all duration-300 hover:border-primary hover:text-primary"
            >
              {/* Glow */}
              <span className="absolute inset-0 bg-primary/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* Shine */}
              <span className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <X className="size-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Menu className="size-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 z-40 w-[92%] max-w-md -translate-x-1/2 overflow-hidden rounded-3xl border border-border bg-background/90 p-5 backdrop-blur-2xl md:hidden"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 bg-primary/5 blur-3xl" />

            <div className="relative flex flex-col gap-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border px-5 py-4 text-foreground/80 transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  {/* Hover Background */}
                  <span className="absolute inset-0 bg-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  {/* Shine */}
                  <span className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

                  <span className="relative z-10">{link.label}</span>

                  <ArrowUpRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="mailto:abhishekanandpawar1@gmail.com"
                className="group relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-primary/30 px-5 py-4 text-sm font-semibold text-primary"
              >
                {/* Background */}
                <span className="absolute inset-0 bg-primary/10 transition-all duration-500 group-hover:bg-primary" />

                {/* Shine Sweep */}
                <span className="absolute -left-[130%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[140%]" />

                {/* Glow */}
                <span className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 bg-primary/30" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                  Hire Me
                </span>

                <ArrowUpRight className="relative z-10 size-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-foreground" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
