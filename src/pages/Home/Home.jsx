import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../../components/home/Hero";
import Particles from "../../components/common/Galaxy";
import DecryptedText from "../../components/common/Depricated";
import ScrollStacks from "../../components/home/ScrollStack";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  // 🔹 Tech-focused business content
  const texts = [
    "Empowering Innovation",
    "AI-Driven Solutions",
    "Cloud Transformation",
    "Seamless Digital Experience",
    "Smart Business Insights",
    "Future-Ready Technology",
  ];

  const images = [
    "/src/assets/img/r (1).png",
    "/src/assets/img/r (2).png",
    "/src/assets/img/r (3).png",
    "/src/assets/img/r (4).png",
    "/src/assets/img/r (5).png",
    "/src/assets/img/r (6).png",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1.5,
          pin: true,
        },
      });

      texts.forEach((_, index) => {
        const textElement = textRefs.current[index];
        const imageElement = imageRefs.current[index];

        if (index === 0) {
          gsap.set(textElement, { opacity: 1, x: 0, scale: 1 });
          gsap.set(imageElement, { opacity: 1, rotationY: 0, scale: 1 });
          return;
        }

        const prevTextElement = textRefs.current[index - 1];
        const prevImageElement = imageRefs.current[index - 1];

        tl.to([prevTextElement, prevImageElement], {
          opacity: 0,
          scale: 0.9,
          rotationY: 90,
          duration: 1.2,
          ease: "power3.inOut",
        })
          .fromTo(
            [textElement, imageElement],
            { opacity: 0, scale: 0.9, rotationY: -90 },
            {
              opacity: 1,
              scale: 1.05,
              rotationY: 0,
              duration: 1.5,
              ease: "power3.inOut",
            },
            "-=0.8"
          )
          .to([textElement, imageElement], {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const setTextRef = (el, index) => (textRefs.current[index] = el);
  const setImageRef = (el, index) => (imageRefs.current[index] = el);

  return (
    <>
      <Hero />

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-20 bg-gradient-to-b  text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative hive-text">
          HushLush Technologies
        </h1>

        <div style={{ marginTop: "4rem" }} className="w-3xl">
          <DecryptedText
            text=" We help your business grow digitally. Our team combines technology,
          creativity, and innovation to deliver seamless solutions that empower
          your brand in the digital era."
            animateOn="view"
            revealDirection="center"
          />
        </div>

 
      
      </section>

      {/* 🔹 What We Do Section (Scroll + Rotating Images) */}
      <section
        ref={containerRef}
        className="relative min-h-screen w-full overflow-hidden   text-white"
      >
        {/* Background Particles */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff", "#00f6ff"]}
            particleCount={250}
            particleSpread={12}
            speed={0.15}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Scrolling content */}
        <div className="relative h-screen w-full flex items-center justify-center px-6 md:px-20 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl perspective-1000">
            {/* Texts */}
            <div className="relative flex-1 text-left md:pr-12">
              {texts.map((text, index) => (
                <p
                  key={index}
                  ref={(el) => setTextRef(el, index)}
                  className="absolute montserrat text-2xl md:text-4xl lg:text-6xl font-extrabold leading-snug 
                             text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-500 
                             opacity-0 drop-shadow-lg"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Images */}
            <div className="relative flex-1 flex justify-center items-center perspective-1000">
              {images.map((img, index) => (
                <img
                  key={index}
                  ref={(el) => setImageRef(el, index)}
                  src={img}
                  alt={`Slide ${index}`}
                  className="absolute w-64 h-64 md:w-[22rem] md:h-[26rem] object-cover rounded-2xl shadow-2xl 
                             border-white/20 opacity-0 transform-gpu"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Outro / CTA */}
      <section className="h-screen flex items-center justify-center p-8 bg-gray-900 text-white">
        <p className="text-2xl md:text-4xl font-semibold text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Driving Business Growth Through Technology 🚀
        </p>
      </section>

 
    </>
  );
}
