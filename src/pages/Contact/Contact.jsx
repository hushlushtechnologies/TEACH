import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../components/common/Header";
import SocialMediaLinks from "../../components/home/SocialMedia";
import CallToActionAndContact from "../../components/home/CallToAction";
// Assuming CallToActionAndContact and SocialMediaLinks are available from previous requests

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Reusable Input Component for cleaner form structure
const ContactInput = ({ label, name, type = "text", required = true }) => (
  <div className="flex flex-col form-input-item">
    <label
      htmlFor={name}
      className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-medium"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        rows="4"
        required={required}
        className="bg-transparent border-b border-white border-opacity-30 text-white text-lg focus:border-blue-400 focus:outline-none py-2 transition-colors duration-300 placeholder-gray-600"
        placeholder={`Enter your ${label.toLowerCase()} here...`}
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="bg-transparent border-b border-white border-opacity-30 text-white text-lg focus:border-blue-400 focus:outline-none py-2 transition-colors duration-300 placeholder-gray-600"
        placeholder={`Enter your ${label.toLowerCase()} here...`}
      />
    )}
  </div>
);

export default function Contact() {
  const contactFormRef = useRef(null);

  useEffect(() => {
    // --- GSAP Animations for Contact Page ---

    // 1. Staggered fade-in for form fields
    gsap.fromTo(
      ".form-input-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 2. Button entrance
    gsap.fromTo(
      ".form-submit-button",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".form-submit-button",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 3. Location details fade-in
    gsap.fromTo(
      ".location-info-block",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".location-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Clean up ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="  text-white min-h-screen">
      {/* 1. Header Section */}
      <Header
        eyebrow="LET'S ROAR"
        headline={["into the wild."]}
        description="In the wilderness of change, our world's view will roar into a new tomorrow and beyond."
      />

      {/* 2. Main Contact Form Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Custom Message / Instructions */}
        <div className="lg:sticky lg:top-20 h-full">
          <p className="  text-lg mb-4 uppercase tracking-widest contact-intro-text">
            Start a Conversation
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 contact-intro-text">
            Tell us about your next big idea.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed contact-intro-text">
            Whether you have a massive project, a quick question, or just want
            to say hello, our team is ready to listen. Fill out the form, and
            we'll get back to you within 24 hours.
          </p>

          {/* Reusing the CallToAction component's contact details section for quick access */}
          <div className="mt-12 space-y-4">
            <div className=" ">
              <p className="text-white text-sm mb-1">Email</p>
              <a
                href="mailto:marketing@hushlushtechnologies.com"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                marketing@hushlushtechnologies.com
              </a>{" "}
              <br />
              <a
                href="mailto:bdm@hushlushtechnologies.com"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                bdm@hushlushtechnologies.com
              </a>
            </div>
            <div className="">
              <p className="text-gray-400 text-sm mb-1">Call</p>
              <a
                href="tel:+971542321275"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                +971-542321275
              </a>
              <br />
              <a
                href="tel:971542321276"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                +971-542321276
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-0" ref={contactFormRef}>
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ContactInput label="First Name" name="firstName" />
              <ContactInput label="Last Name" name="lastName" />
            </div>

            <ContactInput label="Email Address" name="email" type="email" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ContactInput
                label="Company Name"
                name="company"
                required={false}
              />
              <ContactInput label="Budget" name="budget" required={false} />
            </div>

            <ContactInput
              label="How can we help?"
              name="message"
              type="textarea"
            />

            {/* Submit Button - Designed for high impact */}
            <div className="pt-8">
              <button
                type="submit"
                className="form-submit-button w-full md:w-auto bg-white text-black px-12 py-5 rounded-full text-lg font-semibold uppercase tracking-widest shadow-lg hover:bg-gray-200 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                {/* Subtle Hover Effect Background */}
                <span className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                <span className="absolute inset-0 bg-white text-black flex items-center justify-center transform group-hover:text-black transition-colors duration-500">
                  Send Message
                </span>
              </button>
            </div>

            {/* Hidden Message for design */}
            <p className="text-gray-700 text-xs pt-4">
              We respect your privacy and will never share your details.
            </p>
          </form>
        </div>
      </section>

      {/* 3. Location/Map Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16  ">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-300 text-lg mb-12 uppercase tracking-widest location-info-block">
            Our Location
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 location-grid">
            {/* Location Details */}
            <div className="lg:col-span-1 space-y-12">
              <div className="location-info-block">
                <h3 className="text-2xl font-semibold mb-2">Headquarters</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Crystal Plaza, <br />
                  Majaz 01, Sharjah, <br />
                  UAE
                </p>
              </div>

               <div className="mt-12 space-y-4">
            <div className=" ">
              <p className="text-white text-sm mb-1">Email</p>
              <a
                href="mailto:marketing@hushlushtechnologies.com"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                marketing@hushlushtechnologies.com
              </a>{" "}
              <br />
              <a
                href="mailto:bdm@hushlushtechnologies.com"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                bdm@hushlushtechnologies.com
              </a>
            </div>
            <div className="">
              <p className="text-gray-400 text-sm mb-1">Call</p>
              <a
                href="tel:+971542321275"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                +971-542321275
              </a>
              <br />
              <a
                href="tel:971542321276"
                className="text-white text-xl font-medium hover:text-blue-200 transition-colors"
              >
                +971-542321276
              </a>
            </div>
          </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2 h-96 bg-gray-800 rounded-lg overflow-hidden shadow-xl location-info-block">
              <div className="flex items-center justify-center w-full h-full text-gray-500 text-2xl font-light">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.3626612205991!2d55.386031330448624!3d25.344404896619114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b4ad1f84c95%3A0x905e1932b1c879a2!2sAfaq%20Alkhaleej%20Management%20Consultants!5e0!3m2!1sen!2sin!4v1759121768845!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Social Media Links Section */}
      <section className="social-links-section">
        <SocialMediaLinks />
      </section>

      <CallToActionAndContact />
    </div>
  );
}
