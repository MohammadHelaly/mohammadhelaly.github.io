import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseMenu } from "@/assets/icons";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const links = ["About", "Projects", "Skills", "Contact"];

const drawerVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.8 },
};

const transition = {
  type: "tween",
  duration: 0.2,
};

const NavDrawer = (props: Props) => {
  const { open, onOpenChange } = props;

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
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                variants={overlayVariants}
                transition={transition}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 z-50 bg-black"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={drawerVariants}
                transition={transition}
                className="fixed right-0 top-0 z-50 h-full w-80 bg-white"
              >
                <div className="flex w-full items-center justify-between px-3 py-3">
                  <a
                    className="font-manrope text-xl font-bold text-black"
                    href="#home"
                  >
                    helaly.dev
                  </a>
                  <Dialog.Close asChild>
                    <motion.button
                      className="size-8 items-center justify-center border-none bg-transparent p-0 focus:outline-none"
                      type="button"
                      aria-label="Close navigation"
                    >
                      <CloseMenu className="h-full w-full fill-black" />
                    </motion.button>
                  </Dialog.Close>
                </div>
                <nav className="px-3 py-24">
                  <ul>{renderLinks()}</ul>
                </nav>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default NavDrawer;
