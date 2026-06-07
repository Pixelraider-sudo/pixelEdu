export type Role = "student" | "teacher" | "parent" | "admin";

export interface MockUser {
  name: string;
  email: string;
  role: Role;
  school: string;
}

const KEY = "pixeledu_user";

export function getUser(): MockUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as MockUser) : null;
  } catch {
    return null;
  }
}

export function setUser(u: MockUser) {
  localStorage.setItem(KEY, JSON.stringify(u));
}

export function clearUser() {
  localStorage.removeItem(KEY);
}

export const ROLE_LABEL: Record<Role, string> = {
  student: "Student",
  teacher: "Teacher",
  parent: "Parent",
  admin: "School Admin",
};
