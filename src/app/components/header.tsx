"use client";

// Vendors
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Components
import { Sidebar } from "./sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const xButton = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityButton = useTransform(scrollY, [0, 200], [1, 0]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="flex h-28 overflow-hidden bg-[#0e1822] md:h-56">
      <div className="flex flex-1 items-center justify-end px-8">
        <motion.button
          className="z-50 flex h-[88px] w-[88px] items-center gap-4 rounded-full md:gap-6"
          style={{ x: xButton, opacity: opacityButton }}
          onClick={handleClick}
        >
          <div className="order-2 flex w-8 flex-col gap-2 md:order-1 md:w-12 md:gap-3">
            <span className="border border-t-0"></span>
            <span className="border border-t-0"></span>
          </div>
          <div className="order-1 text-lg font-light uppercase leading-[1] text-white md:order-2">
            {open ? "Close" : "Menu"}
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
