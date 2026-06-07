import { Logo } from "@/components/Logo";

export function Footer() {
  const cols = [
    {
      title: "Product",
      items: ["Features", "Modules", "Pricing", "Integrations"],
    },
    { title: "Company", items: ["About", "Customers", "Careers", "Contact"] },
    {
      title: "Resources",
      items: ["Docs", "Help center", "Status", "Security"],
    },
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The digital operating system for modern schools across Africa and
            beyond.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-wider text-foreground font-semibold">
              {c.title}
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} PixelEdu. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
