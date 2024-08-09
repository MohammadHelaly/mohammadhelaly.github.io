import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "@/assets/icons";

interface Props {
  slides: React.ReactNode[];
  indicators?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  transitionDuration?: number;
}

const slideVariants = {
  initial: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? "100%" : "-100%",
  }),
  animate: {
    x: 0,
  },
  exit: (direction: "forward" | "backward") => ({
    x: direction === "backward" ? "100%" : "-100%",
  }),
};

const Carousel = (props: Props) => {
  const {
    slides,
    indicators = true,
    controls = true,
    autoPlay = true,
    autoPlayInterval = 5000,
    transitionDuration = 600,
  } = props;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const transition = {
    type: "tween",
    duration: transitionDuration / 1000,
  };

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const debounceButtons = useCallback(() => {
    setButtonsDisabled(true);
    setTimeout(() => {
      setButtonsDisabled(false);
    }, transitionDuration + 200);
  }, [transitionDuration]);

  const nextSlide = useCallback(() => {
    setDirection("forward");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    debounceButtons();
  }, [slides.length, debounceButtons]);

  const previousSlide = useCallback(() => {
    setDirection("backward");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    debounceButtons();
  }, [slides.length, debounceButtons]);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > current ? "forward" : "backward");
      setCurrent(index);
      debounceButtons();
    },
    [current, debounceButtons],
  );

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, nextSlide]);

  useEffect(() => {
    if (autoPlay) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
  }, [current, autoPlay, autoPlayInterval, nextSlide]);

  return (
    <div className="relative aspect-[20/9] w-full">
      <div className="relative mx-auto h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={current}
            variants={slideVariants}
            custom={direction}
            transition={transition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute flex h-full w-full items-center justify-center"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>
      {controls && (
        <>
          <div className="absolute left-6 top-0 flex h-full items-center justify-center">
            <button
              disabled={buttonsDisabled}
              onClick={previousSlide}
              className="z-20 flex size-12 items-center justify-center rounded-full"
            >
              <ChevronRight className="rotate-180 fill-white" />
            </button>
          </div>
          <div className="absolute right-6 top-0 flex h-full items-center justify-center">
            <button
              disabled={buttonsDisabled}
              onClick={nextSlide}
              className="z-20 flex size-12 items-center justify-center rounded-full"
            >
              <ChevronRight className="fill-white" />
            </button>
          </div>
        </>
      )}
      {indicators && (
        <div className="absolute bottom-6 flex w-full items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              disabled={buttonsDisabled}
              onClick={() => goToSlide(index)}
              className={`z-20 box-content size-1 rounded-full ${
                index === current
                  ? "border-2 border-white bg-transparent"
                  : "bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
