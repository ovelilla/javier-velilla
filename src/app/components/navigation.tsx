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
    title: "Biografía",
    link: "/biografia",
  },
  {
    id: 2,
    title: "Galería",
    link: "/galeria",
  },
  {
    id: 3,
    title: "Contacto",
    link: "/contacto",
  },
];

export const Navigation = () => (
  <nav className="mt-24 p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 2xl:p-20">
    <motion.ul variants={variants} className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </motion.ul>
  </nav>
);
