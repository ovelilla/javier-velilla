import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const items = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "About",
    link: "/about",
  },
  {
    id: 2,
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
];

export const Navigation = () => (
  <nav className="mt-24 p-8">
    <motion.ul variants={variants} className="flex flex-col gap-2">
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </motion.ul>
  </nav>
);
