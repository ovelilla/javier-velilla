"use client";

// Vendors
import { useState, useRef, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
// Components
import { Navigation } from "./navigation";

const overlayVariants = {
  open: {
    background: "rgba(0, 0, 0, 0.5)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  closed: {
    background: "rgba(0, 0, 0, 0)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const sidebar = {
  open: (height: number) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 48px) 56px)`,
    transition: {
      type: "spring",
      stiffness: 15,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(32px at calc(100% - 48px) 56px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const [height, setHeight] = useState<number>(1000);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate="open"
          className="fixed right-0 top-0 z-40 h-full w-full"
          exit="closed"
          initial="closed"
          onClick={handleClick}
          variants={overlayVariants}
          ref={containerRef}
        >
          <motion.div
            animate="open"
            className="absolute right-0 top-0 z-40 h-full w-72 bg-[#0e1822] sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem]"
            exit="closed"
            initial="closed"
            custom={height}
            variants={sidebar}
          >
            <Navigation />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Sidebar };
