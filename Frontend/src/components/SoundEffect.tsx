import React, { useRef } from "react";

type SoundEffectProps = {
  src: string;
  id: string;
};

const SoundEffect: React.FC<SoundEffectProps> = ({ src, id }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return <audio ref={audioRef} id={id} src={src} preload="auto" />;
};

export default SoundEffect;

export const playSoundEffect = (id: string) => {
  const audio = document.getElementById(id) as HTMLAudioElement;
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((e) => console.error("Error playing sound:", e));
  }
};
