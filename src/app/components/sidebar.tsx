"use client";

// Vendors
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { motion, useScroll, useTransform } from "framer-motion";

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
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(32px at calc(100% - 48px) 56px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
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
  console.log("hola");
  useEffect(() => {
    if (containerRef.current) {
      console.log(containerRef.current);
      setHeight(containerRef.current.offsetHeight);
    }
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
            className="absolute right-0 top-0 z-40 h-full w-72 bg-[#0e1822]"
            exit="closed"
            initial="closed"
            custom={height}
            variants={sidebar}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Sidebar };
