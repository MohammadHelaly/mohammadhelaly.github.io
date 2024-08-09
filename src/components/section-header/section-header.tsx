import { motion } from "framer-motion";

interface Props {
  titleText: string;
  subtitleText: string;
  textTheme?: "light" | "dark";
}

const parentVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const SectionHeader = (props: Props) => {
  const { titleText, subtitleText, textTheme = "dark" } = props;

  const textVariant = textTheme === "light" ? "text-white" : "text-black";

  const titleClasses = `${textVariant} text-[calc(1.425rem_+_2.1vw)] font-manrope font-bold leading-[1.2] text-center xl:text-[3rem]`;

  const subtitleClasses = `${textVariant} font-light font-manrope text-center text-xl`;

  return (
    <motion.div
      variants={parentVariants}
      transition={transition}
      viewport={viewport}
      initial="initial"
      whileInView="animate"
      className="flex flex-col items-center justify-center gap-2"
    >
      <motion.h5
        variants={childVariants}
        transition={transition}
        className={titleClasses}
      >
        {titleText}
      </motion.h5>
      <motion.p
        variants={childVariants}
        transition={transition}
        className={subtitleClasses}
      >
        {subtitleText}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;
