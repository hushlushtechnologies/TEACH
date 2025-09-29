import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

// Define the navigation data structure
const navItems = [
  { title: "Home", href: "/" },

  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    submenu :  [
  {
    title: "BRANDING",
    links: [
      { name: "Brand Consulting", href: "brand-consulting" },
      { name: "Industrial / Product Design", href: "industrial-product-design" },
      { name: "Graphic Design", href: "graphic-design" },
      { name: "Marketing Materials", href: "marketing-materials" },
      { name: "Business Development", href: "business-development" },
    ],
  },
  {
    title: "TECHNOLOGY",
    links: [
      { name: "AI & Machine Learning", href: "ai-machine-learning" },
      { name: "Web Development", href: "web-development" },
      { name: "E-commerce", href: "e-commerce" },
      { name: "Mobile App Development", href: "mobile-app-development" },
      { name: "Quality Assurance & Testing", href: "quality-assurance-testing" },
      { name: "Cloud Services", href: "cloud-services" },
      { name: "Cyber Security", href: "cyber-security" },
    ],
  },
  {
    title: "SOCIAL MEDIA",
    links: [
      { name: "Search Engine Optimisation", href: "seo" },
      { name: "Search Engine Marketing", href: "sem" },
      { name: "Social Media Management", href: "social-media-management" },
      { name: "Performance Marketing", href: "performance-marketing" },
      { name: "Content Marketing", href: "content-marketing" },
      { name: "Marketing Automation", href: "marketing-automation" },
      { name: "Analytics", href: "analytics" },
    ],
  },
  {
    title: "DESIGNS",
    links: [
      { name: "UI/UX Design", href: "ui-ux-design" },
      { name: "Website Design", href: "website-design" },
      { name: "Mobile Experience", href: "mobile-experience" },
      { name: "Commerce Experience", href: "commerce-experience" },
      { name: "Human Machine Interface", href: "human-machine-interface" },
      { name: "Logo Design", href: "logo-design" },
    ],
  },
  {
    title: "AD FILM MAKING",
    links: [
      { name: "Cinematography", href: "cinematography" },
      { name: "AD Film Shoot", href: "ad-film-shoot" },
      { name: "Portfolio", href: "portfolio" },
    ],
  },
  {
    title: "PHOTOGRAPHY",
    links: [
      { name: "Personal Photography", href: "personal-photography" },
      { name: "Business Photography", href: "business-photography" },
    ],
  },
  {
    title: "ANIMATION & VFX",
    isWide: true,
    links: [
      { name: "VFX", href: "vfx" },
      { name: "CGI", href: "cgi" },
      { name: "Motion Graphics", href: "motion-graphics" },
      { name: "Visual Effects Animation", href: "visual-effects-animation" },
      { name: "VFX Story Boarding", href: "vfx-story-boarding" },
      { name: "Virtual Production", href: "virtual-production" },
      { name: "2D Animation", href: "2d-animation" },
      { name: "3D Animation", href: "3d-animation" },
    ],
  },
]
  },
  { title: "Contact Us", href: "/contact" },
];

// The main App component containing the complete responsive navigation bar.
export default function Navbar() {
  // State for the main mobile menu visibility.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for the mega menu dropdown visibility.
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white font-inter transition-all duration-300 ${
        isScrolled ? "  " : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6  flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 h-30 w-44">
          <img
            src="/tech.png"
            alt="Logo"
            className=" object-contain  "
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold uppercase text-sm lg:text-base">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="relative hover:text-white cursor-pointer transition-colors duration-300"
              onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
              // onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
            >
              <a href={item.href} className="flex items-center space-x-1">
                <span>{item.title}</span>
                {item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
          
          </div>

          {/* Mobile menu toggle button (hamburger) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-yellow-400 hover:text-white focus:outline-none transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {isServicesOpen && (
        <div
          className="absolute inset-x-0 top-full bg-white   bg-opacity-90 backdrop-blur-sm shadow-xl text-white py-8 transition-opacity duration-300 ease-in-out"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          // onMouseLeave={() => {
           
          //   setTimeout(() => setIsServicesOpen(false), 150);
          // }}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {navItems
              .find((item) => item.title === "Services")
              .submenu.map((category) => (
                <div
                  key={category.title}
                  className={category.isWide ? "col-span-full" : ""}
                >
                  <h3 className="text-lg font-bold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
                    {category.title}
                  </h3>
                  <ul
                    className={`space-y-2 text-sm  text-gray-500 ${
                      category.isWide
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                        : ""
                    }`}
                  >
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 z-0 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 flex flex-col space-y-4 font-semibold text-lg text-white uppercase">
          {navItems.map((item) => (
            <React.Fragment key={item.title}>
              {item.submenu ? (
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full py-2 hover:text-yellow-400 transition-colors duration-300 focus:outline-none"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-2 transition-all duration-300 ease-in-out">
                      {item.submenu.map((category) => (
                        <div key={category.title}>
                          <h4 className="font-bold text-green-400 pt-2 pb-1">
                            {category.title}
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {category.links.map((link) => (
                              <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block py-2 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.title}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
