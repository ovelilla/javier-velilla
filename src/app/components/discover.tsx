"use client";

// Vendors
// import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});

const menoBannerLight = localFont({
  src: "../fonts/meno-banner-light.woff2",
});

const menoBannerLightItalic = localFont({
  src: "../fonts/meno-banner-light-italic.woff2",
});

const Discover = () => {
  // const { scrollY } = useScroll();

  // const ySpan1 = useTransform(scrollY, [0, 800], [0, -200]);
  // const ySpan2 = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative flex flex-col gap-32 bg-[#f5efe0] px-6 py-32">
      <div>
        <h2
          className={`flex flex-col text-6xl uppercase text-[#aa580d] ${menoBannerCondensedLight.className}`}
        >
          Pinturas
        </h2>

        <div className="relative mt-2 aspect-square">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/galeria/imagen-104.jpg"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <h3
            className={`flex flex-col text-3xl text-[#aa580d] ${menoBannerLight.className}`}
          >
            San Simeone, Siria
          </h3>
          <p className="flex flex-col text-lg text-[#aa580d80]">
            100 x 100 cm - Acrílico sobre lienzo
          </p>
        </div>

        <div className="relative mt-20 aspect-square">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/galeria/imagen-024.jpg"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <h3
            className={`flex flex-col text-3xl text-[#aa580d] ${menoBannerLight.className}`}
          >
            El Pilar, Zaragoza
          </h3>
          <p className="flex flex-col text-lg text-[#aa580d80]">
            100 x 100 cm - Acrílico sobre lienzo
          </p>
        </div>

        <button
          className={`mt-16 h-12 w-full border border-[#aa580d] px-4 text-xl text-[#aa580d] ${menoBannerLightItalic.className}`}
        >
          Ver pinturas
        </button>
      </div>

      <div>
        <h2
          className={`flex flex-col text-6xl uppercase text-[#aa580d] ${menoBannerCondensedLight.className}`}
        >
          Retratos
        </h2>

        <div className="relative mt-2 aspect-square">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/retratos/retrato-002.jpg"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <h3
            className={`flex flex-col text-3xl text-[#aa580d] ${menoBannerLight.className}`}
          >
            Pascal
          </h3>
          <p className="flex flex-col text-lg text-[#aa580d80]">
            100 x 100 cm - Acrílico sobre lienzo
          </p>
        </div>

        <div className="relative mt-20 aspect-square">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/retratos/retrato-003.jpg"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <h3
            className={`flex flex-col text-3xl text-[#aa580d] ${menoBannerLight.className}`}
          >
            Oscar
          </h3>
          <p className="flex flex-col text-lg text-[#aa580d80]">
            100 x 100 cm - Acrílico sobre lienzo
          </p>
        </div>

        <button
          className={`mt-16 h-12 w-full border border-[#aa580d] px-4 text-xl text-[#aa580d] ${menoBannerLightItalic.className}`}
        >
          Ver retratos
        </button>
      </div>

      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 transform bg-[#aa580d] opacity-20" />
    </section>
  );
};

export { Discover };
