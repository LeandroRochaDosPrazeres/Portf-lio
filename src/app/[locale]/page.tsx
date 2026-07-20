import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { NextSteps } from "@/components/sections/NextSteps";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="relative">
        <Hero />
        <About />
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
