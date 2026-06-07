const quotes = [
  {
    q: "PixelEdu replaced five tools. Our staff actually enjoys admin now.",
    a: "Mrs. Wanjiru Kamau",
    r: "Principal, Bosto Primary",
  },
  {
    q: "Fees collection jumped 34% in one term thanks to automated reminders.",
    a: "Daniel Otieno",
    r: "Finance Officer, St Mary's",
  },
  {
    q: "Parents finally feel involved — and my marking takes half the time.",
    a: "Mr. Brian Mwangi",
    r: "Mathematics Teacher",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
          Loved by schools <span className="text-gradient">across Africa.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q) => (
            <figure
              key={q.a}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-6"
            >
              <blockquote className="text-foreground leading-relaxed">
                "{q.q}"
              </blockquote>
              <figcaption className="mt-auto">
                <div className="font-medium text-foreground">{q.a}</div>
                <div className="text-sm text-muted-foreground">{q.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
