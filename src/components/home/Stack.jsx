 import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stack() {
  const containerRef = useRef(null);
  const cards = [
    { title: "Card 1", text: "This is the first card", color: "bg-purple-500" },
    { title: "Card 2", text: "This is the second card", color: "bg-teal-500" },
    { title: "Card 3", text: "This is the third card", color: "bg-orange-500" },
  ];

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".card");
    const numCards = items.length;

    // --- 1. PIN THE MAIN CONTAINER ---
    // The main container needs to be pinned for the full duration
    // of the card stacking effect. We pin it and then use its scroll
    // progress to drive the child card animations.

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      pin: true,
      pinSpacing: true,
      // The total scroll length should be enough for the cards to transition.
      // E.g., Card 1 needs time to transition out, Card 2 to transition in, etc.
      end: `+=${(numCards - 1) * 1000}`, // Example: 1000px of scroll per transition
    });

    // --- 2. ANIMATE THE CHILD CARDS ---
    // Create an animation for each card to move/scale/fade, driven by its own
    // ScrollTrigger, but ensure they are positioned absolutely to overlap.
    
    items.forEach((item, i) => {
        // Skip the first card's intro animation since it starts visible
        if (i === 0) return; 

        // Animation for Card 2, 3, etc. to scale/fade in as they scroll into view
        gsap.fromTo(
            item,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                // The trigger for this intro animation should start where the card 
                // becomes visible, relative to the main container's scroll.
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top-=${i * 500} top`, // Starts halfway through the previous card's scroll
                    end: `top-=${i * 500 - 300} top`, // Ends 300px later
                    scrub: 1,
                },
            }
        );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Set the total height of the wrapper to define the scrollable area
  // This height must be sufficient for the main container's pin to work.
  const totalPinDuration = (cards.length - 1) * 1000 + 100; // Match the end of the main pin
    
  return (
    <div className="relative">
      <div style={{ height: `${totalPinDuration}px` }}>
        {/* The container that will be pinned and hold all the absolutely positioned cards */}
        <div 
          ref={containerRef}
          className="relative w-full h-screen" // containerRef must have a fixed height (like h-screen)
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card ${card.color} text-white h-screen w-full absolute top-0 left-0 
                         flex items-center justify-center rounded-xl shadow-2xl mx-auto`}
              style={{ 
                  zIndex: cards.length - i, // Ensure cards are layered correctly
                  maxWidth: '90%' // A little room for the rounded-xl margin/shadow
              }}
            >
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">{card.title}</h2>
                <p className="text-lg max-w-xl">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Add a tall div after the pinned section to allow scrolling past it */}
      <div style={{ height: '100vh' }}>End Content</div> 
    </div>
  );
}