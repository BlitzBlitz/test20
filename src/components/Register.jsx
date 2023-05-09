import React from "react";
import { styles } from "../styles";

export default function Register() {
  return (
    <div
      className={`lg:${styles.paddingX} w-full mt-10 flex flex-wrap items-center  bg-green `}
    >
      <a
        href="#contact"
        className=" flex border-primary w-full lg:w-1/3 border-r-2 lg:p-3 p-6 items-start ease-in duration-200 hover:bg-primary"
      >
        <span className=" sm:text-8xl text-3xl mx-3 bg-primary rounded p-3 font-bold">
          1
        </span>
        <div className=" font-semibold">
          <h1 className="text-primary  text-2xl sm:text-4xl">Book</h1>
          <p>
            Book a meeting with one of our teachers to get an overview of
            Pakashum`
          </p>
        </div>
      </a>
      <div className=" flex  border-primary  w-full lg:w-1/3  border-r-2 lg:p-3 p-6 items-start">
        <span className="sm:text-8xl text-3xl mx-3 bg-primary rounded p-3 font-bold">
          2
        </span>
        <div className=" font-semibold">
          <h1 className="text-primary sm:text-4xl text-2xl">Schedule</h1>
          <p>
            Schedule two free demo classes to experience PakaShum` learning
            style
          </p>
        </div>
      </div>
      <div className=" flex  border-primary border-r-2 lg:border-none w-full lg:w-1/3  lg:p-3 p-6 items-start">
        <span className="sm:text-8xl text-3xl mx-3 bg-primary rounded p-3 font-bold">
          3
        </span>
        <div className=" font-semibold">
          <h1 className="text-primary sm:text-4xl text-2xl">Join</h1>
          <p>
            Join one of our courses and enhance your coding skills to the next
            level
          </p>
        </div>
      </div>
    </div>
  );
}
