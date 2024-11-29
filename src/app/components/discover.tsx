"use client";

// Vendors
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import localFont from "next/font/local";
// Components
import { Painting } from "./painting";
import { OutlineButton } from "./outline-button";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});

// const menoBannerLight = localFont({
//   src: "../fonts/meno-banner-light.woff2",
// });

// const menoBannerLightItalic = localFont({
//   src: "../fonts/meno-banner-light-italic.woff2",
// });

const Discover = () => {
  // const { scrollY } = useScroll();

  // const ySpan1 = useTransform(scrollY, [0, 800], [0, -200]);
  // const ySpan2 = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative flex flex-col gap-32 bg-[#f5efe0] px-6 py-32 sm:px-8 md:px-12 lg:px-16 xl:px-24 xl:pt-80 2xl:px-40 2xl:pt-[420px]">
      <div className="flex flex-col">
        <h2
          className={`flex flex-col text-6xl uppercase text-[#aa580d] 2xl:text-8xl ${menoBannerCondensedLight.className}`}
        >
          Pinturas
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-20 2xl:gap-48">
          <Painting
            alt="San Simeone, Siria"
            aspectRatio="aspect-[4/3]"
            captionDescription="100 x 100 cm - Acrílico sobre lienzo"
            captionTitle="San Simeone, Siria"
            src="/galeria/imagen-104.jpg"
          />

          <Painting
            alt="El Pilar, Zaragoza"
            aspectRatio="aspect-[4/3]"
            captionDescription="100 x 100 cm - Acrílico sobre lienzo"
            captionTitle="El Pilar, Zaragoza"
            src="/galeria/imagen-024.jpg"
          />
        </div>

        <OutlineButton
          className="mt-16 self-end md:mt-20 lg:mt-24 xl:mt-32"
          color="secondary"
          text="Ver todas las pinturas"
        />
      </div>

      <div className="flex flex-col">
        <h2
          className={`flex flex-col text-6xl uppercase text-[#aa580d] 2xl:text-8xl ${menoBannerCondensedLight.className}`}
        >
          Retratos
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-20 2xl:gap-48">
          <Painting
            alt="Pascal"
            aspectRatio="aspect-[4/3]"
            captionDescription="100 x 100 cm - Acrílico sobre lienzo"
            captionTitle="Pascal"
            src="/retratos/retrato-002.jpg"
          />

          <Painting
            alt="Oscar"
            aspectRatio="aspect-[4/3]"
            captionDescription="100 x 100 cm - Acrílico sobre lienzo"
            captionTitle="Oscar"
            src="/retratos/retrato-003.jpg"
          />
        </div>

        <OutlineButton
          className="mt-16 self-start md:mt-20 lg:mt-24 xl:mt-32"
          color="secondary"
          text="Ver todos los retratos"
        />
      </div>

      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 transform bg-[#aa580d] opacity-20" />
    </section>
  );
};

export { Discover };
