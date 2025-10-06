 import React from "react";
import { motion } from "framer-motion";

export default function Header({
  eyebrow = "A",
  headline = ["CREATIVE", "STUDIO"], // Default headline with two words
  description = "COMBINING THE LATEST TRENDS IN DESIGN, TECH, BRANDING AND MANY OTHER FIELDS IS WHAT WE DO BEST. WE DON'T SETTLE TO VIEW THE WORLD FROM ONE PERSPECTIVE.",
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-24 sm:pt-20 px-4">
      {/* Background Overlay */}
      <div className="absolute inset-0   opacity-90 -z-10" />

      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <span className="block text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-extrabold leading-none tracking-tight text-[#e6f3f3]">
              {eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="leading-[0.9] -mt-3 sm:-mt-4 md:-mt-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <span className="block text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9rem] font-extrabold uppercase tracking-tight text-[#e6f3f3]">
              {headline[0]}
            </span>
            {headline[1] && (
              <span className="block text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9rem] font-extrabold uppercase tracking-tight text-[#e6f3f3]">
                {headline[1]}
              </span>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 sm:mt-8 text-[0.75rem] sm:text-sm md:text-base max-w-2xl sm:max-w-3xl mx-auto text-gray-300 tracking-wide leading-relaxed uppercase px-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
