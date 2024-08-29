"use client";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col lg:gap-y-10 gap-y-3 mt-6 lg:mt-[50px]">
      <div className="flex items-center lg:gap-x-8 gap-x-3">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
          className="font-absans lg:text-[5rem] md:text-[3.5rem] text-4xl uppercase tracking-wide font-bold text-black"
        >
          Sayyed
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
          className="font-absans lg:text-[5rem] md:text-[3.5rem] text-4xl uppercase tracking-wide font-bold text-black"
        >
          Saad
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.4 }}
        className="font-absans font-light lg:text-sm text-xs"
      >
        MERN Developer | Software Engineer | Game Developer
      </motion.p>
      <Projects />
    </section>
  );
};

export default Hero;
