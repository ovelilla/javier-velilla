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
      <div className="flex h-72 items-end justify-center overflow-hidden py-6 sm:h-[312px] md:h-[336px] lg:h-[360px] xl:h-[408px] 2xl:h-[456px]">
        <h1
          className={`flex flex-col text-center text-7xl uppercase text-[#bbcbdc] sm:text-[88px] md:text-[104px] lg:text-[112px] xl:text-[128px] 2xl:text-[152px] ${menoBannerCondensedLight.className}`}
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

      <div className="xl:px-24 2xl:px-40">
        <div className="relative pt-[160%] sm:pt-[100%] md:pt-[80%] lg:pt-[60%] xl:pt-[50%] 2xl:pt-[40%]">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-full xl:-bottom-40 2xl:-bottom-64">
            <Image
              alt="Retiro"
              fill
              style={{ objectFit: "cover" }}
              priority
              src="/galeria/imagen-017.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
