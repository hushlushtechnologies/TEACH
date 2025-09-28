import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RecentWorkItem from "./RecentWorkItems";

gsap.registerPlugin(ScrollTrigger);

const RecentWork = () => {
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
          end: "top 30%",
          scrub: true, // animation tied to scroll
        },
      }
    );
  }, []);

  return (
    <section className="text-white min-h-screen py-20">
      <div className="h-screen flex flex-col justify-center px-4 md:px-20">
        <h2
          ref={textRef}
          className="text-8xl md:text-[160px] font-extrabold leading-none tracking-tighter text-white uppercase mb-8"
        >
          RECENT
          <br />
          WORK
        </h2>
        <p className="text-2xl md:text-4xl text-gray-400 max-w-2xl mb-12">
          In the creative wilderness, clients find our work truly beloved.
        </p>
        <div className="flex justify-end items-center">
          <button className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-fit">
            Explore work
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <RecentWorkItem
          title="  Model Photoshoot"
          description="Experience the essence of fashion and elegance captured in our exclusive model photoshoot. Each frame highlights style, poise, and the artistry behind our latest collection."
          tags="Fashion, Photography, Model Shoot, Editorial"
          videoUrl="/src/assets/video/modeling.mp4"
          isVideoLeft={false}
        />

        <RecentWorkItem
          title="Elegant Kurti Collection Shoot"
          description="Highlighting our exquisite kurti designs through a vibrant photoshoot, capturing colors, patterns, and textures in every frame."
          tags="Product Photography, Fashion, Kurti Shoot"
          videoUrl="/src/assets/video/product.mp4"
          isVideoLeft={true}
        />

        <RecentWorkItem
          title=" Product Branding"
          description="Designing a cohesive product identity from packaging to promotional visuals, bringing the NEBULUS product line to life."
          tags="Product Design, Packaging, Visual Identity"
          videoUrl="/src/assets/video/branding.mp4"  
          isVideoLeft={false}  
        />
      </div>
    </section>
  );
};

export default RecentWork;

//  import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import RecentWorkItem from "./RecentWorkItems";

// gsap.registerPlugin(ScrollTrigger);

// const RecentWork = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     if (!textRef.current) return;

//     gsap.fromTo(
//       textRef.current,
//       { x: -200, opacity: 0 }, // start offscreen left
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 80%",
//           end: "top 10%",
//           scrub: true, // animation tied to scroll
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="text-white min-h-screen py-20">
//       <div className="h-screen flex flex-col justify-center px-4 md:px-20">
//         <h2
//           ref={textRef}
//           className="text-8xl md:text-[160px] font-extrabold leading-none tracking-tighter text-white uppercase mb-8"
//         >
//           RECENT
//           <br />
//           WORK
//         </h2>
//         <p className="text-2xl md:text-4xl text-gray-400 max-w-2xl mb-12">
//           In the creative wilderness, clients find our work truly beloved.
//         </p>
//         <div className="flex justify-end items-center">
//           <button className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-fit">
//             Explore work
//           </button>
//         </div>
//       </div>
