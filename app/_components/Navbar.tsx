"use client";
import Image from "next/image";
import About from "./About";
import Contact from "./Contact";
import { motion } from "framer-motion";

const gridNavbarVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridElemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <motion.div
        variants={gridNavbarVariants}
        initial="hidden"
        animate="show"
        className="flex justify-between items-center w-full px-8 lg:px-14"
      >
        <motion.div variants={gridElemVariants}>
          <About />
        </motion.div>
        <motion.div variants={gridElemVariants}>
          <Image src="/pgLang.svg" alt="Logo" width={220} height={200} />
        </motion.div>
        <motion.div variants={gridElemVariants}>
          <Contact />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
