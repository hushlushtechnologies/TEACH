import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import FuzzyText from "../FuzzyText/FuzzyText";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      <h1 className="text-8xl font-extrabold tracking-widest">
        <FuzzyText baseIntensity={0.2}>404</FuzzyText>
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-light text-gray-300">
        Oops! Page not found.
      </p>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        <FaHome className="text-xl" />
        Back to Home
      </Link>
    </div>
  );
}
