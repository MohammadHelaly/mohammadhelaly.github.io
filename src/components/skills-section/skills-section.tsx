import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import SkillIcon from "@/components/skill-icon";
import { skillsData } from "@/data";

const parentVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const transition = {
  type: "tween",
  duration: 0.2,
  staggerChildren: 0.1,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white py-12">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-14">
          <SectionHeader
            titleText="Skills"
            subtitleText="Software development. Data science and machine learning."
          />
          <motion.div
            variants={parentVariants}
            transition={transition}
            viewport={viewport}
            initial="initial"
            whileInView="animate"
            className="grid w-full grid-cols-3 grid-rows-6 place-items-center gap-12 md:grid-cols-6 md:grid-rows-3"
          >
            {skillsData.map((skill) => {
              return (
                <motion.div
                  key={skill.name}
                  variants={childVariants}
                  transition={transition}
                >
                  <SkillIcon name={skill.name}>{skill.icon}</SkillIcon>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
