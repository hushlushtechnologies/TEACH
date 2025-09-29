import React from "react";
import ElectricBorder from "../common/ElectricBorder";

// A reusable component for a single stat card
const SingleStatCard = ({ stat, label, isDark = true }) => {
  const bgColor = isDark ? "bg-blac" : "bg-gray-90";
  const textColor = "text-white";

  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
      className={`${bgColor} w-full  shadow-2xl rounded-lg p-8 h-48  items-start`}
    >
      <p className={`text-7xl font-light mb-4 ${textColor} tracking-tight`}>
        {/* The 'Ø' symbol is visually close to the image's '0' */}
        {stat.replace("0", "Ø")}
      </p>
       
      <h2
        className={`text-xl     font-medium uppercase ${textColor} text-end self-end leading-none`}
      >
        {label.split(" ").map((word, index) => (
          // Use a line break for the label to match the two-line layout in the image
          <React.Fragment key={index}>
            {word}
            {index < label.split(" ").length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
     
    </ElectricBorder>
  );
};

 export default function StatCard() {
  return (
    <div className="min-h-screen py-5">
      <div className="max-w-[95%] py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* 1. Real Stat */}
        <SingleStatCard stat="250+" label="Successful Projects" isDark={true} />

        {/* 2. Real Stat */}
        <SingleStatCard stat="120+" label="Global Clients" isDark={true} />

        {/* 3. Real Stat */}
        <SingleStatCard stat="15+" label="Industries Served" isDark={true} />

        {/* 4. Real Stat */}
        <SingleStatCard stat="100%" label="Client Satisfaction" isDark={true} />
      </div>
    </div>
  );
}
