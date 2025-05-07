import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ActionText from "./ActionText";
import { playSoundEffect } from "./SoundEffect";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    playSoundEffect(menuOpen ? "click-sound" : "pop-sound");
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    playSoundEffect("click-sound");

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Close mobile menu if it's open
      if (menuOpen) {
        setMenuOpen(false);
      }

      // Animate section entrance
      const targetSection = document.getElementById(targetId);
      gsap.fromTo(
        targetSection,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.5 }
      );

      // Scroll to the section with animation
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetElement,
          offsetY: 80,
        },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-comic-black shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="font-bangers text-3xl text-comic-red"
            onClick={(e) => {
              e.preventDefault();
              playSoundEffect("click-sound");
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: 0 },
                ease: "power3.inOut",
              });
            }}
          >
            <span
              className={`transition-colors ${
                isScrolled ? "text-comic-yellow" : "text-comic-red"
              }`}
            >
              <ActionText
                text="Dev Hero"
                color={isScrolled ? "yellow" : "red"}
              />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-bangers text-xl relative ${
                  isScrolled
                    ? "text-white hover:text-comic-yellow"
                    : "text-comic-black hover:text-comic-red"
                } transition-colors`}
                onClick={(e) => handleNavigation(e, link.href.substring(1))}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-comic-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-comic-black"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute w-full bg-comic-panel border-b-4 border-comic-black">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block font-bangers text-2xl py-3 text-comic-black hover:text-comic-red transition-colors"
                onClick={(e) => handleNavigation(e, link.href.substring(1))}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
