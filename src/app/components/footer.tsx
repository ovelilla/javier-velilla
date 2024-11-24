"use client";

// Vendors
import { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
// Icons
import { SiInstagram, SiFacebook } from "react-icons/si";
// Hooks
import { useMediaQuery } from "../hooks/useMediaQuery";

const lovelaceRegular = localFont({
  src: "../fonts/lovelace-regular.woff2",
});

const Footer = () => {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  const [containerRendered, setContainerRendered] = useState(false);

  useEffect(() => {
    setContainerRendered(true);
  }, []);

  return (
    containerRendered && (
      <footer className="flex flex-col bg-[#0e1822]">
        <div className="flex justify-center px-8 py-12 sm:px-12 sm:py-20 md:px-16 md:py-28 lg:px-24 lg:py-36 xl:px-32 xl:py-48 2xl:px-48 2xl:py-40 2xl:text-[9rem]">
          <div className="flex w-full max-w-screen-2xl flex-col lg:flex-row">
            <div className="flex w-full max-w-screen-2xl basis-1/2 flex-col gap-8 lg:gap-12">
              <div className="flex flex-col">
                <div
                  className={`${lovelaceRegular.className} text-5xl uppercase text-white md:text-6xl xl:text-7xl 2xl:text-8xl`}
                >
                  Madrid
                </div>
                <div className="text-white md:text-xl xl:text-2xl 2xl:text-3xl">
                  P.º de Colombia, Retiro, 28009 Madrid
                </div>
              </div>

              <div className="flex flex-col md:text-lg xl:text-xl 2xl:text-2xl">
                <a href="https://javiervelilla.com" className="text-slate-400">
                  javiervelilla.es
                </a>
                <a href="tel:+34600000000" className="text-slate-400">
                  +34 600 00 00 00
                </a>
                <a
                  href="mailto:javiervelilla@gmail.com"
                  className="text-slate-400"
                >
                  javiervelilla@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-2 md:text-lg xl:text-xl 2xl:text-2xl">
                <div className="uppercase text-white">Social Network</div>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/javier.velilla"
                    className="flex h-10 w-10 items-center justify-center text-white"
                  >
                    <SiInstagram size={isSm ? (isMd ? 32 : 28) : 24} />
                  </a>
                  <a
                    href="https://facebook.com/javier.velilla"
                    className="flex h-10 w-10 items-center justify-center text-white"
                  >
                    <SiFacebook size={isSm ? (isMd ? 32 : 28) : 24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex w-full basis-1/2 items-center justify-center">
              <button className="relative flex h-60 w-60 flex-col items-center justify-center gap-2 rounded-full bg-[#f0bb81] text-3xl uppercase text-[#0e1822] transition-colors hover:text-white">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-[#f0bb81]"></div>
                <span>Descargar</span>
                <span>Portfolio</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-72 w-full 2xl:h-[640px]">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/sin-nombre-001.jpg"
          />

          <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#0e1822] to-transparent"></div>

          <div className="absolute bottom-0 left-0 z-10 px-8 py-6 text-sm text-white sm:px-12 md:px-16 md:text-base lg:px-24 xl:px-32 xl:text-lg 2xl:px-48">
            © {new Date().getFullYear()} Javier Velilla. All rights reserved.
          </div>
        </div>
      </footer>
    )
  );
};

export { Footer };
