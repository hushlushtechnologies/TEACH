import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Assuming Header, StatCard, CallToActionAndContact, SocialMediaLinks are in ../../components/common/
import Header from "../../components/common/Header";
import SocialMediaLinks from "../../components/home/SocialMedia";
import CallToActionAndContact from "../../components/home/CallToAction";
import StatCard from "../../components/home/StatCard";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text (from left)
      gsap.from(textRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate image (from top)
      gsap.from(imageRef.current, {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="  text-white min-h-screen relative overflow-hidden"
    >
      <Header
        eyebrow="A"
        headline={["VERSATILE", "DESIGN AGENCY."]}
        description="COMBINING THE LATEST TRENDS IN DESIGN, TECH, BRANDING AND MANY OTHER FIELDS IS WHAT WE DO BEST. WE DON'T SETTLE TO VIEW THE WORLD FROM ONE PERSPECTIVE."
      />

      <section className="who-we-are-section py-24 md:py-32 px-4 md:px-8 lg:px-16 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={textRef} className="who-we-are-text">
          <p className="text-yellow-300 text-lg mb-4 uppercase tracking-widest">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            We are the creative force driving innovation and impact.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Founded on the principles of pushing boundaries and challenging the
            status quo, our agency thrives on transforming complex ideas into
            captivating digital experiences. We believe in a collaborative
            journey, working hand-in-hand with our clients to craft solutions
            that resonate and leave a lasting impression. Our multidisciplinary
            team brings together diverse talents, ensuring a holistic approach
            to every project.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            From branding to full-stack development, our passion lies in
            creating memorable design.
          </p>
        </div>
        <div
          ref={imageRef}
          className="who-we-are-image relative     w-full   rounded-lg overflow-hidden  "
        >
          <img
            src="/src/assets/img/about.png"
            alt="Our creative workspace"
            className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0  "></div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <section className="our-approach-section py-24 md:py-32  px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-300 text-lg mb-4 uppercase tracking-widest text-center">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-16">
            Methodical creativity,
            <br /> exceptional results.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="approach-item text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src="/src/assets/img/branding.png"
                  alt="Step 1"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Discovery & Strategy
              </h3>
              <p className="text-gray-300">
                We dive deep into your vision, market, and audience to unearth
                insights that form the bedrock of a robust strategy.
              </p>
            </div>

            <div className="approach-item text-center">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                   src="/src/assets/img/design.png"
                  alt="Step 2"
                 className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Design & Development
              </h3>
              <p className="text-gray-300">
                Translating strategy into stunning visuals and seamless
                functionality, iterating until perfection.
              </p>
            </div>

            <div className="approach-item text-center">
              <div className="w-20 h-20   rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src="/src/assets/img/launch.png"
                  alt="Step 3"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Launch & Evolution
              </h3>
              <p className="text-gray-300">
                Bringing your project to life, followed by continuous
                monitoring, optimization, and future scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call to Action / Contact (using CallToActionAndContact component) */}
      <section className="contact-section">
        <CallToActionAndContact /> {/* The CallToActionAndContact component */}
      </section>

      {/* 8. Social Media Links (using SocialMediaLinks component) */}
      <section className="social-links-section py-16  ">
        <SocialMediaLinks /> {/* The SocialMediaLinks component */}
      </section>
    </div>
  );
}
