import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getUser, type MockUser } from "@/lib/mockAuth";
import { StudentDashboard } from "@/components/dashboard/views/StudentDashboard";
import { TeacherDashboard } from "@/components/dashboard/views/TeacherDashboard";
import { ParentDashboard } from "@/components/dashboard/views/ParentDashboard";
import { AdminDashboard } from "@/components/dashboard/views/AdminDashboard";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  const [user, setUser] = useState<MockUser | null>(null);
  useEffect(() => setUser(getUser()), []);
  if (!user) return null;
  switch (user.role) {
    case "student":
      return <StudentDashboard user={user} />;
    case "teacher":
      return <TeacherDashboard user={user} />;
    case "parent":
      return <ParentDashboard user={user} />;
    case "admin":
      return <AdminDashboard user={user} />;
  }
}
