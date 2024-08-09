import { motion } from "framer-motion";
import { Gmail, Phone } from "@/assets/icons";
import Icon from "@/components/icon";

const variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const ContactInformation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-6 lg:items-start lg:px-20 lg:py-6 xl:px-24">
      <motion.h5
        variants={variants}
        transition={transition}
        viewport={viewport}
        initial="initial"
        whileInView="animate"
        className="font-manrope text-[calc(1.375rem_+_1.5vw)] font-bold leading-[1.2] text-black xl:text-[2.5rem]"
      >
        Contact me
      </motion.h5>
      <motion.p
        variants={variants}
        transition={transition}
        viewport={viewport}
        initial="initial"
        whileInView="animate"
        className="text-center font-manrope text-xl font-light text-muted lg:text-start"
      >
        I would love to hear from you. You can reach me through email or give me
        a call. Alternatively, you can fill out this form and I'll get back to
        you as soon as possible.{" "}
      </motion.p>
      <motion.div
        variants={variants}
        transition={transition}
        viewport={viewport}
        initial="initial"
        whileInView="animate"
        className="flex items-center gap-2"
      >
        <Icon link="tel:+201095536781">
          <Phone className="size-8 fill-black" />
        </Icon>
        <p className="font-manrope text-black">
          <a href="tel:+201095536781">+20 109 553 6781</a>
        </p>
      </motion.div>
      <motion.div
        variants={variants}
        transition={transition}
        viewport={viewport}
        initial="initial"
        whileInView="animate"
        className="flex items-center gap-2"
      >
        <Icon link="mailto:mohammad.helaly@gmail.com">
          <Gmail className="fill-black" height="38px" width="34px" />
        </Icon>
        <p className="font-manrope text-black">
          <a href="mailto:mohammad.helaly@gmail.com">
            mohammad.helaly@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default ContactInformation;
