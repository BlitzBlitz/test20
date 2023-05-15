import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, joinReasons, courses } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import GreenBar from "../components/GreenBar";
import { CourseCard } from "./CourseCard";

const ServiceCard = ({ index, title, icon, classes }) => (
  <Tilt className="xs:w-[250px] w-1/2">
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
    <div id="about" className={` ${styles.paddingY} bg-[#f4f4f4] text-primary`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.paddingX} ` + styles.sectionSubText}>
          Choosing a class over a tutorial
        </p>
        <h2 className={`${styles.paddingX} ` + styles.sectionHeadText}>Why?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>
      <GreenBar steps={joinReasons} />

      <div className="mt-20 px-3 flex flex-wrap gap-10 items-center justify-center">
        {courses.map((course, index) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(CoursesAbout, "about");
