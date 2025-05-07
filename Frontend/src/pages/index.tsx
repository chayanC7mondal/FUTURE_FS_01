import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection.tsx";
import TechStackSection from "../components/TechStackSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
// Removed: import SoundEffect from "../components/SoundEffect";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Index = () => {
  useEffect(() => {
    const sections = ["about", "tech-stack", "projects", "contact"];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(
            `#${section}`,
            { y: 50, opacity: 0.7 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
          );
        },
        once: true,
      });
    });
  }, []);

  return (
    <div className="comic-portfolio">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
