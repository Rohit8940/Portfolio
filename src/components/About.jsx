import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// ServiceCard Component
const ServiceCard = ({ index, title, icon }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Handle undefined window for SSR

  return (
    <div className="xs:w-[250px] w-full relative">
      {isMobile ? (
        // Non-Tilt Version for Mobile
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      ) : (
        // Tilt Version for Desktop
        <Tilt
          className="xs:w-[250px] w-full"
          options={{
            max: 25, // Lower max for smoother tilting
            scale: 1.05, // Slight zoom effect
            speed: 400, // Reduced speed for smoother tilt
          }}
        >
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      )}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative z-[50]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled MERN stack developer with experience in JavaScript and
        frameworks like React, Node.js, and MongoDB. I have a strong foundation
        in object-oriented programming and data structures. I am a quick learner
        with decent collaboration skills and strong problem-solving abilities.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
