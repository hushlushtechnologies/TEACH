 import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RecentWorkItem from "./RecentWorkItems";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 }, // start offscreen left
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
          OUR
          <br />
          SERVICES
        </h2>
        <p className="text-2xl md:text-4xl text-gray-400 max-w-2xl mb-8">
          From branding and digital design to web development and marketing
          strategy, we provide end-to-end creative solutions that help businesses
          grow, stand out, and connect with their audience.
        </p>
      </div>
    </section>
  );
};

export default OurServices;
