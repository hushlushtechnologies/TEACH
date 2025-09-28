 // components/home/RecentWorkItem.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RecentWorkItem = ({ title, description, tags, videoUrl, isVideoLeft = false }) => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { x: isVideoLeft ? -200 : 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 50%',
            end: '  80%',
            scrub: true, // smooth animation
          },
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 , rotate: 0,},
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 70%',
            
            end: 'top 50%',
            scrub: true, // smooth scroll animation
          },
        }
      );
    }
  }, [isVideoLeft]);

  const videoClasses = "w-full rounded-lg shadow-2xl overflow-hidden";
  const innerVideoClasses = "w-full h-full object-cover";

  return (
    <div className="flex   flex-col md:flex-row items-center justify-between w-full px-4 md:px-20 py-10 md:py-0">
      {isVideoLeft && (
        <div className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-16">
          <div ref={videoRef} className={`${videoClasses} aspect-[12/16] max-w-sm`}>
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className={innerVideoClasses}
            />
          </div>
        </div>
      )}

      {/* Text Content */}
      <div
        ref={textRef}
        className={`w-full md:w-1/2 flex flex-col justify-center ${
          isVideoLeft ? 'md:items-end' : 'md:items-start'
        } p-8 md:p-16 text-center md:text-left`}
      >
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-gray-400 mb-6">{description}</p>
        <p className="text-md md:text-lg text-gray-500 mb-8">{tags}</p>
        <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          View project
        </button>
      </div>

      {!isVideoLeft && (
        <div className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-16">
          <div ref={videoRef} className={`${videoClasses} aspect-[12/16] max-w-sm`}>
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className={innerVideoClasses}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentWorkItem;
