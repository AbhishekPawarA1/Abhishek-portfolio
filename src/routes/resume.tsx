import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { RESUME_FILENAME, RESUME_PREVIEW_URL, RESUME_URL } from "@/lib/resume";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [{ title: "Resume — Abhishek Pawar" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pb-28">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-0 left-[-8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          <Link
            to="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </Link>

          <motion.div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <p className="mb-4 text-xs tracking-[0.3em] text-primary uppercase sm:text-sm">Resume</p>
              <h1 className="text-4xl font-bold leading-[0.95] sm:text-5xl md:text-6xl">
                Abhishek <span className="font-serif-display text-muted-foreground">Pawar</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Full Stack Developer · SDE I — preview below or download the PDF.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary"
            >
              <FileText className="size-7" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="overflow-hidden rounded-3xl border border-border bg-card/40 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="border-b border-border bg-background/60 px-4 py-3 sm:px-6">
              <p className="text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
                Preview · {RESUME_FILENAME}
              </p>
            </div>

            <div className="relative bg-muted/20">
              <iframe
                title="Abhishek Pawar Resume Preview"
                src={RESUME_PREVIEW_URL}
                className="block h-[min(78vh,920px)] w-full bg-white"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-primary/40 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <Download className="relative size-5" />
              <span className="relative">Download Resume</span>
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:w-auto"
            >
              Open in new tab
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
