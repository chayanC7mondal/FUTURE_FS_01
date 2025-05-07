import React, { useState } from "react";
import { playSoundEffect } from "./SoundEffect";

type ActionTextProps = {
  text: string;
  color?: "red" | "blue" | "yellow";
  soundId?: string;
  className?: string;
};

const ActionText: React.FC<ActionTextProps> = ({
  text,
  color = "red",
  soundId,
  className = "",
}) => {
  const [animate, setAnimate] = useState(false);

  const colorClasses = {
    red: "bg-comic-red text-comic-yellow",
    blue: "bg-comic-blue text-white",
    yellow: "bg-comic-yellow text-comic-red",
  };

  const handleMouseEnter = () => {
    setAnimate(true);
    if (soundId) {
      playSoundEffect(soundId);
    }
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <span
      className={`action-text ${colorClasses[color]} ${
        animate ? "animate-pow" : ""
      } ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </span>
  );
};

export default ActionText;
