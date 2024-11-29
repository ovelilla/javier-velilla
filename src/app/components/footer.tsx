"use client";

// Vendors
import { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
// Icons
import { SiInstagram, SiFacebook } from "react-icons/si";
// Hooks
import { useMediaQuery } from "../hooks/useMediaQuery";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});
const Footer = () => {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  const [containerRendered, setContainerRendered] = useState(false);

  useEffect(() => {
    setContainerRendered(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/archivos/portfolio.pdf";
    link.download = "portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    containerRendered && (
      <footer className="relative flex flex-col bg-[#0e1822] lg:h-screen lg:flex-row">
        <div className="flex shrink-0 flex-col items-center px-8 py-32 sm:px-12 md:px-16 lg:basis-1/2 lg:px-24 lg:py-36 xl:px-32 xl:py-48 2xl:px-40 2xl:py-52">
          <div className="flex flex-col items-center">
            <div
              className={`${menoBannerCondensedLight.className} text-center text-4xl uppercase text-white xl:text-5xl 2xl:text-6xl`}
            >
              Exposición de pintura en Casa de Vacas
            </div>
            <div className="mt-8 text-xl uppercase text-white md:text-xl xl:text-2xl 2xl:text-3xl">
              28 de noviembre - 29 de diciembre
            </div>
            <div
              className={`${menoBannerCondensedLight.className} mt-8 text-6xl uppercase text-white md:text-6xl xl:text-7xl 2xl:text-8xl`}
            >
              Madrid
            </div>
            <div className="text-white md:text-xl xl:text-2xl 2xl:text-3xl">
              P.º de Colombia, Retiro, 28009 Madrid
            </div>
          </div>

          <div className="mt-16 flex lg:mt-auto">
            <button
              onClick={handleDownload}
              className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#f0bb81] text-xl uppercase text-[#0e1822] transition-colors hover:text-white lg:h-60 lg:w-60 lg:gap-2 lg:text-3xl"
            >
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-[#f0bb81] lg:h-64 lg:w-64"></div>
              <span>Descargar</span>
              <span>Portfolio</span>
            </button>
          </div>

          <div className="mt-16 flex flex-col gap-2 uppercase text-white md:text-lg xl:text-xl 2xl:text-2xl">
            <div>Redes Sociales</div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/javier.velilla"
                className="flex h-10 w-10 items-center justify-center"
              >
                <SiInstagram size={isSm ? (isMd ? 32 : 28) : 24} />
              </a>
              <a
                href="https://facebook.com/javier.velilla"
                className="flex h-10 w-10 items-center justify-center"
              >
                <SiFacebook size={isSm ? (isMd ? 32 : 28) : 24} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-72 w-full shrink-0 lg:h-full lg:basis-1/2">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/galeria/imagen-000.jpg"
          />
        </div>

        <div className="absolute bottom-0 left-0 z-10 flex w-full justify-center px-8 py-6 text-sm text-white sm:px-12 md:px-16 md:text-base lg:px-24 xl:px-32 xl:text-lg 2xl:px-48">
          <div className="w-full max-w-screen-2xl">
            © {new Date().getFullYear()} Javier Velilla. All rights reserved.
          </div>
        </div>
      </footer>
    )
  );
};

export { Footer };
