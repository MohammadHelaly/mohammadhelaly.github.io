import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const textParentVariants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const textChildVariants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-center gap-14">
          <SectionHeader
            titleText="About me"
            subtitleText="Hi, I'm Mohammad."
          />
          <div className="grid w-full grid-cols-1 place-content-center gap-12 lg:grid-cols-[1fr_2fr] lg:grid-rows-1 lg:gap-0">
            <motion.img
              variants={imageVariants}
              transition={transition}
              viewport={viewport}
              initial="initial"
              whileInView="animate"
              alt="Me"
              src="/assets/images/me.jpg"
              className="m-auto w-64 rounded-full"
            />
            <motion.div
              variants={textParentVariants}
              transition={transition}
              viewport={viewport}
              initial="initial"
              whileInView="animate"
              className="flex flex-col justify-center gap-5 px-6"
            >
              <motion.p
                variants={textChildVariants}
                transition={transition}
                className="text-center font-manrope text-base text-muted lg:text-start"
              >
                I hold a B.E. in Computer and Communications Engineering from
                Alexandria University.
              </motion.p>
              <motion.p
                variants={textChildVariants}
                transition={transition}
                className="text-center font-manrope text-base text-muted lg:text-start"
              >
                I'm passionate about software development with a strong interest
                in data science and machine learning.
              </motion.p>
              <motion.p
                variants={textChildVariants}
                transition={transition}
                className="text-center font-manrope text-base text-muted lg:text-start"
              >
                I'm eager to contribute to innovative solutions and collaborate
                with industry peers.
              </motion.p>
              <motion.p
                variants={textChildVariants}
                transition={transition}
                className="text-center font-manrope text-base text-muted lg:text-start"
              >
                I'm committed to continuous learning and real-world
                problem-solving.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
