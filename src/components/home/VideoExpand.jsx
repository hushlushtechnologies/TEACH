 import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoExpandSection = () => {
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    if (!videoWrapperRef.current) return;

    // Initial state (top pinned)
    gsap.set(videoWrapperRef.current, {
      height: "10vh",
      width: "20%",
      borderRadius: "1.5rem",
      opacity: 0,
      overflow: "hidden",
      marginTop: 24,       // pin top
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
    });

    // Fade in
    gsap.to(videoWrapperRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });

    // Expand on scroll
    ScrollTrigger.create({
      trigger: videoWrapperRef.current,
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Height: expand downward
        const targetHeight = 10 + progress * (100 - 10);

        // Width: expand horizontally
        const widthProgress = Math.min(progress / 0.6, 1);
        const targetWidth = 20 + widthProgress * (90 - 20);

        gsap.to(videoWrapperRef.current, {
          height: `${targetHeight}vh`,
          width: `${targetWidth}%`,
          borderRadius: progress > 0.5 ? "2rem" : "1.5rem",
          ease: "none",
          duration: 0.1,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="h-screen flex -mt-20 overflow-hidden">
      <div
        ref={videoWrapperRef}
        className="relative rounded-2xl overflow-hidden border border-gray-600 shadow-lg aspect-video"
      >
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          loop
          muted
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default VideoExpandSection;
