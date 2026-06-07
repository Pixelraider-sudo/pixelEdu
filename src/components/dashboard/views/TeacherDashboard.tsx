import { Users, ClipboardList, Calendar, Sparkles } from "lucide-react";
import { StatCard, Panel, BarChart } from "@/components/dashboard/widgets";
import type { MockUser } from "@/lib/mockAuth";

export function TeacherDashboard({ user }: { user: MockUser }) {
  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Welcome, {user.name.split(" ")[0]}
        </h1>
        <p className="text-muted-foreground mt-1">
          Mathematics · 4 classes today
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Students" value="184" icon={Users} />
        <StatCard
          label="Classes today"
          value="4"
          delta="Next at 10:00"
          icon={Calendar}
        />
        <StatCard
          label="To mark"
          value="32"
          delta="Form 2 CAT"
          icon={ClipboardList}
          tone="warning"
        />
        <StatCard
          label="AI drafts"
          value="6"
          delta="Lesson plans ready"
          icon={Sparkles}
          tone="success"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Panel title="Class average — last 8 weeks">
            <BarChart data={[68, 72, 74, 70, 78, 80, 82, 85]} />
          </Panel>
        </div>
        <Panel title="Today's schedule">
          <ul className="space-y-3 text-sm">
            {[
              ["Form 1 East", "08:00"],
              ["Form 2 West", "10:00"],
              ["Form 3 North", "11:30"],
              ["Form 2 East (CAT)", "14:00"],
            ].map(([c, t]) => (
              <li key={c} className="flex items-center justify-between">
                <span>{c}</span>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel
        title="AI assistant"
        action={
          <span className="text-xs text-primary">Powered by PixelEdu AI</span>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Generate a Form 2 algebra lesson plan",
            "Create 10 revision questions on quadratics",
            "Draft report card comments for top 5",
            "Build a marking scheme for last CAT",
            "Summarise this week's syllabus coverage",
            "Suggest classroom activities for trigonometry",
          ].map((p) => (
            <button
              key={p}
              className="text-left rounded-xl border border-border bg-surface p-4 hover:border-primary/50 hover:bg-card transition-colors text-sm"
            >
              <Sparkles className="h-4 w-4 text-primary mb-2" />
              {p}
            </button>
          ))}
        </div>
      </Panel>
    </div>
  );
}
