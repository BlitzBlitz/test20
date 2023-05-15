import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const CourseCard = ({ course }) => (
  <Tilt className=" md:w-2/5 w-full my-3">
    <motion.div
      variants={fadeIn("right", "spring")}
      className="w-full rounded-[30px] border-primary border-4"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <h2 className="text-primary text-2xl font-bold">{course.title}</h2>
          <ul className="my-2 text-sm text-gray-700">
            {course.learning.map((point) => (
              <li key={point}>
                <FontAwesomeIcon icon={faCheck} className="text-green mx-1" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex justify-between my-4">
            <div>
              {" "}
              <span className="text-primary font-bold bg-secondary rounded-md mx-2 p-2 line-through decoration-1">
                ${course.price}
              </span>
              <span className="bg-green text-gray-100 text-sm font-bold py-1 px-2 rounded-md">
                {Math.round((1 - (course.price - 100) / course.price) * 100)}%
                off
              </span>
            </div>
            <span className="text-primary font-bold decoration-1">
              ${course.price - 100}
            </span>
          </div>
          <div className="flex justify-end">
            <button className="bg-green text-gray-100 text-sm font-bold py-2 px-4 rounded-md hover:bg-primary">
              Buy NOW
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);
