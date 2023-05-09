import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  linkedin,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-primary p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <Link to={linkedin} target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="mx-3 hover:text-green"
            size="2x"
          />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`bg-white rounded-b-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.paddingX} ${styles.paddingY} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className="text-white-100">Get to know</p>
          <h2 className={styles.sectionHeadText + " text-white-100"}>
            Our Students
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
