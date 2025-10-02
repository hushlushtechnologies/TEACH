import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaCloud,
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaStore,
  FaCogs, // Added for Process Section
} from "react-icons/fa";
import Header from "../../components/common/Header"; // Imported Header
import CallToActionAndContact from "../../components/home/CallToAction";
import SocialMediaLinks from "../../components/home/SocialMedia";
import { servicesContent } from "../../lib/data";

const processSteps = [
  { step: "Research", icon: FaBrain },
  { step: "Design", icon: FaLaptopCode },
  { step: "Development", icon: FaCogs },
  { step: "Launch", icon: FaCheckCircle },
];

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesContent[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Service not found
      </div>
    );
  }

  return (
    <>
      <Header eyebrow={service.title} description={service.description} />

      <main>
        {/* Service Overview */}
        <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={service.image}
            alt={service.title}
            className="rounded-3xl shadow-2xl h-96 w-full   object-contain"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6  ">
              {service.title} Expertise
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-4">
              {service.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-gray-400 text-lg"
                >
                  <FaCheckCircle className="text-2xl text-purple-600 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Long Description */}
        {service.longDescription && (
          <section className="py-20 px-6 md:px-40 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              {service.longDescription}
            </motion.p>
          </section>
        )}

        {/* Extra Sections (alternating layout) */}
        {/* {service.sections && (
          <section className="py-20 space-y-24">
            {service.sections.map((sec, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center px-6 md:px-20 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.img
                  src={sec.image}
                  alt={sec.title}
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    {sec.icon && (
                      <span className="text-purple-600 text-3xl">
                        <i className={`fa ${sec.icon}`}></i>
                      </span>
                    )}
                    {sec.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {sec.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </section>
        )} */}

        {/* Extra Sections (modern card style, images removed) */}
        {service.sections && (
          <section className="py-20 px-6 md:px-20">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {service.sections.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className={`p-8 rounded-2xl shadow-xl border transform hover:scale-105 transition-all duration-500 bg-gradient-to-r  text-white`}
                >
                    {/* <div className=" flex justify-center items-center gap-4 mb-4">
                      {sec.icon && (
                        <div className="flex-shrink-0 w-16 h-16  rounded-full flex items-center justify-center text-2xl text-white">
                          <i
                            className={
                              sec.icon && (
                                <sec.icon className="text-3xl " />
                              )
                            }
                          ></i>
                        </div>
                      )}
                    </div> */}
                  <h3 className="text-2xl md:text-3xl text-center font-bold">
                    {sec.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-center mt-5">
                    {sec.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Features Section */}
        {/* <section className="py-24 text-center">
          <h2 className="text-4xl font-bold mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
            {[
              { icon: <FaLaptopCode />, title: "Cutting-edge Tech" },
              { icon: <FaMobileAlt />, title: "Mobile First" },
              { icon: <FaBrain />, title: "AI Driven" },
              { icon: <FaStore />, title: "E-commerce Ready" },
              { icon: <FaCloud />, title: "Cloud Native" },
              { icon: <FaCheckCircle />, title: "Proven Results" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-b-4 border-yellow-500"
              >
                <div className="text-5xl text-yellow-600 mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Process Section */}
        {/* <section className="py-20 px-6 md:px-20 bg-gradient-to-r   t">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Seamless Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 bg-white/15 backdrop-blur-sm rounded-xl shadow-2xl border-t-4 border-white/30"
              >
                <div className="text-5xl mb-4 text-white mx-auto flex justify-center">
                  <item.icon />
                </div>
                <div className="text-3xl font-extrabold mb-3">{i + 1}</div>
                <p className="font-semibold text-lg tracking-wider">
                  {item.step}
                </p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Testimonials */}
        {/* {service.testimonials && (
          <section className="py-20   text-center">
            <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
              {service.testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-8 bg-white rounded-xl shadow-lg text-left"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{t.name}</h4>
                      <p className="text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">“{t.quote}”</p>
                </motion.div>
              ))}
            </div>
          </section>

          
        )} */}

        <section className="social-links-section py-16  ">
          <SocialMediaLinks /> {/* The SocialMediaLinks component */}
        </section>

        <section className="contact-section">
          <CallToActionAndContact />{" "}
          {/* The CallToActionAndContact component */}
        </section>

        {/* 8. Social Media Links (using SocialMediaLinks component) */}
      </main>
    </>
  );
}
