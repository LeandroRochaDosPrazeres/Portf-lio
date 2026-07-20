import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { getPortfolioContent } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

const Education = dynamic(() =>
  import("@/components/sections/Education").then((mod) => ({
    default: mod.Education,
  })),
);
const Timeline = dynamic(() =>
  import("@/components/sections/Timeline").then((mod) => ({
    default: mod.Timeline,
  })),
);
const NextSteps = dynamic(() =>
  import("@/components/sections/NextSteps").then((mod) => ({
    default: mod.NextSteps,
  })),
);
const Certifications = dynamic(() =>
  import("@/components/sections/Certifications").then((mod) => ({
    default: mod.Certifications,
  })),
);
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((mod) => ({
    default: mod.Projects,
  })),
);
const TechStack = dynamic(() =>
  import("@/components/sections/TechStack").then((mod) => ({
    default: mod.TechStack,
  })),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((mod) => ({
    default: mod.Contact,
  })),
);

interface HomeProps {
  params: Promise<{ locale: string }>;
}

function SectionSkeleton({ label }: { label: string }) {
  return (
    <div className="py-24 animate-pulse" role="status" aria-label={label}>
      <div className="container mx-auto px-4">
        <div className="h-8 bg-muted/20 rounded w-48 mx-auto mb-8" />
        <div className="h-64 bg-muted/10 rounded-lg" />
      </div>
    </div>
  );
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const content = getPortfolioContent(isLocale(locale) ? locale : "pt");
  const fallback = <SectionSkeleton label={content.common.loadingSectionLabel} />;

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="relative">
        <Hero />
        <About />
        <Suspense fallback={fallback}>
          <Education />
        </Suspense>
        <Suspense fallback={fallback}>
          <Timeline />
        </Suspense>
        <Suspense fallback={fallback}>
          <NextSteps />
        </Suspense>
        <Suspense fallback={fallback}>
          <Certifications />
        </Suspense>
        <Suspense fallback={fallback}>
          <Projects />
        </Suspense>
        <Suspense fallback={fallback}>
          <TechStack />
        </Suspense>
        <Suspense fallback={fallback}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
