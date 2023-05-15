import { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, registerSteps } from "../constants";
import { SectionWrapper } from "../hoc";
import GreenBar from "./GreenBar";
import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000C24",
        color: "#00ce8d",
        borderTop: "10px solid #00ce8d",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center  items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <div className="flex justify-between items-start">
          <Link
            to={`/courses#${experience.title}`}
            className="text-white text-[24px] font-bold hover:text-green"
          >
            {experience.title}
          </Link>
          <h1 className="text-primary font-medium bg-green p-2 rounded">
            {"$" + experience.price}
          </h1>
        </div>

        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => {
          if (isMobile && index > 1) {
            return;
          }
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div id="start" className={`bg-white-100 ${styles.paddingY} `}>
      <div className={`${styles.paddingX}`}>
        <p className={`${styles.sectionSubText} text-center`}>
          If you want to code your future
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Your journey starts here...
        </h2>
      </div>
      <GreenBar steps={registerSteps}></GreenBar>
      <div className=" flex flex-col">
        <VerticalTimeline lineColor="#00ce8d" iconBg="red">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
