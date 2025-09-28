 import React, { useRef } from "react";
import { gsap } from "gsap";

const SocialLinkItem = ({ name, iconSrc, link, iconBgColor }) => {
  const linkRef = useRef(null);
  const iconRef = useRef(null);

 const handleMouseEnter = () => {
  gsap.killTweensOf([linkRef.current, iconRef.current]);

  gsap.to(linkRef.current, {
    scaleX: 1.3,
    duration: 1.8,
    ease: "elastic.out(1, 0.4)",
    transformOrigin: "center",
  });

  gsap.to(iconRef.current, {
    rotate: 360,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
  });
};

const handleMouseLeave = () => {
  gsap.killTweensOf([linkRef.current, iconRef.current]);

  gsap.to(linkRef.current, {
    scaleX: 1,
    duration: 1.4,
    ease: "power3.out",
    transformOrigin: "center",
  });

  gsap.to(iconRef.current, {
    rotate: 360,
    duration: 1,
    ease: "power3.out",

  });
};


  return (
    <a
      ref={linkRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group   flex items-center justify-between py-5 px-4 w-full border-b border-white border-opacity-10 transform"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-white text-3xl md:text-4xl font-light">{name}</span>
      <div className="flex items-center space-x-6">
        {/* Horizontal arrow */}
        <div className="w-5 h-0.5 bg-white bg-opacity-30 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white border-opacity-30 rotate-45 transform"></div>
        </div>

        {/* Social media icon */}
        <div
          ref={iconRef}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center p-1 ${iconBgColor}`}
        >
          <img
            src={iconSrc}
            alt={`${name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </a>
  );
};

export default function SocialMediaLinks() {
  const socialLinks = [
    {
      name: "Dribbble",
      link: "https://dribbble.com/",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Dribbble_icon_%282023%29.svg/2048px-Dribbble_icon_%282023%29.svg.png",
      iconBgColor: "bg-pink-600",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png",
      iconBgColor: "bg-blue-600",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      iconBgColor: "bg-gradient-to-br from-purple-500 via-red-500 to-yellow-500",
    },
    {
      name: "Behance",
      link: "https://www.behance.net/",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Behance_logo.svg/1024px-Behance_logo.svg.png",
      iconBgColor: "bg-blue-700",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto py-8 space-y-4">
        {socialLinks.map((item) => (
          <SocialLinkItem
            key={item.name}
            name={item.name}
            iconSrc={item.iconSrc}
            link={item.link}
            iconBgColor={item.iconBgColor}
          />
        ))}
      </div>
    </div>
  );
}
