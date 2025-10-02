// import { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';
// import { gsap } from 'gsap';

// const useSmoothScroll = () => {
//   useEffect(() => {
//     // 1. Initialize Lenis
//     const lenis = new Lenis({
//       duration: 1.2, // Higher duration = slower, smoother scroll
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for a 'float' feel
//       direction: 'vertical',
//       gestureDirection: 'vertical',
//       smoothTouch: false, // Set to true for smoother scrolling on mobile
//       smooth: true,
//       mouseMultiplier: 1,
//       infinite: false,
//     });

//     // 2. Tie Lenis scroll to GSAP ScrollTrigger
//     // This makes sure GSAP's scroll animations fire correctly while Lenis is active.
//     function raf(time) {
//       lenis.raf(time);
//       gsap.updateRoot(time / 1000); // Optional: if you use advanced GSAP features
//       requestAnimationFrame(raf);
//     }
    
//     // 3. Start the animation loop
//     requestAnimationFrame(raf);

//     // 4. Cleanup function
//     return () => {
//       lenis.destroy();
//     };
//   }, []);
// };

// export default useSmoothScroll;

// SmoothScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

let lenisInstance = null; // 👈 global ref

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      smooth: true,
      mouseMultiplier: 1,
      infinite: false,
    });

    lenisInstance = lenis; // 👈 save it

    function raf(time) {
      lenis.raf(time);
      gsap.updateRoot(time / 1000);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};

export const getLenis = () => lenisInstance; // 👈 helper to access it

export default useSmoothScroll;
