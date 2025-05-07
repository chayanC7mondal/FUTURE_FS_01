import React from "react";
import { Code, CodeIcon, Database, Layout, Server, Globe } from "lucide-react";
import ActionText from "./ActionText";

interface TechCard {
  name: string;
  icon: React.ReactNode;
  superpower: string;
  color: string;
}

const TechStackSection: React.FC = () => {
  const techCards: TechCard[] = [
    {
      name: "React",
      icon: <CodeIcon strokeWidth={1.5} size={48} />,
      superpower: "Component Telepathy",
      color: "bg-comic-blue",
    },
    {
      name: "TypeScript",
      icon: <Code strokeWidth={1.5} size={48} />,
      superpower: "Bug Force Field",
      color: "bg-comic-red",
    },
    {
      name: "Node.js",
      icon: <Server strokeWidth={1.5} size={48} />,
      superpower: "Async Speed",
      color: "bg-comic-yellow",
    },
    {
      name: "CSS/Tailwind",
      icon: <Layout strokeWidth={1.5} size={48} />,
      superpower: "Style Shapeshifting",
      color: "bg-comic-blue",
    },
    {
      name: "SQL/NoSQL",
      icon: <Database strokeWidth={1.5} size={48} />,
      superpower: "Data Telekinesis",
      color: "bg-comic-red",
    },
    {
      name: "DevOps",
      icon: <Globe strokeWidth={1.5} size={48} />,
      superpower: "Cloud Summoning",
      color: "bg-comic-yellow",
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-comic-blue relative">
      <div className="absolute inset-0 bg-dots opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="title-text text-white text-center mb-4">
          Tech <ActionText text="Powers" color="yellow" soundId="zap-sound" />
        </h2>
        <p className="font-comic text-white text-center text-xl mb-12 max-w-2xl mx-auto">
          These mighty tools help me craft digital wonders and solve complex
          challenges!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {techCards.map((card, index) => (
            <div
              key={index}
              className={`tech-card ${card.color} transform hover:rotate-2`}
              onMouseEnter={() => playSoundEffect("card-sound")}
            >
              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-3 text-comic-black">{card.icon}</div>
                <h3 className="font-bangers text-3xl mb-2">{card.name}</h3>
                <div className="border-2 border-dashed border-comic-black p-2 rounded-md mb-3 w-full">
                  <span className="font-comic font-bold">SUPERPOWER:</span>
                  <p className="font-bangers text-xl">{card.superpower}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Adding the playSoundEffect import later in the file to avoid the "used before defined" error
import { playSoundEffect } from "./SoundEffect";

export default TechStackSection;
