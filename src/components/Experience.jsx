import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import Register from "./Register";

const ExperienceCard = ({ experience }) => {
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
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <h1 className="text-primary font-medium bg-green p-2 rounded">
            {experience.title.includes("Basics") ? "999$" : "1199$"}
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
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
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
      <Register></Register>
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
