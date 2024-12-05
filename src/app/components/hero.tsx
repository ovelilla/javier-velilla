"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
// Components
import { Title } from "@/components/title";

const Hero = () => {
  const { scrollY } = useScroll();

  const ySpan1 = useTransform(scrollY, [0, 800], [0, -200]);
  const ySpan2 = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative bg-[#0e1822]">
      <div className="flex h-72 items-end justify-center overflow-hidden py-6 sm:h-[312px] md:h-[336px] lg:h-[360px] xl:h-[408px] 2xl:h-[456px]">
        <Title className="flex flex-col text-center">
          <motion.span className="leading-none" style={{ x: ySpan1 }}>
            J. Javier
          </motion.span>
          <motion.span className="leading-none" style={{ x: ySpan2 }}>
            Velilla
          </motion.span>
        </Title>
      </div>

      <div className="xl:px-24 2xl:px-40">
        <div className="relative pt-[160%] sm:pt-[100%] md:pt-[80%] lg:pt-[60%] xl:pt-[50%] 2xl:pt-[40%]">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-full xl:-bottom-40 2xl:-bottom-64">
            <Image
              alt="Retiro"
              fill
              style={{ objectFit: "cover" }}
              priority
              src="/galeria/imagen-017.jpg"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
