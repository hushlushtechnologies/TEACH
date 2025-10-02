import React from 'react';
import { Link } from 'react-router-dom';
 

export default function CallToActionAndContact() {
  return (
    <div className="    flex flex-col items-center justify-between py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Main content: "TIME TO ROAR!" and "Let's talk!" button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full   mx-auto mb-24">
        <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl font-medium leading-none tracking-tight mb-8 md:mb-0">
          TIME TO <br /> ROAR!
        </h1>
        <Link to={'/contact'} className="bg-blue-200 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-300 transition-colors duration-300">
          Let's talk!
        </Link>
      </div>

      {/* Separator Line */}
      <div className="w-full max-w-7xl mx-auto mb-12 relative">
        <hr className="border-t border-white opacity-20 w-full" />
        {/* Right arrow for the line */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-white opacity-20 rotate-45"></div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mb-16">
        {/* Email */}
        <div className="flex flex-col items-start">
          <p className="text-gray-400 text-sm mb-1">Email</p>
          <a href="mailto:marketing@hushlushtechnologies.com" className="text-white text-xl font-medium hover:text-blue-200 transition-colors duration-300">
            marketing@hushlushtechnologies.com
          </a>
        </div>

        {/* Call */}
        <div className="flex flex-col items-start">
          <p className="text-gray-400 text-sm mb-1">Call</p>
          <a href="tel:+971542321275" className="text-white text-xl font-medium hover:text-blue-200 transition-colors duration-300">
          +971-542321275
          </a>
        </div>

        {/* Teams */}
        <div className="flex flex-col items-start md:items-end"> {/* Align "Teams" to the right on medium screens and up */}
          <p className="text-gray-400 text-sm mb-1">Teams</p>
          <button className="text-white text-xl font-medium hover:text-blue-200 transition-colors duration-300">
            Talk to HushLush
          </button>
        </div>
      </div>

      {/* Separator Line (bottom) */}
      <div className="w-full max-w-7xl mx-auto relative">
        <hr className="border-t border-white opacity-20 w-full" />
        {/* Right arrow for the line */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-white opacity-20 rotate-45"></div>
      </div>

   
    
    </div>
  );
}