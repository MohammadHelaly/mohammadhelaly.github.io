import { motion } from "framer-motion";

interface Props {
  position: string;
  place: string;
  dates: string;
  description: string[];
}

const itemVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const contentParentVariants = {
  initial: {
    clipPath: "polygon(-20% 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(-20% 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const contentChildVariants = {
  initial: {
    clipPath: "polygon(-20% 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(-20% 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const itemTransition = {
  type: "tween",
  duration: 0.4,
};

const contentTransition = {
  type: "tween",
  duration: 0.4,
  delay: 0.2,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const TimelineItem = (props: Props) => {
  const { position, place, dates, description } = props;

  return (
    <div className="flex w-full flex-row">
      <div className="relative ml-2 mr-[4%] border-x border-black">
        <div className="absolute left-1/2 top-[12%] size-6 -translate-x-1/2 rounded-full border-4 border-white bg-black" />
      </div>
      <motion.div
        variants={itemVariants}
        transition={itemTransition}
        viewport={viewport}
        initial="initial"
        whileInView="animate"
        className="mb-12 flex-grow border-t-2 border-black bg-white p-6 md:px-12"
      >
        <h2 className="font-manrope text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.2] text-black xl:text-[2rem]">
          {position}
        </h2>
        <ul className="flex flex-col gap-1 py-4">
          <li className="font-manrope text-base font-normal !italic text-black">
            {place}
          </li>
          <li className="font-manrope text-base font-normal !italic text-black">
            {dates}
          </li>
        </ul>
        <hr />
        <motion.ul
          variants={contentParentVariants}
          transition={contentTransition}
          viewport={viewport}
          initial="initial"
          whileInView="animate"
          className="flex list-disc flex-col gap-1 py-4 ps-8"
        >
          {description.map((point, index) => (
            <motion.li
              key={index}
              variants={contentChildVariants}
              transition={contentTransition}
              className="font-manrope text-base font-normal text-muted"
            >
              <p>{point}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
