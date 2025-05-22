import React from "react";
import { motion } from "framer-motion";
import ActionText from "./ActionText";
import hackinnovision from "../assets/hackinnovision.jpg";

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-comic-panel relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-halftone opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="title-text text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          My Origin Story
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Panel 1 */}
          <motion.div
            className="comic-panel bg-white"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-bangers text-2xl mb-3">
              Chapter 1: The Beginning
            </h3>
            <div className="mb-4 border-2 border-black bg-comic-blue h-40 flex items-center justify-center">
              <span className="font-bangers text-white text-xl">
                PANEL IMAGE
              </span>
            </div>
            <p className="font-comic">
              It all started with a{" "}
              <ActionText text="CURIOUS" soundId="pop-sound" /> mind and a
              computer. The digital world called, and I answered!
            </p>
          </motion.div>

          {/* Panel 2 */}
          <motion.div
            className="comic-panel bg-white"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-bangers text-2xl mb-3">Chapter 2: Power-Up</h3>
            <div className="mb-4 border-2 border-black bg-comic-red h-40 flex items-center justify-center">
              <span className="font-bangers text-white text-xl">
                PANEL IMAGE
              </span>
            </div>
            <p className="font-comic">
              Armed with knowledge and determination, I mastered the arts of{" "}
              <ActionText text="CODE" color="blue" soundId="pop-sound" /> and
              design!
            </p>
          </motion.div>

          {/* Panel 3 */}
          <motion.div
            className="comic-panel bg-white"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-bangers text-2xl mb-3">Chapter 3: Today</h3>
            <div className="mb-4 border-2 border-black bg-comic-yellow h-40 flex items-center justify-center overflow-hidden">
              <img
                src={hackinnovision}
                alt="img"
                className="h-full w-full object-cover"
              />
              {/* <span className="font-bangers text-white text-xl absolute">
                PANEL IMAGE
              </span> */}
            </div>
            <p className="font-comic">
              Now I battle digital challenges and craft amazing web experiences
              with{" "}
              <ActionText text="PASSION" color="yellow" soundId="pop-sound" />!
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 max-w-2xl mx-auto speech-bubble"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="speech-text text-center">
            "With great coding power comes great development responsibility. I
            create responsive, accessible and engaging digital experiences that
            make a difference!"
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
