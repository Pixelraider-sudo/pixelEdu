import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  Wallet,
  ClipboardList,
  Sparkles,
  Library,
  Bus,
  Bell,
  Settings,
  LogOut,
  Heart,
  FileBarChart,
} from "lucide-react";
import { clearUser, type Role } from "@/lib/mockAuth";
import { useNavigate } from "@tanstack/react-router";

type Item = { to: string; label: string; icon: LucideIcon };

const NAV: Record<Role, Item[]> = {
  student: [
    { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { to: "/dashboard/learning", label: "My Classes", icon: BookOpen },
    { to: "/dashboard/assignments", label: "Assignments", icon: ClipboardList },
    { to: "/dashboard/timetable", label: "Timetable", icon: Calendar },
    { to: "/dashboard/grades", label: "Results", icon: FileBarChart },
    { to: "/dashboard/fees", label: "Fees", icon: Wallet },
    { to: "/dashboard/library", label: "Library", icon: Library },
    { to: "/dashboard/ai-tutor", label: "AI Tutor", icon: Sparkles },
  ],
  teacher: [
    { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { to: "/dashboard/classes", label: "My Classes", icon: Users },
    { to: "/dashboard/attendance", label: "Attendance", icon: Calendar },
    { to: "/dashboard/assignments", label: "Assignments", icon: ClipboardList },
    { to: "/dashboard/exams", label: "Exams", icon: FileBarChart },
    { to: "/dashboard/ai-tutor", label: "AI Assistant", icon: Sparkles },
  ],
  parent: [
    { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { to: "/dashboard/children", label: "Children", icon: Heart },
    { to: "/dashboard/grades", label: "Results", icon: FileBarChart },
    { to: "/dashboard/fees", label: "Fees", icon: Wallet },
    { to: "/dashboard/timetable", label: "Timetable", icon: Calendar },
    { to: "/dashboard/transport", label: "Transport", icon: Bus },
  ],
  admin: [
    { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { to: "/dashboard/students", label: "Students", icon: GraduationCap },
    { to: "/dashboard/teachers", label: "Teachers", icon: Users },
    { to: "/dashboard/classes", label: "Classes", icon: BookOpen },
    { to: "/dashboard/finance", label: "Finance", icon: Wallet },
    { to: "/dashboard/exams", label: "Exams", icon: ClipboardList },
    { to: "/dashboard/library", label: "Library", icon: Library },
    { to: "/dashboard/transport", label: "Transport", icon: Bus },
    { to: "/dashboard/announcements", label: "Announcements", icon: Bell },
  ],
};

export function Sidebar({ role, school }: { role: Role; school: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const items = NAV[role];

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-border bg-surface h-screen sticky top-0">
      <div className="px-5 py-5 border-b border-border">
        <Logo subtitle={school} />
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {items.map((it) => {
          const active = pathname === it.to;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-card text-foreground shadow-[var(--shadow-soft)] font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/60"
              }`}
            >
              <it.icon className="h-4 w-4" />
              {it.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-border space-y-0.5">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card/60"
        >
          <Settings className="h-4 w-4" /> Settings
        </Link>
        <button
          onClick={() => {
            clearUser();
            navigate({ to: "/login" });
          }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card/60"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </aside>
  );
}
