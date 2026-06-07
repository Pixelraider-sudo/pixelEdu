import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Can each school have its own branding and domain?",
    a: "Yes. Every school gets its own logo, colors, subdomain and isolated database — all powered by the same PixelEdu core.",
  },
  {
    q: "Does PixelEdu work offline?",
    a: "Core flows like attendance and assignments support offline sync — built for African connectivity realities.",
  },
  {
    q: "Which payment methods are supported?",
    a: "M-Pesa, card, and bank transfer out of the box, with extensible gateways for new providers.",
  },
  {
    q: "How secure is student data?",
    a: "JWT auth, role-based access, encrypted sensitive fields, audit logs and optional 2FA.",
  },
  {
    q: "Can I migrate from another system?",
    a: "Yes — our team handles imports from Excel, Google Sheets and most legacy school systems.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-surface border-y border-border"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          Frequently asked questions
        </h2>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-5 hover:bg-accent/30 transition-colors"
                >
                  <span className="font-medium pr-6">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
