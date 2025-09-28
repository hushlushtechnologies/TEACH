import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { use, useRef } from "react";
import { tr } from "motion/react-client";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const cardsData = [
  {
    title: "Modern Living Room",
    description:
      "A spacious and stylish living room design with a modern touch, perfect for relaxation and gatherings.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Elegant Bedroom",
    description:
      "A cozy bedroom setup with minimalist furniture and soft lighting for a comfortable sleep environment.",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
  {
    title: "Contemporary Kitchen",
    description:
      "A sleek kitchen design with smart storage, modern appliances, and a clean aesthetic.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    title: "Outdoor Patio",
    description:
      "A beautiful outdoor patio setup with seating arrangements, greenery, and relaxing vibes.",
    img: "https://images.unsplash.com/photo-1601979031483-3991f7c9a5c3",
  },
];

export default function StackCard() {
  const wrapperRef = useRef(null);
  const contentREf = useRef(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentREf.current,
        smooth: 1.5,
        effects: true,
      });

      const cards = gsap.utils.toArray(".card");

      gsap.set(".card-image img", {
        clipPath: "ploygon(0 0,0 100% ,0 100% ,0 0)",
        autoAlpha: 0,
      });

      gsap.set(".card-content h1, .card-content p", {
        y: 0,
        autoAlpha: 0,
      });

      cards.forEach((card, index) => {
        const image = card.querySelector("img");
        const title = card.querySelector(".card-content h1, .card-content p");

        gsap.to(card, {
          scale: 0.8 + 0.2 * (card.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top" + (15 + 35 * index),
            end: "bottom bottom",
            endTrigger: ".container",
            scrub: true,
            pin: card,
            pinSpacing: false,
            invalidateOnRefresh: true,
          },
        });

        ScrollTrigger.create({
          trigger: card,
          start: "bottom bottom",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline();

            tl.to(image, {
              clipPath: "polygon(0 0,0 100% ,100% 100%, 100% 0)",
              autoAlpha: 1,
              duration: 2,
              delay: 0.2,
              ease: "power2.out",
            });

            tl.to(
              title,
              {
                y: -10,
                autoAlpha: 1,
                duration: 0.6,
                ease: "power2.in",
                stagger: 0.4,
              },

              "-=1.5"
            );
          },
        });
      });
    },
    { scopes: [contentREf] }
  );

  return (
    <div className="smoother-wrapper">
      <div className="smoother-content">
        <div className="spacer"></div>

        <div className="container">
          <div className="stacked-cards bg-green-400">
            {cardsData.map((card, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <h1>{card.title}</h1>
                  <p>{card.description}</p>
                </div>

                <div className="card-image">
                  <img src={card.img} className="stack-img" alt={card.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
