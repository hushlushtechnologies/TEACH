import React from 'react';
import { useState } from 'react';

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
  company: ['About', 'Services', 'Industries', 'Works', 'Careers', 'Contact'],
  services: ['Branding', 'Experience Design', 'Technology', 'Digital Marketing'],
  other: [
    'Partnership',
    'Awards and Recognitions',
    'Insights',
    'Blogs',
    'Resource Augmentation',
    'Testimonials',
    'Our Clients',
    'Submit Feedback to Our CEO',
    'Download Brochure',
    'Sitemap',
  ],
  connect: [
    { type: 'General Enquiry', phone: '+91 480 2733 111' },
    { type: 'Sales Enquiry', phone: '+91 480 2733 555' },
    { type: 'Email', email: 'info@webandcrafts.com' },
    { type: 'HR Enquiry', phone: '+91 480 2733 999' },
    { type: 'Whatsapp (Sales )', phone: '+91 8606 483 399' },
  ],
};

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index} className="text-gray-400 hover:text-white transition-colors duration-200">
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
                <li key={index} className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-gray-400 mr-2">{item.type}:</span>
                  {item.phone && (
                    <a href={`tel:${item.phone.replace(/ /g, '')}`} className="text-white hover:underline transition-colors duration-200">
                      {item.phone}
                    </a>
                  )}
                  {item.email && (
                    <a href={`mailto:${item.email}`} className="text-white hover:underline transition-colors duration-200">
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
            <p className="text-gray-400">WAC © 2025 All rights reserved</p>
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-white">
            <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <SocialIcon d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.768s.784-1.768 1.75-1.768 1.75.79 1.75 1.768-.784 1.768-1.75 1.768zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" title="LinkedIn" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <SocialIcon d="M19.615 3.184c-3.766-.31-18.067-.31-21.833 0-1.658.136-2.992.484-2.992 2.764v10.144c0 2.28 1.334 2.628 2.992 2.764 3.767.31 18.067.31 21.833 0 1.658-.136 2.992-.484 2.992-2.764v-10.144c0-2.28-1.334-2.628-2.992-2.764zm-7.615 13.066v-8.25l5.467 4.125-5.467 4.125z" title="YouTube" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <SocialIcon d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.148 3.225-1.669 4.744-4.919 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.225-.148-4.744-1.669-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.148-3.225 1.669-4.744 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.249 0-3.635.013-4.885.071-1.84.084-2.825.992-2.909 2.829-.058 1.25-.071 1.636-.071 4.885s.013 3.635.071 4.885c.084 1.838.992 2.824 2.909 2.909 1.25.058 1.636.071 4.885.071s3.635-.013 4.885-.071c1.838-.084 2.824-.992 2.909-2.909.058-1.25.071-1.636.071-4.885s-.013-3.635-.071-4.885c-.084-1.838-.992-2.824-2.909-2.909-1.25-.058-1.636-.071-4.885-.071zm0 4.197c-2.316 0-4.201 1.885-4.201 4.201s1.885 4.201 4.201 4.201 4.201-1.885 4.201-4.201-1.885-4.201-4.201-4.201zm0 6.801c-1.411 0-2.55-1.139-2.55-2.55s1.139-2.55 2.55-2.55 2.55 1.139 2.55 2.55-1.139 2.55-2.55 2.55zm6.5-7.974c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" title="Instagram" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <SocialIcon d="M14 0h-4c-2.761 0-5 2.239-5 5v3h-3v4h3v12h5v-12h3l1-4h-4v-2c0-1.104.896-2 2-2h2v-3z" title="Facebook" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <SocialIcon d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-3.606-18.78c.84-.572 1.859-.923 2.996-.923 3.631 0 5.467 1.852 5.467 5.419 0 3.33-1.442 5.176-4.996 5.253.255.43.385.952.385 1.636v2.395h-2.181v-2.395c0-.684-.13-1.206-.385-1.636-3.554-.077-4.996-1.923-4.996-5.253 0-3.567 1.836-5.419 5.467-5.419zm1.091 1.64c-2.227 0-3.33 1.104-3.33 3.264 0 2.16 1.103 3.264 3.33 3.264 2.227 0 3.33-1.104 3.33-3.264 0-2.16-1.103-3.264-3.33-3.264z" title="Behance" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <SocialIcon d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.898-.957-2.178-1.555-3.594-1.555-2.715 0-4.921 2.206-4.921 4.921 0 .386.045.76.129 1.118-4.09-.205-7.729-2.165-10.169-5.143-.424.729-.668 1.57-.668 2.474 0 1.706.868 3.212 2.189 4.098-.807-.026-1.569-.247-2.238-.618v.061c0 2.38 1.696 4.364 3.947 4.814-.413.111-.849.171-1.296.171-.317 0-.627-.031-.929-.088.627 1.956 2.443 3.38 4.61 3.42-1.688 1.321-3.811 2.109-6.115 2.109-.398 0-.79-.023-1.175-.069 2.189 1.394 4.773 2.213 7.54 2.213 9.041 0 14.008-7.498 14.008-14.015 0-.214-.006-.429-.014-.644.966-.699 1.802-1.572 2.46-2.572z" title="X (Twitter)" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
