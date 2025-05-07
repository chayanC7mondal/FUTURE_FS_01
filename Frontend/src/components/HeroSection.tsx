import React, { useEffect, useRef } from "react";
import ActionText from "./ActionText";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(heroRef.current, {
      opacity: 0,
      duration: 0.5,
    })
      .from(
        contentRef.current?.children || [],
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, []);

  const handleExplore = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
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
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-yellow-300 py-20"
    >
      <div className="absolute inset-0 opacity-50 bg-dots"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            ref={contentRef}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Meet the Developer Who Codes with{" "}
              <ActionText text="Superpowers!" color="blue" />
            </h1>

            <div className="bg-white border border-black p-4 rounded-lg shadow-md max-w-lg animate-float">
              <p className="text-gray-700">
                Welcome to my comic-powered portfolio! I transform ideas into
                digital reality with the might of code and creativity!
              </p>
            </div>

            <button
              onClick={handleExplore}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center w-fit"
            >
              Explore My Universe <ArrowRight className="ml-2" />
            </button>
          </div>

          <div ref={imageRef} className="order-1 md:order-2 relative">
            <div className="bg-blue-400 transform rotate-3 p-2 max-w-md mx-auto border-4 border-black">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop"
                alt="Developer Superhero"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-black rounded-full p-2 transform rotate-12">
                <ActionText
                  text="Hello World!"
                  color="yellow"
                  className="text-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
