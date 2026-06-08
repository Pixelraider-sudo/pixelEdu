import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/learning")({
  component: () => (
    <div className="max-w-3xl mx-auto text-center py-24">
      <h1 className="font-display text-3xl font-semibold">Coming soon</h1>
      <p className="mt-2 text-muted-foreground">This module is under construction.</p>
    </div>
  ),
});
