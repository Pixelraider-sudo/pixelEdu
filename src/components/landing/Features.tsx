import {
  Users,
  GraduationCap,
  Heart,
  BookOpen,
  Wallet,
  Sparkles,
  FileBarChart,
  Library,
  Bus,
  CalendarCheck,
  ClipboardList,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: GraduationCap,
    title: "Student Portal",
    desc: "Digital identity, grades, fees, timetable — all in one place.",
  },
  {
    icon: Heart,
    title: "Parent Portal",
    desc: "Live attendance, results and fee balances for every child.",
  },
  {
    icon: Users,
    title: "Teacher Portal",
    desc: "Attendance, lesson plans, marking and AI assistants.",
  },
  {
    icon: BookOpen,
    title: "Learning Portal",
    desc: "Google Classroom-grade resources, quizzes and discussions.",
  },
  {
    icon: Wallet,
    title: "Finance",
    desc: "Invoices, receipts, payroll, M-Pesa and card payments.",
  },
  {
    icon: Sparkles,
    title: "AI Tutor",
    desc: "Personalised explanations, flashcards and revision exams.",
  },
  {
    icon: FileBarChart,
    title: "AI Reports",
    desc: "Auto-generated report cards with smart teacher comments.",
  },
  {
    icon: Library,
    title: "Library",
    desc: "Barcode lending, fines, reservations and history.",
  },
  {
    icon: Bus,
    title: "Transport",
    desc: "Routes, drivers, pickup points — GPS ready.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance",
    desc: "QR/NFC ready with parent alerts in real time.",
  },
  {
    icon: ClipboardList,
    title: "Exams",
    desc: "Schedule, grade and publish results with analytics.",
  },
  {
    icon: LineChart,
    title: "Analytics",
    desc: "Predict risk, default and performance trends.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-primary font-medium">
            Everything your school needs
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            One platform. <span className="text-gradient">Every workflow.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Replace a dozen disconnected tools with one elegant operating system
            — built for the way modern schools actually work.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-soft)] hover:border-primary/30 transition-all"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition-all">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
