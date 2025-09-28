 import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // GSAP SplitText plugin

// IMPORTANT: Register GSAP plugins (do this once in your App.jsx or main entry point)
gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaLeftRef = useRef(null);
  const ctaRightRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    if (!headlineRef.current || !subtextRef.current) return;

    // --- Initial Text Entrance Animation (using SplitText) ---
    const split = new SplitText(headlineRef.current, { type: "words,chars" });

    gsap.from(split.chars, {
      y: "100%",
      opacity: 0,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(
      [
        subtextRef.current,
        ctaLeftRef.current,
        ctaRightRef.current,
        scrollIndicatorRef.current,
      ],
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 1.2,
      }
    );

    // --- Scroll-based text fade/move ---
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.to(headlineRef.current, {
          opacity: 1 - progress * 2,
          y: -progress * 100,
          ease: "none",
        });
        gsap.to(subtextRef.current, {
          opacity: 1 - progress * 2,
          y: -progress * 80,
          ease: "none",
        });
        gsap.to(
          [ctaLeftRef.current, ctaRightRef.current, scrollIndicatorRef.current],
          {
            opacity: 1 - progress * 5,
            ease: "none",
          }
        );
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      split.revert();
    };
  }, []);

  return (
    <section className="bg-trionn-bg  min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div className="relative z-10 text-center max-w-7xl px-8 pt-16">
        <h1
          ref={headlineRef}
          className="
            text-white 
            font-heading 
            text-6xl md:text-8xl lg:text-9xl xl:text-10xl 
            font-extrabold 
            leading-none 
            uppercase 
            mb-6
          "
        >
          ROAR IN THE <br />
          <span className="text-white/80">DIGITAL WILDERNESS.</span>
        </h1>

        <p
          ref={subtextRef}
          className="
            text-gray-300 
            font-body 
            text-lg md:text-xl 
            max-w-4xl 
            mx-auto
          "
        >
          WE ROAR WITH SUCCESS. DELIVERING THE TRIONN* <br />
          THROUGH VERSATILE DESIGN, BRANDING AND THE LATEST <br />
          TECH DEVELOPMENT TO COMPANIES.
        </p>
      </div>

      <div className="w-full flex justify-between items-center px-8 z-20">
        <button
          ref={ctaLeftRef}
          className="
            px-8 py-3 
            border border-white/50 
            text-white 
            font-body font-bold 
            rounded-full 
            transition duration-300 
            hover:bg-white/10
 
          "
        >
          Explore Work
        </button>

        <button
          ref={ctaRightRef}
          className="
            px-8 py-3 
            border border-trionn-accent 
            text-trionn-accent 
            font-body font-bold 
            rounded-full 
            transition duration-300 
            hover:bg-trionn-accent/10
         
          "
        >
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
