import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import SoundEffect from "../components/SoundEffect";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Set up scroll animations for each section
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
      {/* Sound Effects */}
      <SoundEffect id="pop-sound" src="/sounds/pop.mp3" />
      <SoundEffect id="zap-sound" src="/sounds/zap.mp3" />
      <SoundEffect id="click-sound" src="/sounds/click.mp3" />
      <SoundEffect id="card-sound" src="/sounds/card.mp3" />
      <SoundEffect id="hover-sound" src="/sounds/hover.mp3" />
      <SoundEffect id="send-sound" src="/sounds/send.mp3" />

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
