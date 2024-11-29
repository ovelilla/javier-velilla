"use client";

// Vendors
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
// Components
import { Sidebar } from "./sidebar";
// Hooks
import { useMediaQuery } from "../hooks/useMediaQuery";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});

const MotionLink = motion(Link);

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
    x: custom === 0 ? -7 : -7,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

const barVariantsSm = {
  ...barVariants,
  open: (custom: number) => ({
    rotate: custom === 0 ? -45 : 45,
    y: custom === 0 ? -10 : 10,
    x: custom === 0 ? -10 : -10,
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

  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [200, 600],
    ["rgba(14, 24, 34, 0)", "rgba(14, 24, 34, 1)"],
  );
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);

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
    <motion.header
      className="fixed left-0 top-0 z-40 flex h-20 w-full overflow-hidden xl:h-24 2xl:h-28"
      style={{ backgroundColor }}
    >
      <div className="relativ flex flex-1 items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40">
        <MotionLink
          className={`flex text-center text-2xl uppercase text-[#bbcbdc] xl:text-3xl ${menoBannerCondensedLight.className}`}
          style={{ opacity }}
          href="/"
        >
          J. Javier Velilla
        </MotionLink>

        <button
          className="z-50 flex h-[88px] items-center gap-4 rounded-full md:gap-6"
          onClick={handleClick}
        >
          <div className="flex w-8 flex-col gap-2 sm:w-10 md:w-12 md:gap-3">
            <motion.span
              className="border border-t-0 border-[#bbcbdc]"
              custom={0}
              style={{ transformOrigin: "right" }}
              variants={getBarVariants(isSm, isMd)}
              animate={open ? "open" : "close"}
              initial="close"
            ></motion.span>
            <motion.span
              className="border border-t-0 border-[#bbcbdc]"
              custom={1}
              style={{ transformOrigin: "right" }}
              variants={getBarVariants(isSm, isMd)}
              animate={open ? "open" : "close"}
              initial="close"
            ></motion.span>
          </div>
        </button>

        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </motion.header>
  );
};

export { Header };
