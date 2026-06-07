import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-[var(--shadow-soft)]">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-powered school operating system
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mt-6 text-center font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground max-w-4xl mx-auto"
        >
          The future of school <br className="hidden sm:inline" />
          management starts <span className="text-gradient">here.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="mt-6 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Manage students, teachers, learning, fees, communication and
          AI-powered education from one elegant, unified platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all"
          >
            Get started free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 h-12 px-5 rounded-full border border-border bg-surface-elevated/80 backdrop-blur text-foreground/90 font-medium hover:bg-surface-elevated transition-colors"
          >
            <Play className="h-4 w-4" />
            Book a demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl border border-border bg-surface-elevated shadow-[var(--shadow-elegant)] overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                bosto-primary.pixeledu.app
              </span>
            </div>
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-3 border-r border-border bg-surface p-4 hidden md:block">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                  Bosto Primary
                </div>
                {[
                  "Dashboard",
                  "Students",
                  "Teachers",
                  "Classes",
                  "Finance",
                  "Library",
                  "Reports",
                ].map((i) => (
                  <div
                    key={i}
                    className="text-sm py-2 px-2 rounded-md text-foreground/80 hover:bg-accent/50"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="col-span-12 md:col-span-9">
                <img
                  src={heroImage}
                  alt="Students collaborating on campus"
                  className="w-full h-56 object-cover"
                  width={1024}
                  height={400}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        Good morning, Amina
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Here's what's happening today
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { l: "Students", v: "1,248", c: "+24" },
                      { l: "Attendance", v: "96%", c: "+2%" },
                      { l: "Fees", v: "KSh 4.2M", c: "82%" },
                      { l: "Avg score", v: "78.4", c: "+3.1" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="rounded-xl border border-border bg-card p-4"
                      >
                        <div className="text-xs text-muted-foreground">
                          {s.l}
                        </div>
                        <div className="mt-1 font-display text-2xl font-semibold">
                          {s.v}
                        </div>
                        <div className="text-xs text-success mt-1">{s.c}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-border bg-card p-4 h-28 flex items-end gap-1.5">
                    {[40, 65, 52, 78, 90, 68, 84, 95, 72, 88, 76, 92].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-md bg-[image:var(--gradient-primary)] opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-x-8 -bottom-8 h-32 bg-[image:var(--gradient-primary)] blur-3xl opacity-20 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
