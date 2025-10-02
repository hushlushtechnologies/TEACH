import React from 'react'
import { motion } from "framer-motion";
export default function Header({
    eyebrow = "A",
  headline  ="",
  description = "COMBINING THE LATEST TRENDS IN DESIGN, TECH, BRANDING AND MANY OTHER FIELDS IS WHAT WE DO BEST. WE DON'T SETTLE TO VIEW THE WORLD FROM ONE PERSPECTIVE.",
}) {
  return (
      <>
      <section className="relative min-h-screen flex items-center justify-center  text-white overflow-hidden pt-20">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b  ] opacity-90 -z-10" />

        <motion.div
          className="container mx-auto px-6 text-center"
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
              <span className="block text-[5.5rem] md:text-[6.5rem] font-extrabold leading-none tracking-tight text-[#e6f3f3]">
                {eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="leading-[0.82] -mt-6 md:-mt-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <span className="block text-[7.5rem] md:text-[9rem] font-extrabold uppercase tracking-tight text-[#e6f3f3]">
                {headline[0]}
              </span>
              <span className="block text-[7.5rem] md:text-[9rem] font-extrabold uppercase tracking-tight text-[#e6f3f3]">
                {headline[1]}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-8 text-xs md:text-sm lg:text-sm max-w-3xl mx-auto text-gray-300 tracking-wide leading-relaxed uppercase"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
            >
              {description}
            </motion.p>
          </div>

          {/* Down arrow CTA */}
          {/* <motion.div
            className="mt-24 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false }}
          >
            <a
              href="#next"
              aria-label="Scroll down"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-600 hover:border-green-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 5v14M19 12l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div> */}
        </motion.div>

        {/* Decorative bottom line */}

        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30" /> */}
      </section>
      
    </>  
  )
}
