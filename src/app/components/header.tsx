"use client";

// Vendors
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  // AnimatePresence,
} from "framer-motion";
// Components
import { Sidebar } from "./sidebar";

const barVariants = {
  close: {
    rotate: 0,
    y: 0,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: (custom: number) => ({
    rotate: custom === 0 ? -45 : 45,
    y: custom === 0 ? -7 : 7,
    x: custom === 0 ? -6 : -6,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const xButton = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityButton = useTransform(scrollY, [0, 200], [1, 0]);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="flex h-28 overflow-hidden bg-[#0e1822] md:h-56">
      <div className="flex flex-1 items-center justify-end px-8">
        <motion.button
          className="z-50 flex h-[88px] items-center gap-4 rounded-full md:gap-6"
          style={{ x: xButton, opacity: opacityButton }}
          onClick={handleClick}
        >
          <div className="order-2 flex w-8 flex-col gap-2 md:order-1 md:w-12 md:gap-3">
            <motion.span
              className="border border-t-0"
              custom={0}
              style={{ transformOrigin: "right" }}
              variants={barVariants}
              animate={open ? "open" : "close"}
              initial="close"
            ></motion.span>
            <motion.span
              className="border border-t-0"
              custom={1}
              style={{ transformOrigin: "right" }}
              variants={barVariants}
              animate={open ? "open" : "close"}
              initial="close"
            ></motion.span>
          </div>
          <div className="order-1 flex items-center text-lg font-light uppercase leading-[1] text-white md:order-2">
            {/* <AnimatePresence mode="wait" initial={false}> */}
            {/* {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0,  }}
                  animate={{ opacity: 1,  }}
                  exit={{ opacity: 0,  }}
                  transition={{ duration: 0.15 }}
                >
                  Cerrar
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0,  }}
                  animate={{ opacity: 1,  }}
                  exit={{ opacity: 0,  }}
                  transition={{ duration: 0.15 }}
                >
                  Menu
                </motion.span>
              )} */}
            {/* </AnimatePresence> */}
            {open ? "Cerrar" : "Menu"}
          </div>
        </motion.button>

        <Sidebar
          {...{
            open,
            setOpen,
          }}
        />
      </div>
    </header>
  );
};

export { Header };
