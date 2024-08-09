import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Carousel from "@/components/carousel";
import Icon from "@/components/icon";
import GitHub from "@/assets/icons/github.svg";

interface Props {
  title: string;
  siteLink?: string;
  githubLink: string;
  description: string[];
  stack: { icon: React.ReactNode }[];
  images: string[];
}

const projectVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const contentVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const iconsVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const projectTransition = {
  type: "tween",
  duration: 0.8,
};

const overlayTransition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const Project = (props: Props) => {
  const { title, siteLink, githubLink, description, stack, images } = props;
  const [pauseAutoPlay, setPauseAutoPlay] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!pauseAutoPlay) {
      setPauseAutoPlay(true);
    }
  }, [pauseAutoPlay]);

  const handleMouseLeave = useCallback(() => {
    if (pauseAutoPlay) {
      setPauseAutoPlay(false);
    }
  }, [pauseAutoPlay]);

  const slides = images.map((image) => (
    <img src={image} alt={title} className="h-full w-full object-contain" />
  ));

  return (
    <motion.div
      variants={projectVariants}
      transition={projectTransition}
      viewport={viewport}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      className="relative flex w-full flex-col items-stretch"
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full"
      >
        <Carousel slides={slides} autoPlay={!pauseAutoPlay} />
        <motion.div
          variants={overlayVariants}
          transition={overlayTransition}
          className="absolute left-0 top-0 hidden h-full w-full items-center justify-center px-64 py-4 backdrop-brightness-[0.25] lg:flex"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.div
              variants={contentVariants}
              transition={overlayTransition}
              className="flex items-center gap-2"
            >
              <h6 className="text-center font-manrope text-[calc(1.375rem_+_1.5vw)] font-bold leading-[1.2] text-white xl:text-[2.5rem]">
                {siteLink ? (
                  <a
                    href={siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}{" "}
                |
              </h6>
              <Icon link={githubLink}>
                <GitHub className="size-8 fill-white" />
              </Icon>
            </motion.div>
            {description.map((entry, index) => (
              <motion.p
                key={index}
                variants={contentVariants}
                transition={overlayTransition}
                className="text-center font-manrope text-base text-white"
              >
                {entry}
              </motion.p>
            ))}
            <motion.div
              variants={iconsVariants}
              transition={overlayTransition}
              className="flex gap-8"
            >
              {stack.map((technology, index) => {
                return (
                  <div key={index} className="size-12 *:invert">
                    {technology.icon}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={projectVariants}
        transition={overlayTransition}
        viewport={viewport}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center gap-6 border-b-2 border-black p-6 lg:hidden"
      >
        <motion.div
          variants={contentVariants}
          transition={overlayTransition}
          className="flex items-center gap-2"
        >
          <h6 className="text-center font-manrope text-[calc(1.375rem_+_1.5vw)] font-bold leading-[1.2] text-black xl:text-[2.5rem]">
            {siteLink ? (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}{" "}
            |
          </h6>
          <Icon link={githubLink}>
            <GitHub className="size-6 fill-black" />
          </Icon>
        </motion.div>
        {description.map((entry, index) => (
          <motion.p
            key={index}
            variants={contentVariants}
            transition={overlayTransition}
            className="text-center font-manrope text-base text-muted"
          >
            {entry}
          </motion.p>
        ))}
        <motion.div
          variants={iconsVariants}
          transition={overlayTransition}
          className="flex gap-4"
        >
          {stack.map((technology, index) => {
            return (
              <div key={index} className="size-8 *:fill-black">
                {technology.icon}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
