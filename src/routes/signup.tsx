import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { setUser, type Role } from "@/lib/mockAuth";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Get started — PixelEdu" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    role: "admin" as Role,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: form.name || "New User",
      email: form.email,
      role: form.role,
      school: form.school || "Demo School",
    });
    navigate({ to: "/dashboard" });
  };

  return (
    <AuthShell
      title="Create your portal"
      subtitle="Get your school running on PixelEdu in minutes."
      footer={
        <>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Full name">
            <input
              required
              className="auth-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Field>
          <Field label="Role">
            <select
              className="auth-input"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value as Role })
              }
            >
              <option value="admin">School Admin</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
              <option value="student">Student</option>
            </select>
          </Field>
        </div>
        <Field label="School name">
          <input
            required
            className="auth-input"
            value={form.school}
            onChange={(e) => setForm({ ...form, school: e.target.value })}
            placeholder="St Mary's School"
          />
        </Field>
        <Field label="Work email">
          <input
            type="email"
            required
            className="auth-input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@school.com"
          />
        </Field>
        <Field label="Password">
          <input
            type="password"
            required
            minLength={8}
            className="auth-input"
            placeholder="At least 8 characters"
          />
        </Field>
        <button
          type="submit"
          className="w-full h-11 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all"
        >
          Create my portal
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
