import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { setUser, type Role } from "@/lib/mockAuth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — PixelEdu" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("amina@bosto.school");
  const [role, setRole] = useState<Role>("admin");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: email.split("@")[0],
      email,
      role,
      school: "Bosto Primary School",
    });
    navigate({ to: "/dashboard" });
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your PixelEdu portal."
      footer={
        <>
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline"
          >
            Create one
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Email">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            placeholder="you@school.com"
          />
        </Field>
        <Field label="Password">
          <input
            type="password"
            defaultValue="demo1234"
            required
            className="auth-input"
          />
        </Field>
        <Field label="Sign in as">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="auth-input"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            <option value="admin">School Admin</option>
          </select>
        </Field>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="rounded" /> Remember me
          </label>
          <a href="#" className="text-primary hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full h-11 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all"
        >
          Sign in
        </button>
      </form>
      <style>{`.auth-input{width:100%;height:2.75rem;padding:0 0.875rem;border-radius:0.75rem;border:1px solid var(--color-border);background:var(--color-surface-elevated);color:var(--color-foreground);font-size:0.875rem;outline:none;transition:all .15s}.auth-input:focus{border-color:var(--color-ring);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-ring) 20%, transparent)}`}</style>
    </AuthShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/80 mb-1.5 block">
        {label}
      </span>
      {children}
    </label>
  );
}
