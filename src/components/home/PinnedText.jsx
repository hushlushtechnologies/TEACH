 import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedText() {
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into spans while preserving <br>
 const text = el.innerHTML;
el.innerHTML = text
  .split(/(<br\s*\/?>|\s)/)
  .map((char) => {
    if (char.match(/<br\s*\/?>/)) return char; // keep line breaks
    if (char === " " || char === "") return "&nbsp;"; // preserve spaces
    return `<span class="opacity-30 inline">${char}</span>`; // use inline instead of inline-block
  })
  .join("");


    const chars = el.querySelectorAll("span");

    // Timeline
    const tl = gsap.timeline();
    
    // Animate characters
    tl.to(chars, {
      opacity: 1,
      color: "#fff",
      stagger: 0.08,
      ease: "power2.out",
    });

    // Animate logo after text
    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "+=0.2" // slight delay after text animation
      );
    }

    const animationDuration = tl.duration();

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${animationDuration * 400}`,
      scrub: true,
      pin: true,
      animation: tl,
      // markers: true,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef}>
      <div className="h-screen flex flex-col items-center justify-center gap-8 overflow-hidden">
        <h2
          ref={textRef}
          className="text-3xl md:text-5xl font-extrabold uppercase mx-auto max-w-6xl text-center leading-relaxed  "
        >
          Transform the digital presence with <br />Hushlush Technology
        </h2>
        {/* Logo */}
        <img
          ref={logoRef}
          src="/favicon.png"
          alt="Logo"
          className="w-20 opacity-0" // initially hidden
        />
      </div>
    </section>
  );
}
