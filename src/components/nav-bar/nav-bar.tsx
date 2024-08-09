import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Container from "@/components/container";
import NavDrawer from "@/components/nav-drawer";
import { HamburgerMenu } from "@/assets/icons";

const navVariants = {
  initial: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  animate: {
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const navParentVariants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: { opacity: 1, y: 0 },
};

const navChildVariants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
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

const links = ["About", "Projects", "Skills", "Contact"];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateNavBar, setAnimateNavBar] = useState("initial");
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setAnimateNavBar(latest > 100 ? "animate" : "initial");
    });
    return () => unsubscribe();
  }, [scrollY]);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const renderLinks = () => {
    return links.map((link) => {
      const href = "#" + link.toLowerCase();

      return (
        <li key={link}>
          <a
            href={href}
            className="flex h-full items-center px-4 py-1 font-manrope text-base font-normal text-black transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
          >
            {link}
          </a>
        </li>
      );
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white py-3">
      <motion.div
        className="w-full"
        variants={navVariants}
        transition={transition}
        initial="initial"
        animate={animateNavBar}
      >
        <Container>
          <motion.div
            variants={navParentVariants}
            transition={transition}
            viewport={viewport}
            initial="initial"
            whileInView="animate"
            className="flex w-full items-center justify-between gap-2"
          >
            <motion.a
              variants={navChildVariants}
              transition={transition}
              className="font-manrope text-xl font-bold text-black"
              href="#home"
            >
              helaly.dev
            </motion.a>
            <motion.nav
              variants={navChildVariants}
              transition={transition}
              className="hidden lg:flex"
            >
              <ul className="flex">{renderLinks()}</ul>
            </motion.nav>
            <motion.button
              variants={navChildVariants}
              transition={transition}
              className="flex size-8 items-center justify-center border-none bg-transparent p-0 focus:outline-none lg:hidden"
              type="button"
              aria-label="Toggle navigation"
              onClick={openDrawer}
            >
              <HamburgerMenu className="h-full w-full fill-black" />
            </motion.button>
          </motion.div>
        </Container>
        <NavDrawer open={isOpen} onOpenChange={setIsOpen} />
      </motion.div>
    </header>
  );
};

export default NavBar;
