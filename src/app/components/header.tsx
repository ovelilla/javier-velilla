"use client";

// Vendors
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Components
import { Sidebar } from "./sidebar";
// Hooks
import { useMediaQuery } from "../hooks/useMediaQuery";

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

const barVariantsSm = {
  ...barVariants,
  open: (custom: number) => ({
    rotate: custom === 0 ? -45 : 45,
    y: custom === 0 ? -10 : 9,
    x: custom === 0 ? -9 : -9,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

const barVariantsMd = {
  ...barVariants,
  open: (custom: number) => ({
    rotate: custom === 0 ? -45 : 45,
    y: custom === 0 ? -11 : 10,
    x: custom === 0 ? -10 : -10,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

const getBarVariants = (isSm: boolean, isMd: boolean) => {
  if (isSm && !isMd) {
    return barVariantsSm;
  }
  if (isSm && isMd) {
    return barVariantsMd;
  }
  return barVariants;
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const xButton = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityButton = useTransform(scrollY, [0, 200], [1, 0]);

  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");

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
    <header className="flex h-28 overflow-hidden bg-[#0e1822] sm:h-32 md:h-36">
      <div className="flex flex-1 items-center justify-end px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
        <motion.button
          className="z-50 flex h-[88px] items-center gap-4 rounded-full md:gap-6"
          style={{ x: xButton, opacity: opacityButton }}
          onClick={handleClick}
        >
          <div className="flex items-center text-lg font-light uppercase leading-[1] text-white sm:text-xl md:text-2xl">
            {open ? "Cerrar" : "Menu"}
          </div>
          <div className="flex w-8 flex-col gap-2 sm:w-10 md:w-12 md:gap-3">
            <motion.span
              className="border border-t-0"
              custom={0}
              style={{ transformOrigin: "right" }}
              variants={getBarVariants(isSm, isMd)}
              animate={open ? "open" : "close"}
              initial="close"
            ></motion.span>
            <motion.span
              className="border border-t-0"
              custom={1}
              style={{ transformOrigin: "right" }}
              variants={getBarVariants(isSm, isMd)}
              animate={open ? "open" : "close"}
              initial="close"
            ></motion.span>
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
