// import React from "react";
// import ActionText from "./ActionText";
// import { Github, ExternalLink } from "lucide-react";

// interface Project {
//   title: string;
//   issueNumber: string;
//   description: string;
//   image: string;
//   tags: string[];
//   githubUrl: string;
//   liveUrl: string;
//   color: string;
// }

// const ProjectsSection: React.FC = () => {
//   const projects: Project[] = [
//     {
//       title: "Super App",
//       issueNumber: "#1",
//       description:
//         "A mighty application with real-time data visualization and interactive features",
//       image:
//         "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format&fit=crop",
//       tags: ["React", "Redux", "Node.js"],
//       githubUrl: "#",
//       liveUrl: "#",
//       color: "bg-comic-red",
//     },
//     {
//       title: "Data Defender",
//       issueNumber: "#2",
//       description:
//         "Secure authentication system with role-based access control and data encryption",
//       image:
//         "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format&fit=crop",
//       tags: ["Auth0", "Express", "MongoDB"],
//       githubUrl: "#",
//       liveUrl: "#",
//       color: "bg-comic-blue",
//     },
//     {
//       title: "Interface Avenger",
//       issueNumber: "#3",
//       description:
//         "Responsive UI library with accessibility features and animated components",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
//       tags: ["TypeScript", "SCSS", "Storybook"],
//       githubUrl: "#",
//       liveUrl: "#",
//       color: "bg-comic-yellow",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-comic-panel relative">
//       <div className="absolute inset-0 bg-dots opacity-20"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <h2 className="title-text text-center mb-4">
//           Epic <ActionText text="Projects" soundId="pop-sound" />
//         </h2>
//         <p className="font-comic text-center text-xl mb-12 max-w-2xl mx-auto">
//           Witness the chronicles of my digital adventures and the powerful
//           applications I've created!
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {projects.map((project, index) => (
//             <div key={index} className="project-panel">
//               <div className={`${project.color} p-4`}>
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-bangers text-3xl text-white">
//                     {project.title}
//                   </h3>
//                   <span className="font-bangers text-2xl border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white">
//                     {project.issueNumber}
//                   </span>
//                 </div>
//               </div>

//               <div className="aspect-w-16 aspect-h-9">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-60 object-cover border-t-4 border-b-4 border-comic-black"
//                 />
//               </div>

//               <div className="p-4">
//                 <p className="font-comic mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="bg-comic-yellow text-comic-black px-2 py-1 rounded font-comic text-sm font-bold border border-comic-black"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3 justify-end">
//                   <a
//                     href={project.githubUrl}
//                     className="comic-button bg-comic-black text-white flex items-center gap-2"
//                     onMouseEnter={() => playSoundEffect("click-sound")}
//                   >
//                     <Github size={18} />
//                     Code
//                   </a>
//                   <a
//                     href={project.liveUrl}
//                     className="comic-button bg-comic-blue text-white flex items-center gap-2"
//                     onMouseEnter={() => playSoundEffect("click-sound")}
//                   >
//                     <ExternalLink size={18} />
//                     Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Adding the playSoundEffect import later in the file to avoid the "used before defined" error
// import { playSoundEffect } from "./SoundEffect";

// export default ProjectsSection;

import React from "react";
import { motion } from "framer-motion";
import ActionText from "./ActionText";
import { Github, ExternalLink } from "lucide-react";
import { playSoundEffect } from "./SoundEffect";
import newsiee from "../assets/Projects/newsiee.png";
import sustainibility from "../assets/Projects/sustainibility-bites.png";
import Portfolio from "../assets/Projects/Portfolio-Sample.png";
import recommender from "../assets/Projects/Movie-recommender.png";
import speech from "../assets/Projects/text-to-speech.png";
import database from "../assets/Projects/database-mongo.png";

interface Project {
  title: string;
  issueNumber: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  color: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "NEWSIEE",
      issueNumber: "#1",
      description:
        "NEWSIEE is an innovative project combining AI, ML, and interactive features to revolutionize news consumption with summarization, deepfake detection, audio, and community engagement tools.",
      image: newsiee,
      tags: ["AI", "ML", "React", "Node.js"],
      githubUrl: "https://github.com/chayanC7mondal/HACKINNO",
      liveUrl: "https://youtu.be/9ry3XrWlpMg?si=LFNcPC8yVYDM8hcu",
      color: "bg-comic-red",
    },
    {
      title: "SUSTAINABILITY BITES",
      issueNumber: "#2",
      description:
        "Sustainability Bites connects restaurants and food donors, predicts food surplus, forecasts AQI for cities, and anticipates future energy usage, aiding in sustainable resource management.",
      image: sustainibility,
      tags: ["Sustainability", "ML", "Prediction", "React"],
      githubUrl: "https://github.com/chayanC7mondal/HackNITR5.0",
      liveUrl: "https://youtu.be/bXMK3iLsqks?si=5OUY5gt1C-So1r2F",
      color: "bg-comic-blue",
    },
    {
      title: "PORTFOLIO WEBSITE",
      issueNumber: "#3",
      description:
        "I developed a responsive portfolio website for a professor using HTML, CSS, and JavaScript. It showcases academic achievements, research, publications, and includes interactive features.",
      image: Portfolio,
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      githubUrl: "https://github.com/chayanC7mondal/PORTFOLIO_SAMPLE",
      liveUrl: "https://portfolio-sample-virid.vercel.app/",
      color: "bg-comic-yellow",
    },
    {
      title: "MOVIE RECOMMENDER",
      issueNumber: "#4",
      description:
        "Developed a movie recommender system using machine learning, leveraging user preferences and behavior to suggest personalized movie recommendations with high accuracy and relevance.",
      image: recommender,
      tags: ["Machine Learning", "Python", "Recommendation", "Data Science"],
      githubUrl: "https://github.com/chayanC7mondal/Movie-Recommender",
      color: "bg-comic-green",
    },
    {
      title: "TEXT-TO-SPEECH",
      issueNumber: "#5",
      description:
        "Developed a JavaScript-based text-to-speech model that converts text into speech, supporting multiple languages and accents, enhancing accessibility and user experience.",
      image: speech,
      tags: ["JavaScript", "Web APIs", "Accessibility", "Audio"],
      githubUrl: "https://github.com/chayanC7mondal/Text--To--Voice",
      liveUrl: "https://chayanc7mondal.github.io/Text--To--Voice/",
      color: "bg-comic-purple",
    },
    {
      title: "STUDENT DATABASE",
      issueNumber: "#6",
      description:
        "Created a student database form using MongoDB, HTML, CSS, and JavaScript, enabling efficient data entry, storage, and retrieval with a user-friendly interface and real-time validation.",
      image: database,
      tags: ["MongoDB", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/chayanC7mondal/Student-Registration-Form",
      liveUrl: "https://student-registration-form-flax.vercel.app/",
      color: "bg-comic-orange",
    },
  ];

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for the title and description
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
    hover: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.2, // Reduced duration for faster response
        ease: [0.4, 0, 0.2, 1], // Smoother easing curve
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-comic-panel relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 bg-dots opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="title-text text-center mb-4"
          variants={textVariants}
        >
          Epic <ActionText text="Projects" soundId="pop-sound" />
        </motion.h2>
        <motion.p
          className="font-comic text-center text-xl mb-12 max-w-2xl mx-auto"
          variants={textVariants}
        >
          Witness the chronicles of my digital adventures and the powerful
          applications I've created recently!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-panel"
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className={`${project.color} p-4`}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bangers text-2xl lg:text-3xl text-white">
                    {project.title}
                  </h3>
                  <span className="font-bangers text-xl lg:text-2xl border-2 border-white rounded-full h-8 w-8 lg:h-10 lg:w-10 flex items-center justify-center text-white text-sm lg:text-base">
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
                <p className="font-comic mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-comic-yellow text-comic-black px-2 py-1 rounded font-comic text-xs font-bold border border-comic-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-button bg-comic-black text-white flex items-center gap-2 text-sm"
                    onMouseEnter={() => playSoundEffect("click-sound")}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-button bg-comic-blue text-white flex items-center gap-2 text-sm"
                      onMouseEnter={() => playSoundEffect("click-sound")}
                    >
                      <ExternalLink size={16} />
                      {project.liveUrl.includes("youtube") ||
                      project.liveUrl.includes("youtu.be")
                        ? "Video"
                        : "Demo"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
