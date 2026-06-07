const stats = [
  { v: "50+", l: "Schools" },
  { v: "20,000+", l: "Students" },
  { v: "1M+", l: "Assignments" },
  { v: "99.9%", l: "Availability" },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient">
              {s.v}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
