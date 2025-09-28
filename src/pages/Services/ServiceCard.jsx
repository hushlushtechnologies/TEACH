import React from 'react';
import SpotlightCard from '../../components/SpotlightCard/SpotlightCard';
 
// Reusable component for the list items in the two columns
const ServiceListItem = ({ children }) => (
  <li className="text-white text-lg font-normal py-1 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
    {children}
  </li>
);

export default function ServiceCard({ category, description, services }) {
  // Split the services array into two columns (approximately)
  const half = Math.ceil(services.length / 2);
  const column1 = services.slice(0, half);
  const column2 = services.slice(half);

  return (
    <div className=" py-10 px-4 md:px-8 lg:px-16 flex items-center justify-center ">
 
   

      <div className="w-full max-w-7xl mx-auto p-8 md:p-12 lg:p-16 border border-white border-opacity-10 rounded-2xl shadow-2xl">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.25)"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Category Title */}
          <div className="flex flex-col justify-start">
            <h2 className="text-white text-6xl   font-bold tracking-tight leading-none">
              {category}
            </h2>
          </div>

          {/* Right Column: Description and Service Lists */}
          <div className="flex flex-col space-y-12">
            {/* Description Paragraph */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {description}
            </p>

            {/* Service Lists (Two Columns) */}
            <div className="grid grid-cols-2 gap-4">
              {/* List Column 1 */}
              <ul className="space-y-1">
                {column1.map((item, index) => (
                  <ServiceListItem key={`col1-${index}`}>{item}</ServiceListItem>
                ))}
              </ul>

              {/* List Column 2 */}
              <ul className="space-y-1">
                {column2.map((item, index) => (
                  <ServiceListItem key={`col2-${index}`}>{item}</ServiceListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
           </SpotlightCard>
      </div>

    </div>
  );
}