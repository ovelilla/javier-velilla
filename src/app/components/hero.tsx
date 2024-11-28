"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});

const Hero = () => {
  const { scrollY } = useScroll();

  const ySpan1 = useTransform(scrollY, [0, 800], [0, -200]);
  const ySpan2 = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative bg-[#0e1822]">
      <div className="flex h-72 items-end justify-center overflow-hidden py-6">
        <h1
          className={`flex flex-col text-center text-7xl uppercase text-[#bbcbdc] ${menoBannerCondensedLight.className}`}
        >
          <motion.span className="" style={{ x: ySpan1 }}>
            J. Javier
          </motion.span>
          <motion.span className="" style={{ x: ySpan2 }}>
            Velilla
          </motion.span>
        </h1>
      </div>

      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 transform bg-[#bbcbdc] opacity-20" />

      <div className="relative pt-[170%]">
        <Image
          alt="Retiro"
          fill
          style={{ objectFit: "cover" }}
          priority
          src="/galeria/imagen-017.jpg"
        />
      </div>
    </section>
  );
};

export { Hero };
