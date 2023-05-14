import { styles } from "../styles";
import { services } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

const CoursesContainer = () => {
  const ServiceCard = ({ index, title, icon, classes }) => (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient rounded-[20px] shadow-card"
      >
        <Link
          to={"/course/1"}
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
        </Link>
      </motion.div>
    </Tilt>
  );
  return (
    <div className={` -scroll-mt-6 ${styles.paddingX} ${styles.paddingY}`}>
      <h2 className={styles.sectionHeadText + " text-center text-white-100"}>
        Featured Paths
      </h2>
      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            classes={
              index % 2 === 1
                ? "bg-green broder-2 border-secondary"
                : "bg-primary border-2 border-green"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesContainer;
