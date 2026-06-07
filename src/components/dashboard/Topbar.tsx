import { Bell, Search } from "lucide-react";
import { ROLE_LABEL, type MockUser } from "@/lib/mockAuth";

export function Topbar({ user }: { user: MockUser }) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center gap-3 px-4 sm:px-6 h-16">
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search students, classes, books…"
            className="w-full h-10 pl-9 pr-3 rounded-xl border border-border bg-surface text-sm outline-none focus:border-ring transition-colors"
          />
        </div>
        <button className="relative h-10 w-10 inline-flex items-center justify-center rounded-xl border border-border bg-surface hover:bg-accent transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
        </button>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium leading-tight">{user.name}</div>
            <div className="text-xs text-muted-foreground">
              {ROLE_LABEL[user.role]}
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground flex items-center justify-center font-semibold text-sm">
            {initials}
          </div>
        </div>
      </div>
    </header>
  );
}
