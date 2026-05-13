import { Mail, Phone, Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abhishekanandpawar1@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 91727 93078",
    href: "tel:+919172793078",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-32 px-5 sm:px-6 md:px-10">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />

        {/* Floating Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/40"
            style={{
              left: `${10 + i * 7}%`,
              top: `${20 + (i % 5) * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Main Contact Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card/40 px-6 py-14 sm:px-10 md:px-16 md:py-20 backdrop-blur-2xl"
        >
          {/* Animated Gradient Glow */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          />

          {/* Small Badge */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs sm:text-sm text-primary backdrop-blur-xl"
          >
            <Sparkles className="size-4" />
            Let's build something meaningful
          </motion.div>

          {/* Heading */}
          <div className="relative text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9]"
            >
              Have a <span className="font-serif-display text-muted-foreground">project</span>
              <br />
              in mind?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground"
            >
              Open to full-time roles, freelance opportunities and exciting collaborations focused
              on impactful digital experiences.
            </motion.p>
          </div>

          {/* Email CTA */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="relative mt-10 flex justify-center"
          >
            <a
              href="mailto:abhishekanandpawar1@gmail.com"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-primary/30 bg-primary/10 px-6 py-4 text-sm sm:text-lg md:text-2xl font-medium text-primary backdrop-blur-xl transition-all duration-500 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            >
              {/* Shine Effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <span className="relative break-all">abhishekanandpawar1@gmail.com</span>

              <ArrowUpRight className="relative size-5 sm:size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* Social Buttons */}
          <div className="relative mt-12 sm:mt-16 flex flex-wrap justify-center gap-4">
            {socials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.04,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background/40 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                  </div>

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:scale-110">
                      <Icon className="size-4" />
                    </div>

                    <span className="text-sm sm:text-base font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item.label}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs sm:text-sm text-muted-foreground"
        >
          <p>© 2026 Abhishek Pawar. Crafted with care.</p>

          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Bangalore, India
          </motion.p>
        </motion.footer>
      </div>
    </section>
  );
}
