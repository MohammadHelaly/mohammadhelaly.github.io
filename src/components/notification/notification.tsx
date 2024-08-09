import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import CloseMenu from "@/assets/icons/close-menu-black.svg";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  text: string;
  variant: "success" | "error";
}

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  type: "tween",
  duration: 0.4,
};

const Notifications = (props: Props) => {
  const { open, onOpenChange, text, variant } = props;

  let contentClasses =
    "fixed z-50 bottom-8 max-lg:right-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-8 w-80 bg-white shadow-[0_0_36px_rgba(0,0,0,0.15)] border-b-2";
  let textClasses = "font-manrope font-normal text-sm";

  switch (variant) {
    case "success":
      contentClasses += " border-black";
      textClasses += " text-black";
      break;
    case "error":
      contentClasses += " border-[#e94545]";
      textClasses += " text-[#e94545]";
      break;
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Content asChild forceMount>
              <motion.div
                variants={contentVariants}
                transition={transition}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={contentClasses}
              >
                <Dialog.Title asChild>
                  <div className="flex w-full items-center justify-end p-3">
                    <Dialog.Close asChild>
                      <button
                        className="size-4 items-center justify-center border-none bg-transparent p-0"
                        type="button"
                        aria-label="Close dialog"
                      >
                        <CloseMenu className="h-full w-full fill-black" />
                      </button>
                    </Dialog.Close>
                  </div>
                </Dialog.Title>
                <div className="p-6 pt-0">
                  <p className={textClasses}>{text}</p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Notifications;
