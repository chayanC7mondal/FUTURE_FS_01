import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { playSoundEffect } from "./SoundEffect";
import gsap from "gsap";

const FooterSection: React.FC = () => {
  const footerRef = useRef(null);
  const iconsRef = useRef(null);

  // useEffect(() => {
  //   // GSAP animation for footer entrance
  //   gsap.from(footerRef.current, {
  //     y: 50,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power3.out",
  //   });

  //   // GSAP animation for icons
  //   gsap.from(iconsRef.current?.children, {
  //     scale: 0,
  //     opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.1,
  //     ease: "back.out(1.7)",
  //     delay: 0.5,
  //   });
  // }, []);

  return (
    <footer ref={footerRef} className="bg-comic-black py-12 text-yellow-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bangers text-4xl">Developer Name</h2>
            <p className="font-comic mt-2">
              Fighting bugs and creating awesome web experiences
            </p>
          </div>

          <div ref={iconsRef} className="flex gap-6">
            <a
              href="#"
              aria-label="Github"
              className="h-12 w-12 bg-comic-panel rounded-full flex items-center justify-center border-2 border-white hover:bg-comic-yellow hover:text-comic-black transition-colors"
              onMouseEnter={() => playSoundEffect("pop-sound")}
            >
              <Github className="text-comic-black" strokeWidth={2} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-12 w-12 bg-comic-panel rounded-full flex items-center justify-center border-2 border-white hover:bg-comic-blue hover:text-white transition-colors"
              onMouseEnter={() => playSoundEffect("pop-sound")}
            >
              <Linkedin className="text-comic-black" strokeWidth={2} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="h-12 w-12 bg-comic-panel rounded-full flex items-center justify-center border-2 border-white hover:bg-comic-red hover:text-white transition-colors"
              onMouseEnter={() => playSoundEffect("pop-sound")}
            >
              <Twitter className="text-comic-black" strokeWidth={2} />
            </a>
            <a
              href="mailto:email@example.com"
              aria-label="Email"
              className="h-12 w-12 bg-comic-panel rounded-full flex items-center justify-center border-2 border-white hover:bg-comic-yellow hover:text-comic-black transition-colors"
              onMouseEnter={() => playSoundEffect("pop-sound")}
            >
              <Mail className="text-comic-black" strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-comic text-sm opacity-70">
            &copy; {new Date().getFullYear()} Developer Superhero. All rights
            reserved.
          </p>
          <p className="font-comic text-xs mt-2 opacity-70">
            Designed with comic book superpowers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
