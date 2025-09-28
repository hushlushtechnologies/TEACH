 import React, { useState, useEffect } from 'react';

// Hero component with a custom carousel
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);

  const slides = [
    {
      title: 'Discover the Future of Technology',
      text: 'Explore cutting-edge innovations that are shaping tomorrow\'s world. Our solutions are designed to empower your business.',
      button: 'Learn More',
      bgColor: 'bg-indigo-900',
    },
    {
      title: 'Empower Your Digital Presence',
      text: 'We craft exceptional digital experiences that captivate audiences and drive results. From UI/UX to development, we\'ve got you covered.',
      button: 'Our Services',
      bgColor: 'bg-purple-900',
    },
    {
      title: 'Creative Solutions for Modern Brands',
      text: 'Unlock your brand\'s full potential with our bespoke creative and marketing strategies. Stand out in a crowded marketplace.',
      button: 'View Our Work',
      bgColor: 'bg-slate-900',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 5;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePaginationClick = (index) => {
    setCurrentSlide(index);
    setTimeLeft(5); // Reset timer on manual slide change
  };

  return (
    <>
      <style>
        {`
        .slide-transition {
          transition: opacity 1s ease-in-out;
        }
        
        .slide-fade-in {
          opacity: 1;
        }

        .slide-fade-out {
          opacity: 0;
        }
        
        .hero-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-size: cover;
          background-position: center;
        }
        
        .autoplay-progress {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
        
        .progress-circle {
          transition: stroke-dashoffset 1s linear;
        }
        `}
      </style>
      <div className="hero-container font-inter">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide text-white slide-transition ${slide.bgColor} ${index === currentSlide ? 'slide-fade-in z-10' : 'slide-fade-out z-0'}`}
          >
            <div className="max-w-4xl mx-auto text-center px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-light mb-8 opacity-90">
                {slide.text}
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-gray-200 shadow-lg">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
        
        {/* Custom Pagination */}
        <div className="absolute bottom-8 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Custom Autoplay Progress Timer */}
        <div className="autoplay-progress absolute bottom-8 right-8 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 bg-opacity-70 text-white font-semibold">
          <svg className="absolute w-full h-full" viewBox="0 0 48 48">
            <circle 
              className="progress-circle" 
              cx="24" cy="24" r="20" 
              stroke="#fff" 
              strokeWidth="4" 
              fill="transparent"
              strokeDasharray="125.66"
              strokeDashoffset={125.66 * (1 - timeLeft / 5)} 
              transform="rotate(-90 24 24)"
            />
          </svg>
          <span className="z-10">{timeLeft}s</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
