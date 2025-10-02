 import React, { useRef } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";

const SocialLinkItem = ({ name, link, Icon, iconBgColor }) => {
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
      className="group flex items-center justify-between py-5 px-4 w-full border-b border-white border-opacity-10 transform"
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
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-xl ${iconBgColor}`}
        >
          <Icon />
        </div>
      </div>
    </a>
  );
};

export default function SocialMediaLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/hushlush_technologies?igsh=MTF2aTFiMzVsMWJ4dQ==",
      Icon: FaInstagram,
      iconBgColor: "bg-gradient-to-br from-purple-500 via-red-500 to-yellow-500",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/",
      Icon: FaTiktok,
      iconBgColor: "bg-black",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/",
      Icon: FaFacebookF,
      iconBgColor: "bg-blue-600",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/",
      Icon: FaYoutube,
      iconBgColor: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto py-8 space-y-4">
        {socialLinks.map((item) => (
          <SocialLinkItem
            key={item.name}
            name={item.name}
            link={item.link}
            Icon={item.Icon}
            iconBgColor={item.iconBgColor}
          />
        ))}
      </div>
    </div>
  );
}
