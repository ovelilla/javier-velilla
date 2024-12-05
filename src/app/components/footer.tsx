"use client";

// Vendors
import { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
// Components
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
      <footer className="relative flex flex-col bg-[#0e1822] lg:min-h-screen lg:flex-row">
        <div className="relative shrink-0 lg:basis-1/2">
          <div className="flex h-full flex-col items-center gap-16 px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-24 lg:px-24 lg:py-36 xl:p-40">
            <div className="flex flex-col">
              <div
                className={`${menoBannerCondensedLight.className} text-center text-4xl uppercase text-white xl:text-5xl 2xl:text-6xl`}
              >
                Exposición de pintura en Casa de Vacas
              </div>
              <div className="text-center text-xl uppercase text-white md:text-xl xl:text-2xl 2xl:text-3xl">
                28 de noviembre - 29 de diciembre
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`${menoBannerCondensedLight.className} text-center text-6xl uppercase text-white md:text-6xl xl:text-7xl 2xl:text-8xl`}
              >
                Madrid
              </div>
              <div className="text-center text-white md:text-xl xl:text-2xl 2xl:text-3xl">
                P.º de Colombia, Retiro, 28009 Madrid
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="relative mt-auto flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#f0bb81] text-xl uppercase text-[#0e1822] transition-colors hover:text-white md:h-48 md:w-48 md:gap-1 md:text-2xl xl:h-52 xl:w-52 xl:gap-2 xl:text-3xl"
            >
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-[#f0bb81] md:h-52 md:w-52 xl:h-56 xl:w-56"></div>
              <span>Descargar</span>
              <span>Portfolio</span>
            </button>

            <div className="flex flex-col gap-2 uppercase text-white md:text-lg lg:items-center xl:text-xl 2xl:text-2xl">
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

          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 transform whitespace-nowrap py-2 lgpy-4 text-white">
            © {new Date().getFullYear()} Javier Velilla. All rights reserved.
          </div>
        </div>

        <div className="relative h-72 w-full shrink-0 lg:h-auto lg:basis-1/2">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            src="/galeria/imagen-000.jpg"
            loading="lazy"
          />
        </div>
      </footer>
    )
  );
};

export { Footer };
