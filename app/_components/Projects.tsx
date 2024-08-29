import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const divVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const elemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Projects = () => {
  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="show"
      className="flex justify-center items-center flex-col w-full my-14 gap-y-16 lg:gap-y-6"
    >
      <motion.div
        variants={elemVariants}
        className="flex justify-center items-center flex-col w-full gap-y-0"
      >
        <Link target="_blank" href="https://expense-tracker-down.vercel.app/">
          <Image src="/dollar.png" alt="Project 1" height={45} width={45} />
          <h4 className="font-absans font-semibold text-xs text-center">
            project-finance
          </h4>
        </Link>
      </motion.div>
      <motion.div
        variants={elemVariants}
        className="flex justify-between items-center w-full lg:px-[200px] px-6"
      >
        <div>
          <Link target="_blank" href="https://euphoriabygrove.vercel.app">
            <Image
              src="/whiteboard.png"
              alt="Project 2"
              height={45}
              width={45}
            />
            <h4 className="font-absans font-semibold text-xs text-center">
              project-euphoria
            </h4>
          </Link>
        </div>
        <div>
          <Link target="_blank" href="https://jadebygrove.vercel.app/">
            <Image
              src="/brainstorm.png"
              alt="Project 3"
              height={45}
              width={45}
            />
            <h4 className="font-absans font-semibold text-xs text-center">
              project-jade
            </h4>
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={elemVariants}
        className="flex justify-center items-center flex-col w-full mt-5 "
      >
        <Link target="_blank" href="https://yvlcoffee.vercel.app/">
          <Image
            src="/coffee-shop.png"
            alt="Project 4"
            height={45}
            width={45}
          />
          <h4 className="font-absans font-semibold text-xs text-center">
            project-coffee
          </h4>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
