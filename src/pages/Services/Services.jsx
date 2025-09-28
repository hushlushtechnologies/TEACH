 import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../components/common/Header";
import ServiceCard from "./ServiceCard";
import ScrollVelocity from "../../components/home/ScrollVelicity";
import MagicBento from "../../components/home/MagnetBento";
import CallToActionAndContact from "../../components/home/CallToAction";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const h3Ref = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Heading animation
    if (h3Ref.current) {
      const text = h3Ref.current.innerText;
      const letters = text.split("");
      h3Ref.current.innerHTML = letters
        .map((letter) =>
          letter === " "
            ? `<span class="inline-block mr-[0.25em]">&nbsp;</span>`
            : `<span class="inline-block">${letter}</span>`
        )
        .join("");

      gsap.set(h3Ref.current.children, { opacity: 0, y: 20 });

      gsap.to(h3Ref.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h3Ref.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
           markers: false,
          once: false, 
        },
      });
    }

    // Animate service cards
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  const serviceCategories = [
    {
      category: "BRANDING",
      description: "Empower your brand identity with our strategic and creative branding solutions.",
      services: [
        "Brand Consulting",
        "Industrial / Product Design",
        "Graphic Design",
        "Marketing Materials",
        "Business Development",
      ],
    },
    {
      category: "TECHNOLOGY",
      description: "Cutting-edge technology solutions to elevate your business to new heights.",
      services: [
        "AI & Machine Learning",
        "Web Development",
        "E-commerce",
        "Mobile App Development",
        "Quality Assurance & Testing",
        "Cloud Services",
        "Cyber Security",
      ],
    },
    {
      category: "SOCIAL MEDIA",
      description: "Grow your online presence and reach the right audience effectively.",
      services: [
        "Search Engine Optimisation",
        "Search Engine Marketing",
        "Social Media Management",
        "Performance Marketing",
        "Content Marketing",
        "Marketing Automation",
        "Analytics",
      ],
    },
    {
      category: "DESIGNS",
      description: "Beautiful and functional designs to create memorable user experiences.",
      services: [
        "UI/UX Design",
        "Website Design",
        "Mobile Experience",
        "Commerce Experience",
        "Human Machine Interface",
        "Logo Design",
      ],
    },
    {
      category: "AD FILM MAKING",
      description: "Bring stories to life with our cinematic expertise and production services.",
      services: ["Cinematography", "AD Film Shoot", "Portfolio"],
    },
    {
      category: "PHOTOGRAPHY",
      description: "Capture moments and business visuals that resonate with your audience.",
      services: ["Personal Photography", "Business Photography"],
    },
    {
      category: "ANIMATION & VFX",
      description: "Stunning animation and VFX services to make your vision come alive.",
      services: [
        "VFX",
        "CGI",
        "Motion Graphics",
        "Visual effects animation",
        "VFX story boarding",
        "Virtual production",
        "2D animation",
        "3D animation",
      ],
    },
  ];

  return (
    <>
      <Header
        eyebrow="EXPERIENCE"
        headline={["OUR WILD DIGITAL AGENCY."]}
        description="Experience the wild array of services that make your company stand out."
      />

      <div className="text-center flex justify-center items-center h-[50vh] mt-8 max-w-3xl mx-auto px-4">
        <h3 ref={h3Ref} className="text-4xl font-semibold leading-snug">
          HUSH LUSH has a roaring 20+ years history of empowering companies in
          the corporate jungle.
        </h3>
      </div>

 

      {/* Dynamically render all service categories */}
      {serviceCategories.map((cat, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="my-10"
        >
          <ServiceCard
            category={cat.category}
            description={cat.description}
            services={cat.services}
          />
        </div>
      ))}

     <ScrollVelocity
        texts={["WILD IDEAS! -", "LETS DIVE IN - "]}
        velocity={100}
        className="custom-scroll-text "
      />

<div className="my-10">
       <CallToActionAndContact />
       </div>
    </>
  );
}
