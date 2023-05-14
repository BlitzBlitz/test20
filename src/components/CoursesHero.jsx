import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const CoursesHero = () => {
  return (
    <section className={`relative w-full h-5/6 mx-auto `}>
      <div
        className={`pt-[150px] pb-6 max-w-7xl mx-auto ${styles.paddingX}  flex flex-col justify-start items-center gap-5`}
      >
        <h1 className={`${styles.heroHeadText} text-center text-white`}>
          Choose your{" "}
          <span className="px-3  text-primary bg-[#00ce8d]">Path</span>
        </h1>
        <p
          className={` text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[14px] text-[16px] lg:leading-[30px] w-2/3 text-center mt-2 text-white-100`}
          style={{ "text-shadow": "3px 3px 5px #000c24" }}
        >
          <span className="text-green text-shadow ">
            Ready to work from anywhere at anytime?
          </span>{" "}
          Join our academy today and unlock the power of coding. You'll have
          access to ongoing support to help you reach your goals.
        </p>
      </div>

      <div className=" pt-6 w-full flex justify-center items-center">
        <Link to="#courses">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
export default CoursesHero;
