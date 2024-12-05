// Vendors
import React from "react";
import localFont from "next/font/local";
// Components
import { ContactComponent } from "@/components/contact/contact.component";
import { Painting } from "@/components/painting";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});

const Contact = () => {
  return (
    <section
      className="relative flex flex-col gap-12 bg-[#f5efe0] px-6 py-32 sm:px-8 md:gap-16 md:px-12 md:text-4xl lg:flex-row lg:gap-20 lg:px-16 lg:py-36 xl:px-24 xl:py-48 2xl:gap-48 2xl:px-40 2xl:py-52"
      id="contacto"
    >
      <div className="order-2 basis-1/2 lg:order-1">
        <Painting
          alt="Foro Romano"
          aspectRatio="aspect-[4/3]"
          captionDescription="100 x 100 cm - Acrílico sobre lienzo"
          captionTitle="Foro Romano"
          src="/galeria/imagen-081.jpg"
        />
      </div>

      <div className="order-1 flex basis-1/2 flex-col gap-8 md:gap-12 lg:order-2">
        <h2
          className={`flex flex-col text-6xl uppercase text-[#aa580d] 2xl:text-8xl ${menoBannerCondensedLight.className}`}
        >
          Contacto
        </h2>

        <ContactComponent color="secondary" />
      </div>
    </section>
  );
};

export { Contact };
