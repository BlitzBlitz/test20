import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const UpworkCard = ({ testemonial }) => (
  <Tilt className="w-9/12 my-3">
    <motion.div
      variants={fadeIn("right", "spring")}
      className="w-full rounded-[20px] border-green-up border-2"
    >
      <a
        href={"https://www.upwork.com/freelancers/~01a6434527ec86c9e4"}
        target="_blank"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={` rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly  flex-col`}
      >
        <h3 className="text-green-up text-[20px] font-bold ">
          {testemonial.title}
        </h3>
        <div>
          <FontAwesomeIcon icon={faStar} className="text-green-up" />
          <FontAwesomeIcon icon={faStar} className="text-green-up" />
          <FontAwesomeIcon icon={faStar} className="text-green-up" />
          <FontAwesomeIcon icon={faStar} className="text-green-up" />
          <FontAwesomeIcon icon={faStar} className="text-green-up" />
          <span className="ml-1">{testemonial.review}</span>{" "}
          <span>{testemonial.period}</span>
        </div>
        <i>{testemonial.desc}</i>
        <div className="flex justify-between w-1/2">
          <span>${testemonial.totalPrice}</span>
          <span>${testemonial.pricePerHour} /hr</span>
          <span>{testemonial.totalHours} hours</span>
        </div>
      </a>
    </motion.div>
  </Tilt>
);
