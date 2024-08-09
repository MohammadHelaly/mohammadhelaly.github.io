import { motion } from "framer-motion";
import Container from "@/components/container";
import ServiceCard from "@/components/service-card";
import { servicesData } from "@/data";

const parentVariants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 80,
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
  amount: "some" as const,
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-12">
      <Container>
        <motion.div
          variants={parentVariants}
          transition={transition}
          viewport={viewport}
          initial="initial"
          whileInView="animate"
          className="grid w-full grid-cols-1 place-items-center gap-16 lg:grid-cols-3"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.serviceTitle}
              variants={childVariants}
              transition={transition}
              className="h-full w-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesSection;
