import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type MenuItemProps = {
  title: string;
  link: string;
};

export const MenuItem = ({ title, link }: MenuItemProps) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={link}
        className="flex h-12 font-noto text-2xl uppercase text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
      >
        {title}
      </Link>
    </motion.li>
  );
};