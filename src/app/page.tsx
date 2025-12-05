import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

// Lazy load seções abaixo do fold para melhor performance
const Education = dynamic(() => import("@/components/sections/Education").then(mod => ({ default: mod.Education })), {
  loading: () => <SectionSkeleton />,
});
const Timeline = dynamic(() => import("@/components/sections/Timeline").then(mod => ({ default: mod.Timeline })), {
  loading: () => <SectionSkeleton />,
});
const NextSteps = dynamic(() => import("@/components/sections/NextSteps").then(mod => ({ default: mod.NextSteps })), {
  loading: () => <SectionSkeleton />,
});
const Certifications = dynamic(() => import("@/components/sections/Certifications").then(mod => ({ default: mod.Certifications })), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <SectionSkeleton />,
});
const TechStack = dynamic(() => import("@/components/sections/TechStack").then(mod => ({ default: mod.TechStack })), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <SectionSkeleton />,
});

// Skeleton para loading das seções
function SectionSkeleton() {
  return (
    <div className="py-24 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-muted/20 rounded w-48 mx-auto mb-8" />
        <div className="h-64 bg-muted/10 rounded-lg" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <NextSteps />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
