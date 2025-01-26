"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// Components
import { Painting } from "@/components/painting";
import { Button } from "@/components/button";
import { Title } from "@/components/title";

const Discover = () => {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  const { scrollYProgress: title1eScrollProgress } = useScroll({
    target: title1Ref,
    offset: ["end end", "center center"],
  });

  const { scrollYProgress: title2eScrollProgress } = useScroll({
    target: title2Ref,
    offset: ["end end", "center center"],
  });

  const title1Y = useTransform(title1eScrollProgress, [0, 1], [100, 0]);
  const title2Y = useTransform(title2eScrollProgress, [0, 1], [100, 0]);

  const MotionTitle = motion.create(Title);

  return (
    <section className="relative flex flex-col gap-32 bg-[#f5efe0] px-6 py-32 sm:px-8 md:px-12 lg:px-16 xl:px-24 xl:pt-80 2xl:px-40 2xl:pt-[420px]">
      <div className="flex flex-col">
        <MotionTitle
          tag="h2"
          textColor="secondary"
          ref={title1Ref}
          style={{ y: title1Y }}
        >
          Pinturas
        </MotionTitle>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-20 2xl:gap-48">
          <Painting
            alt="San Simeon, Siria"
            aspectRatio="aspect-[4/3]"
            captionDescription="Acrílico sobre lienzo"
            captionTitle="San Simeon, Siria"
            src="/galeria/imagen-104.jpg"
          />

          <Painting
            alt="El Retiro, Madrid"
            aspectRatio="aspect-[4/3]"
            captionDescription="Acrílico sobre lienzo"
            captionTitle="El Retiro, Madrid"
            src="/galeria/imagen-102.jpg"
          />
        </div>

        <Button
          href="/pinturas"
          className="mt-16 self-end md:mt-20 lg:mt-24 xl:mt-32"
          color="secondary"
        >
          Descubre más pinturas
        </Button>
      </div>

      <div className="flex flex-col">
        <MotionTitle
          tag="h2"
          textColor="secondary"
          ref={title2Ref}
          style={{ y: title2Y }}
        >
          Retratos
        </MotionTitle>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-20 2xl:gap-48">
          <Painting
            alt="Pascal"
            aspectRatio="aspect-[4/3]"
            captionDescription="Acrílico sobre lienzo"
            captionTitle="Pascal"
            src="/principal/retrato-032.jpg"
          />

          <Painting
            alt="Oscar"
            aspectRatio="aspect-[4/3]"
            captionDescription="Acrílico sobre lienzo"
            captionTitle="Oscar"
            src="/retratos/retrato-002.jpg"
          />
        </div>

        <Button
          href="/retratos"
          className="mt-16 self-start md:mt-20 lg:mt-24 xl:mt-32"
          color="secondary"
        >
          Descubre más retratos
        </Button>
      </div>
    </section>
  );
};

export { Discover };
