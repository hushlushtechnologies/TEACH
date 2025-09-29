import React, { useState } from "react";

// Replaced react-icons with inline SVG to resolve the build error
const SocialIcon = ({ d, title }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 fill-current"
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
  >
    <path d={d} />
  </svg>
);

const footerData = {
  company: ["About", "Services", "Industries", "Works", "Careers", "Contact"],
  services: [
    "Branding",
    "Experience Design",
    "Technology",
    "Digital Marketing",
  ],
  other: [
    "Partnership",
    "Awards and Recognitions",
    "Insights",
    "Blogs",
    "Resource Augmentation",
    "Testimonials",
    "Our Clients",
    "Submit Feedback to Our CEO",
    "Download Brochure",
    "Sitemap",
  ],
  connect: [
    { type: "General Enquiry", phone: "+971-542321275" },
    { type: "Sales Enquiry", phone: "+971-542321276" },
    { type: "Email (Marketing)", email: "marketing@hushlushtechnologies.com" },
    { type: "Email (BDM)", email: "bdm@hushlushtechnologies.com" },
  ],
};

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li
          key={index}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <footer className="bg-black text-gray-100 py-12 px-6 sm:px-12 md:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Section */}
          <FooterSection title="Company" links={footerData.company} />

          {/* Services Section */}
          <FooterSection title="Services" links={footerData.services} />

          {/* Other Section */}
          <FooterSection title="Other" links={footerData.other} />

          {/* Connect Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-4">
              {footerData.connect.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center"
                >
                  <span className="text-gray-400 mr-2">{item.type}:</span>
                  {item.phone && (
                    <a
                      href={`tel:${item.phone.replace(/ /g, "")}`}
                      className="text-white hover:underline transition-colors duration-200"
                    >
                      {item.phone}
                    </a>
                  )}
                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="text-white hover:underline transition-colors duration-200"
                    >
                      {item.email}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-gray-400">
              HushLush Technologies © 2025 All rights reserved
            </p>
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-white">
            {/* YouTube */}
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="YouTube"
            >
              <SocialIcon
                d="M19.615 3.184c-1.602-.12-6.418-.184-7.615-.184s-6.013.064-7.615.184c-1.641.123-2.962 1.444-3.085 3.085C1.184 7.871 1.125 9.743 1.125 12s.059 4.129.175 5.731c.123 1.641 1.444 2.962 3.085 3.085 1.602.12 6.418.184 7.615.184s6.013-.064 7.615-.184c1.641-.123 2.962-1.444 3.085-3.085.116-1.602.175-3.474.175-5.731s-.059-4.129-.175-5.731c-.123-1.641-1.444-2.962-3.085-3.085zM9.75 15.568V8.432L15.568 12 9.75 15.568z"
                title="YouTube"
              />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="Facebook"
            >
              <SocialIcon
                d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.505 0-1.797.715-1.797 1.764v2.314h3.587l-.467 3.296h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"
                title="Facebook"
              />
            </a>

 

            {/* Instagram */}
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="Instagram"
            >
              <SocialIcon
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.148 3.225-1.669 4.744-4.919 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.225-.148-4.744-1.669-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.148-3.225 1.669-4.744 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.249 0-3.635.013-4.885.071-1.84.084-2.825.992-2.909 2.829-.058 1.25-.071 1.636-.071 4.885s.013 3.635.071 4.885c.084 1.838.992 2.824 2.909 2.909 1.25.058 1.636.071 4.885.071s3.635-.013 4.885-.071c1.838-.084 2.824-.992 2.909-2.909.058-1.25.071-1.636.071-4.885s-.013-3.635-.071-4.885c-.084-1.838-.992-2.824-2.909-2.909-1.25-.058-1.636-.071-4.885-.071zm0 4.197c-2.316 0-4.201 1.885-4.201 4.201s1.885 4.201 4.201 4.201 4.201-1.885 4.201-4.201-1.885-4.201-4.201-4.201zm0 6.801c-1.411 0-2.55-1.139-2.55-2.55s1.139-2.55 2.55-2.55 2.55 1.139 2.55 2.55-1.139 2.55-2.55 2.55zm6.5-7.974c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"
                title="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
