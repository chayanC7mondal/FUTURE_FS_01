import React from "react";
import ActionText from "./ActionText";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  issueNumber: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  color: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Super App",
      issueNumber: "#1",
      description:
        "A mighty application with real-time data visualization and interactive features",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Redux", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      color: "bg-comic-red",
    },
    {
      title: "Data Defender",
      issueNumber: "#2",
      description:
        "Secure authentication system with role-based access control and data encryption",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format&fit=crop",
      tags: ["Auth0", "Express", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      color: "bg-comic-blue",
    },
    {
      title: "Interface Avenger",
      issueNumber: "#3",
      description:
        "Responsive UI library with accessibility features and animated components",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
      tags: ["TypeScript", "SCSS", "Storybook"],
      githubUrl: "#",
      liveUrl: "#",
      color: "bg-comic-yellow",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-comic-panel relative">
      <div className="absolute inset-0 bg-dots opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="title-text text-center mb-4">
          Epic <ActionText text="Projects" soundId="pop-sound" />
        </h2>
        <p className="font-comic text-center text-xl mb-12 max-w-2xl mx-auto">
          Witness the chronicles of my digital adventures and the powerful
          applications I've created!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-panel">
              <div className={`${project.color} p-4`}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bangers text-3xl text-white">
                    {project.title}
                  </h3>
                  <span className="font-bangers text-2xl border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white">
                    {project.issueNumber}
                  </span>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover border-t-4 border-b-4 border-comic-black"
                />
              </div>

              <div className="p-4">
                <p className="font-comic mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-comic-yellow text-comic-black px-2 py-1 rounded font-comic text-sm font-bold border border-comic-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 justify-end">
                  <a
                    href={project.githubUrl}
                    className="comic-button bg-comic-black text-white flex items-center gap-2"
                    onMouseEnter={() => playSoundEffect("click-sound")}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="comic-button bg-comic-blue text-white flex items-center gap-2"
                    onMouseEnter={() => playSoundEffect("click-sound")}
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
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

export default ProjectsSection;
