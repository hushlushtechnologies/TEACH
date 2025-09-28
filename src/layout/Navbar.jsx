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

// Define the navigation data structure
const navItems = [
  { title: "Home", href: "/" },

  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    submenu: [
      {
        title: "BRANDING",
        links: [
          { name: "Brand Consulting", href: "#" },
          { name: "Industrial / Product Design", href: "#" },
          { name: "Graphic Design", href: "#" },
          { name: "Marketing Materials", href: "#" },
          { name: "Business Development", href: "#" },
        ],
      },
      {
        title: "TECHNOLOGY",
        links: [
          { name: "AI & Machine Learning", href: "#" },
          { name: "Web Development", href: "#" },
          { name: "E-commerce", href: "#" },
          { name: "Mobile App Development", href: "#" },
          { name: "Quality Assurance & Testing", href: "#" },
          { name: "Cloud Services", href: "#" },
          { name: "Cyber Security", href: "#" },
        ],
      },
      {
        title: "SOCIAL MEDIA  ",
        links: [
          { name: "Search Engine Optimisation", href: "#" },
          { name: "Search Engine Marketing", href: "#" },
          { name: "Social Media Management", href: "#" },
          { name: "Performance Marketing", href: "#" },
          { name: "Content Marketing", href: "#" },
          { name: "Marketing Automation", href: "#" },
          { name: "Analytics", href: "#" },
        ],
      },
      {
        title: "DESIGNS  ",
        links: [
          { name: "UI/UX Design", href: "#" },
          { name: "Website Design", href: "#" },
          { name: "Mobile Experience", href: "#" },
          { name: "Commerce Experience", href: "#" },
          { name: "Human Machine Interface", href: "#" },
          { name: "Logo Design", href: "#" },
        ],
      },
      {
        title: "AD FILM MAKING",
        links: [
          { name: "Cinematography", href: "#" },
          { name: "AD Film Shoot", href: "#" },
          { name: "Portfolio", href: "#" },
        ],
      },
      {
        title: "PHOTOGRAPHY",
        links: [
          { name: "Personal Photography", href: "#" },
          { name: "Business Photography", href: "#" },
        ],
      },
      {
        title: "ANIMATION & VFX",
        isWide: true,
        links: [
          { name: "VFX", href: "#" },
          { name: "CGI", href: "#" },
          { name: "Motion Graphics", href: "#" },
          { name: "Visual effects animation", href: "#" },
          { name: "VFX story boarding", href: "#" },
          { name: "Virtual production", href: "#" },
          { name: "2D animation", href: "#" },
          { name: "3D animation", href: "#" },
        ],
      },
    ],
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
            src="/src/assets/tech.png"
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
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
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
          className="absolute inset-x-0 top-full  bg-black bg-opacity-90 backdrop-blur-sm shadow-xl text-white py-8 transition-opacity duration-300 ease-in-out"
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
                    className={`space-y-2 text-sm text-gray-300 ${
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
