import { GraduationCap, Users, Wallet, TrendingUp } from "lucide-react";
import { StatCard, Panel, BarChart } from "@/components/dashboard/widgets";
import type { MockUser } from "@/lib/mockAuth";

export function AdminDashboard({ user }: { user: MockUser }) {
  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Good morning, {user.name.split(" ")[0]}
        </h1>
        <p className="text-muted-foreground mt-1">
          {user.school} · School overview
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Students"
          value="1,248"
          delta="+24 this term"
          icon={GraduationCap}
          tone="success"
        />
        <StatCard
          label="Teachers"
          value="86"
          delta="+3 this term"
          icon={Users}
          tone="success"
        />
        <StatCard
          label="Fees collected"
          value="KSh 4.2M"
          delta="82% of target"
          icon={Wallet}
        />
        <StatCard
          label="Avg performance"
          value="78.4"
          delta="+3.1 vs last term"
          icon={TrendingUp}
          tone="success"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Panel
            title="Enrollment trend"
            action={
              <span className="text-xs text-muted-foreground">
                Last 12 months
              </span>
            }
          >
            <BarChart data={[40, 65, 52, 78, 90, 68, 84, 95, 72, 88, 76, 92]} />
          </Panel>
        </div>
        <Panel title="Today">
          <ul className="space-y-3 text-sm">
            {[
              { t: "Form 3 Science trip", s: "08:00" },
              { t: "Parent-teacher meeting", s: "11:00" },
              { t: "Staff briefing", s: "14:30" },
              { t: "Sports day prep", s: "16:00" },
            ].map((i) => (
              <li key={i.t} className="flex items-center justify-between">
                <span>{i.t}</span>
                <span className="text-muted-foreground">{i.s}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Panel title="Recent admissions">
          <table className="w-full text-sm">
            <thead className="text-xs text-muted-foreground">
              <tr>
                <th className="text-left font-medium pb-2">Name</th>
                <th className="text-left font-medium">Class</th>
                <th className="text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Faith Wanjiku", "Grade 4", "Active"],
                ["David Kiprop", "Form 1", "Active"],
                ["Maryam Ali", "Grade 6", "Pending"],
                ["John Mbugua", "Form 2", "Active"],
              ].map(([n, c, s]) => (
                <tr key={n}>
                  <td className="py-2.5">{n}</td>
                  <td>{c}</td>
                  <td className="text-right">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${s === "Active" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}
                    >
                      {s}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel title="Fee collection by class">
          <div className="space-y-3">
            {[
              ["Grade 4", 92],
              ["Grade 5", 85],
              ["Grade 6", 78],
              ["Form 1", 88],
              ["Form 2", 70],
              ["Form 3", 81],
            ].map(([c, p]) => (
              <div key={c as string}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{c}</span>
                  <span className="text-muted-foreground">{p}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-[image:var(--gradient-primary)]"
                    style={{ width: `${p}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
