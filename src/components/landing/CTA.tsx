import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 sm:p-16 text-center shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-0 bg-mesh opacity-30 mix-blend-overlay" />
          <h2 className="relative font-display text-3xl sm:text-5xl font-semibold tracking-tight text-primary-foreground">
            Ready to digitize your school?
          </h2>
          <p className="relative mt-4 text-primary-foreground/85 max-w-xl mx-auto">
            Join 50+ schools running smoother, faster and smarter on PixelEdu.
          </p>
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:hello@pixeledu.app"
              className="inline-flex items-center h-12 px-6 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
