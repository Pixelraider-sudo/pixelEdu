import { Heart, Calendar, Wallet, Bell } from "lucide-react";
import { StatCard, Panel } from "@/components/dashboard/widgets";
import type { MockUser } from "@/lib/mockAuth";

export function ParentDashboard({ user }: { user: MockUser }) {
  const children = [
    {
      name: "Faith Wanjiku",
      class: "Grade 6",
      attendance: 96,
      avg: 82,
      fees: 8500,
    },
    { name: "David Kiprop", class: "Form 1", attendance: 92, avg: 75, fees: 0 },
  ];
  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Hello {user.name.split(" ")[0]}
        </h1>
        <p className="text-muted-foreground mt-1">
          Tracking 2 children at {user.school}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Children" value="2" icon={Heart} />
        <StatCard
          label="Attendance avg"
          value="94%"
          delta="On track"
          icon={Calendar}
          tone="success"
        />
        <StatCard
          label="Outstanding fees"
          value="KSh 8,500"
          delta="1 child"
          icon={Wallet}
          tone="warning"
        />
        <StatCard label="New alerts" value="3" delta="2 unread" icon={Bell} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {children.map((c) => (
          <Panel
            key={c.name}
            title={c.name}
            action={
              <span className="text-xs text-muted-foreground">{c.class}</span>
            }
          >
            <div className="grid grid-cols-3 gap-3 text-center">
              <Mini label="Attendance" value={`${c.attendance}%`} />
              <Mini label="Avg score" value={`${c.avg}`} />
              <Mini
                label="Fees"
                value={
                  c.fees === 0 ? "Cleared" : `KSh ${c.fees.toLocaleString()}`
                }
              />
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Latest: "Excellent improvement in mathematics this term." — Mr.
              Mwangi
            </div>
          </Panel>
        ))}
      </div>

      <Panel title="Recent announcements">
        <ul className="divide-y divide-border">
          {[
            ["School closed Monday — public holiday", "1h ago"],
            ["Term 2 results now available", "Yesterday"],
            ["Parent-teacher meeting on 18 June", "2 days ago"],
          ].map(([t, w]) => (
            <li
              key={t}
              className="py-3 flex items-center justify-between text-sm"
            >
              <span>{t}</span>
              <span className="text-xs text-muted-foreground">{w}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-display text-lg font-semibold mt-0.5">{value}</div>
    </div>
  );
}
