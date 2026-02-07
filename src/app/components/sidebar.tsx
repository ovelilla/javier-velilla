"use client";

// Vendors
import { useState, useRef, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
// Components
import { Navigation } from "./navigation";
// Hooks
import { useMediaQuery } from "../hooks/useMediaQuery";

const overlayVariants = {
  open: {
    background: "rgba(0, 0, 0, 0.5)",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
  closed: {
    background: "rgba(0, 0, 0, 0)",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

const getY = ({
  isSm,
  isMd,
  isLg,
  isXl,
  is2Xl,
}: {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
}) => {
  if (isSm) return "calc(100% - 48px)";
  if (isMd) return "calc(100% - 64px)";
  if (isLg) return "calc(100% - 96px)";
  if (isXl) return "calc(100% - 128px)";
  if (is2Xl) return "calc(100% - 160px)";
  return "calc(100% - 24px)";
};

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const [height, setHeight] = useState<number>(1000);
  const containerRef = useRef<HTMLDivElement>(null);

  const isSm = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isMd = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLg = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isXl = useMediaQuery("(min-width: 1280px) and (max-width: 1535px)");
  const is2Xl = useMediaQuery("(min-width: 1536px)");

  const sidebar = {
    open: (height: number) => ({
      clipPath: `circle(${height * 2 + 200}px at ${getY({
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
      })} 56px)`,
      transition: {
        type: "spring" as const,
        stiffness: 15,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(32px at  ${getY({
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
      })} 56px)`,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

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
            className="absolute right-0 top-0 z-40 h-full w-full bg-[#0e1822] sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem]"
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
