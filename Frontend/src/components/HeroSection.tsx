import React, { useRef } from "react";
import { motion } from "framer-motion";
import ActionText from "./ActionText";
import { ArrowRight } from "lucide-react";
import { playSoundEffect } from "./SoundEffect";
import heroImage from "../assets/hero.png";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    playSoundEffect("click-sound");
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      // Scroll to the about section with an animation
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: aboutSection,
          offsetY: 80,
        },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <motion.div
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-comic-yellow py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-dots opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={contentRef}
            className="flex flex-col gap-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="title-text text-6xl md:text-7xl lg:text-8xl">
              Meet the Developer Who Codes with{" "}
              <ActionText
                text="Superpowers!"
                color="blue"
                soundId="zap-sound"
              />
            </h1>

            <motion.div
              className="speech-bubble max-w-lg mx-auto md:mx-0 mb-8 animate-float"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="speech-text">
                Welcome to my comic-powered portfolio! I transform ideas into
                digital reality with the might of code and creativity!
              </p>
            </motion.div>

            <button
              onClick={handleExplore}
              className="comic-button bg-comic-red text-white self-start"
            >
              Explore My Universe <ArrowRight className="inline ml-2" />
            </button>
          </motion.div>

          <motion.div
            ref={imageRef}
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="comic-panel bg-comic-blue transform rotate-3 p-2 max-w-md mx-auto">
              <img
                src={heroImage}
                // src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop"
                alt="Developer Superhero"
                className="w-full h-auto border-4 border-comic-black"
              />
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-comic-black rounded-full p-2 transform rotate-12">
                <ActionText
                  text="Hello World!"
                  color="yellow"
                  className="text-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
