"use client";

// Vendors
// import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const menoBannerLight = localFont({
  src: "../fonts/meno-banner-light.woff2",
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
  // const { scrollY } = useScroll();

  // const ySpan1 = useTransform(scrollY, [0, 800], [0, -200]);
  // const ySpan2 = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`relative mt-2 ${aspectRatio}`}>
        <Image
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          priority
          src={src}
        />
      </div>

      <div className="mt-4 flex flex-col">
        <h3
          className={`flex flex-col text-3xl text-[#aa580d] ${menoBannerLight.className}`}
        >
          {captionTitle}
        </h3>
        <p className="flex flex-col text-lg text-[#aa580d80]">
          {captionDescription}
        </p>
      </div>
    </div>
  );
};

export { Painting };
