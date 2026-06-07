import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="flex flex-col p-6 sm:p-10">
        <Logo />
        <div className="flex-1 flex items-center justify-center py-10">
          <div className="w-full max-w-sm">
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-8">{children}</div>
            <div className="mt-6 text-sm text-muted-foreground">{footer}</div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex relative overflow-hidden bg-[image:var(--gradient-primary)]">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="relative m-auto max-w-md px-10 text-primary-foreground">
          <div className="text-xs uppercase tracking-widest opacity-80">
            PixelEdu
          </div>
          <p className="mt-4 font-display text-3xl font-semibold leading-tight">
            "PixelEdu replaced five tools and made admin actually enjoyable for
            our staff."
          </p>
          <div className="mt-6 text-sm opacity-90">
            Mrs. Wanjiru Kamau — Principal, Bosto Primary
          </div>
        </div>
      </div>
    </div>
  );
}
