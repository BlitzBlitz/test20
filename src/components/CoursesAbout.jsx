import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, classes }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${classes} rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const CoursesAbout = () => {
  return (
    <div
      id="about"
      className={`${styles.paddingX} ${styles.paddingY} bg-[#f4f4f4] text-primary`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Choosing a class over a tutorial
        </p>
        <h2 className={styles.sectionHeadText}>Why?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            classes={index % 2 === 1 ? "bg-green" : "bg-primary"}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(CoursesAbout, "about");
