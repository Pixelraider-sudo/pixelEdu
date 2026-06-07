import { BookOpen, ClipboardList, Wallet, Award } from "lucide-react";
import { StatCard, Panel, BarChart } from "@/components/dashboard/widgets";
import type { MockUser } from "@/lib/mockAuth";

export function StudentDashboard({ user }: { user: MockUser }) {
  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Hi {user.name.split(" ")[0]}, ready to learn?
        </h1>
        <p className="text-muted-foreground mt-1">
          Grade 6 · Adm No. PE/2024/0142
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Attendance"
          value="96%"
          delta="Excellent"
          icon={Award}
          tone="success"
        />
        <StatCard
          label="Avg score"
          value="82.5"
          delta="Rank 6 / 48"
          icon={BookOpen}
          tone="success"
        />
        <StatCard
          label="Pending tasks"
          value="4"
          delta="2 due today"
          icon={ClipboardList}
          tone="warning"
        />
        <StatCard
          label="Fees balance"
          value="KSh 8,500"
          delta="Due 20 Jun"
          icon={Wallet}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Panel title="Performance by subject">
            <BarChart data={[78, 85, 72, 88, 80, 92, 76, 84]} />
            <div className="mt-3 grid grid-cols-4 sm:grid-cols-8 gap-1 text-[10px] text-muted-foreground text-center">
              {["Math", "Eng", "Sci", "Kis", "CRE", "SS", "ICT", "PE"].map(
                (s) => (
                  <div key={s}>{s}</div>
                ),
              )}
            </div>
          </Panel>
        </div>
        <Panel title="Today's classes">
          <ul className="space-y-3 text-sm">
            {[
              ["Mathematics", "08:00", "Mr. Mwangi"],
              ["English", "09:30", "Ms. Achieng"],
              ["Science", "11:00", "Mr. Otieno"],
              ["Kiswahili", "14:00", "Bw. Hassan"],
            ].map(([s, t, te]) => (
              <li key={s} className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-medium">{s}</div>
                  <div className="text-xs text-muted-foreground">{te}</div>
                </div>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Pending assignments">
        <ul className="divide-y divide-border">
          {[
            ["Algebra worksheet 3", "Mathematics", "Due today"],
            ["Essay: My favorite book", "English", "Due tomorrow"],
            ["Ecosystem diagram", "Science", "Due Fri"],
            ["Insha ya wasifu", "Kiswahili", "Due Mon"],
          ].map(([t, s, d]) => (
            <li key={t} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-warning/15 text-warning">
                {d}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
