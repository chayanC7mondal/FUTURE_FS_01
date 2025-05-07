import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ActionText from "./ActionText";
import { playSoundEffect } from "./SoundEffect";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    playSoundEffect("send-sound");

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description:
          "Your distress signal has been received. I'll respond soon!",
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-comic-red relative">
      <div className="absolute inset-0 bg-halftone opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="title-text text-white text-center mb-4">
          Send a Signal to HQ
        </h2>
        <p className="font-comic text-white text-center text-xl mb-8 max-w-2xl mx-auto">
          Need a digital superhero for your next project? Drop me a message and
          I'll swoop in to help!
        </p>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="comic-panel bg-white p-6 md:p-8"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="font-bangers text-2xl block mb-2"
              >
                Your Identity
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border-4 border-comic-black font-comic text-lg focus:ring-4 focus:ring-comic-yellow focus:outline-none"
                placeholder="Secret or real name..."
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="font-bangers text-2xl block mb-2"
              >
                Communication Device
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border-4 border-comic-black font-comic text-lg focus:ring-4 focus:ring-comic-yellow focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="font-bangers text-2xl block mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border-4 border-comic-black font-comic text-lg focus:ring-4 focus:ring-comic-yellow focus:outline-none"
                placeholder="What's your mission?"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="comic-button bg-comic-blue text-white text-2xl px-10 py-3"
                onMouseEnter={() => playSoundEffect("hover-sound")}
              >
                <ActionText text="Send Signal!" color="blue" />
              </button>
            </div>

            <div className="text-center mt-6">
              <span className="font-comic text-sm">
                * All messages are transmitted via secure superhero channels
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
