import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { OutlineButton } from "./outline-button";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});
const menoBannerLight = localFont({
  src: "../fonts/meno-banner-light.woff2",
});

const Contact = () => {
  return (
    <section
      className="relative flex flex-col gap-12 bg-[#f5efe0] px-6 py-32 sm:px-8 md:gap-16 md:px-12 md:text-4xl lg:flex-row lg:gap-20 lg:px-16 lg:py-36 xl:px-24 xl:py-48 2xl:gap-48 2xl:px-40 2xl:py-52"
      id="contacto"
    >
      <div className="order-2 basis-1/2 lg:order-1">
        <div className="relative aspect-[4/3]">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/galeria/imagen-081.jpg"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <h3
            className={`flex flex-col text-3xl text-[#aa580d] ${menoBannerLight.className}`}
          >
            Foro Romano
          </h3>
          <p className="flex flex-col text-lg text-[#aa580d80]">
            100 x 100 cm - Acrílico sobre lienzo
          </p>
        </div>
      </div>

      <div className="order-1 flex basis-1/2 flex-col gap-8 md:gap-12 lg:order-2">
        <h2
          className={`flex flex-col text-6xl uppercase text-[#aa580d] 2xl:text-8xl ${menoBannerCondensedLight.className}`}
        >
          Contacto
        </h2>

        <form className="flex flex-col gap-6 xl:gap-12">
          <div className="flex flex-col gap-2">
            <label
              className={`text-4xl text-[#aa580d] xl:text-5xl ${menoBannerCondensedLight.className}`}
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className={`flex h-12 items-center border-b border-[#aa580d] bg-transparent px-4 text-xl text-[#aa580d] placeholder:text-[#aa580d] focus:border-0 focus:outline-none focus:ring-1 focus:ring-[#aa580d] md:text-xl xl:h-16 xl:text-2xl ${menoBannerCondensedLight.className}`}
              type="text"
              name="name"
              id="name"
              placeholder="Por favor, introduce tu nombre"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`text-4xl text-[#aa580d] xl:text-5xl ${menoBannerCondensedLight.className}`}
              htmlFor="email"
            >
              Correo
            </label>
            <input
              className={`flex h-12 items-center border-b border-[#aa580d] bg-transparent px-4 text-xl text-[#aa580d] placeholder:text-[#aa580d] focus:border-0 focus:outline-none focus:ring-1 focus:ring-[#aa580d] md:text-xl xl:h-16 xl:text-2xl ${menoBannerCondensedLight.className}`}
              type="email"
              name="email"
              id="email"
              placeholder="Por favor, introduce tu correo electrónico"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`text-4xl text-[#aa580d] xl:text-5xl ${menoBannerCondensedLight.className}`}
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className={`flex items-center border-b border-[#aa580d] bg-transparent p-4 text-xl text-[#aa580d] placeholder:text-[#aa580d] focus:border-0 focus:outline-none focus:ring-1 focus:ring-[#aa580d] md:text-xl xl:text-2xl ${menoBannerCondensedLight.className}`}
              name="message"
              id="message"
              rows={3}
              placeholder="Por favor, introduce tu mensaje"
            />
          </div>

          <OutlineButton
            className="mt-12 self-end"
            color="secondary"
            text="Enviar"
          />
        </form>
      </div>
    </section>
  );
};

export { Contact };
