"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const menoBannerLight = localFont({
  src: "../app/fonts/meno-banner-light.woff2",
});

type PictureProps = {
  alt: string;
  aspectRatio?: string;
  src: string;
  className?: string;
  captionTitle: string;
  captionDescription: string;
};

const Painting = ({
  alt,
  aspectRatio = "aspect-square",
  className,
  captionDescription,
  captionTitle,
  src,
}: PictureProps) => {
  const containerRef = useRef(null);

  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "0.8 0.8"],
  });

  const opacity = useTransform(containerScrollProgress, [0, 1], [0, 1]);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`relative mt-2 ${aspectRatio}`}>
        <Image
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          priority
          src={src}
          className="z-10"
          loading="lazy"
        />
      </div>

      <motion.div
        className="mt-4 flex flex-col"
        ref={containerRef}
        style={{ opacity }}
      >
        <h3
          className={`flex flex-col text-3xl text-[#aa580d] ${menoBannerLight.className}`}
        >
          {captionTitle}
        </h3>
        <p className="flex flex-col text-lg text-[#aa580d80]">
          {captionDescription}
        </p>
      </motion.div>
    </div>
  );
};

export { Painting };
