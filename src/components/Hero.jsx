import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";

const Hero = () => {
  const ComputerCanvas = React.lazy(() => import("./canvas/Computers"));
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute  inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}  flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, We are{" "}
            <span className="px-3 text-primary bg-[#00ce8d]">PakaShum`</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We build the <br className="sm:block hidden" />
            coders of tomorrow
          </p>
        </div>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>
        <ComputerCanvas />
      </React.Suspense>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
        </a>
      </div>
    </section>
  );
};

export default Hero;
