"use client";

// Vendors
import Image from "next/image";
import localFont from "next/font/local";
// Icons
import { SiInstagram, SiFacebook } from "react-icons/si";

const lovelaceRegular = localFont({
  src: "../fonts/lovelace-regular.woff2",
});

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#0e1822]">
      <div className="flex flex-col gap-8 px-8 py-16">
        <div className="flex flex-col">
          <div
            className={`${lovelaceRegular.className} text-5xl uppercase text-white`}
          >
            Madrid
          </div>
          <div className="text-white">
            P.º de Colombia, Retiro, 28009 Madrid
          </div>
        </div>

        <div className="flex flex-col">
          <a href="https://javiervelilla.com" className="text-slate-400">
            javiervelilla.es
          </a>
          <a href="tel:+34600000000" className="text-slate-400">
            +34 600 00 00 00
          </a>
          <a href="mailto:javiervelilla@gmail.com" className="text-slate-400">
            javiervelilla@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <div className="uppercase text-white">Social Network</div>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/javier.velilla"
              className="flex h-10 w-10 items-center justify-center text-white"
            >
              <SiInstagram size={24} />
            </a>
            <a
              href="https://facebook.com/javier.velilla"
              className="flex h-10 w-10 items-center justify-center text-white"
            >
              <SiFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-72">
        <Image
          alt="Retiro"
          fill
          style={{ objectFit: "cover" }}
          priority
          src="/monumento-leones-parque-retiro-javier-velilla.jpg"
        />

        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#0e1822] to-transparent"></div>

        <div className="absolute bottom-0 left-0 z-10 px-8 py-4 text-sm text-white">
          © {new Date().getFullYear()} Javier Velilla. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export { Footer };
