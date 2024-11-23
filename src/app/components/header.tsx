"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const xButton = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityButton = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <header className="flex h-28 overflow-hidden bg-[#0e1822] md:h-56">
      <div className="flex flex-1 items-center justify-end px-8">
        <motion.button
          className="flex h-12 items-center gap-4 md:gap-6"
          style={{ x: xButton, opacity: opacityButton }}
        >
          <div className="order-2 flex w-8 flex-col gap-2 md:order-1 md:w-12 md:gap-3">
            <span className="border border-t-0"></span>
            <span className="border border-t-0"></span>
          </div>
          <div className="order-1 text-lg font-light uppercase leading-[1] text-white md:order-2">
            Menu
          </div>
        </motion.button>
      </div>
    </header>
  );
};

export { Header };
