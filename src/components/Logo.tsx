import { Link } from "@tanstack/react-router";

export function Logo({ subtitle }: { subtitle?: string }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-9 w-9 rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5">
          <span className="h-1.5 w-1.5 rounded-sm bg-primary-foreground" />
          <span className="h-1.5 w-1.5 rounded-sm bg-primary-foreground/60" />
          <span className="h-1.5 w-1.5 rounded-sm bg-primary-foreground/60" />
          <span className="h-1.5 w-1.5 rounded-sm bg-primary-foreground" />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-semibold tracking-tight text-foreground">PixelEdu</span>
        {subtitle && (
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
}
