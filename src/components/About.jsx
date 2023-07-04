import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { upworkTestemonials } from "../constants";
import { UpworkCard } from "../components/UpworkCard";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon, classes }) => (
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className={`${classes} rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
//       >
//         <img
//           src={icon}
//           alt="web-development"
//           className="w-16 h-16 object-contain"
//         />

//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <div
      id="about"
      className={`${styles.paddingX} pt-6 bg-[#f4f4f4] text-primary `}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who are we?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
      >
        PakaShum` is an experienced team of programming trainers aiming to teach
        the next generation of coders. Our beginner-friendly online classes make
        it possible for students of all ages to start programming today.
      </motion.p>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Our success in <span className="text-green-up">Upwork</span>
        </h2>
      </motion.div>
      <div className={` flex flex-col  bg-[#f4f4f4] text-primary `}>
        {upworkTestemonials.map((testemonial, index) => (
          <UpworkCard testemonial={testemonial} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
