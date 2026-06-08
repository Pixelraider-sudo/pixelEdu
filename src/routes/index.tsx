import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PixelEdu — The Digital Operating System for Modern Schools" },
      {
        name: "description",
        content:
          "Manage students, teachers, learning, fees and communication from one AI-powered platform. Built for primary, secondary, colleges and universities.",
      },
      {
        property: "og:title",
        content: "PixelEdu — The Digital OS for Modern Schools",
      },
      {
        property: "og:description",
        content: "One elegant platform to run your entire school.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
