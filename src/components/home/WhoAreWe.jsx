 import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RecentWorkItem from "./RecentWorkItems";

gsap.registerPlugin(ScrollTrigger);

const WhoAreWe = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { x: 200, opacity: 0 }, // start offscreen right
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="text-white min-h-screen py-20 overflow-hidden">
      <div className="h-screen flex flex-col justify-center px-4 md:px-20">
        <h2
          ref={textRef}
          className="text-8xl md:text-[160px] font-extrabold leading-none tracking-tighter text-white uppercase mb-8"
        >
          WHO
          <br />
          WE ARE
        </h2>
        <p className="text-2xl md:text-4xl text-gray-400 max-w-2xl mb-8">
          We are a UAE-based creative studio, blending design, technology, and
          strategy to craft experiences that inspire and connect brands with
          their audience.
        </p>

     

        <div className="flex flex-col justify-center items-end mb-16">

             {/* Supporting line above button */}
        <p className="text-lg md:text-2xl text-gray-500 max-w-xl mb-10">
          Headquartered in Dubai, we partner with ambitious brands and startups
          across the Middle East and beyond to bring bold ideas to life.
        </p>

          <button className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-fit">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
