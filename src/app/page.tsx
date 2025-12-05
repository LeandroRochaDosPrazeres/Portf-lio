import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { NextSteps } from "@/components/sections/NextSteps";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Education />
        <Timeline />
        <NextSteps />
        <Certifications />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
