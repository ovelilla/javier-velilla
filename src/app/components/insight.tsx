"use client";

// Vendors
import localFont from "next/font/local";
// // import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
import Image from "next/image";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});
const menoBannerLight = localFont({
  src: "../fonts/meno-banner-light.woff2",
});

const Insight = () => {
  return (
    <section className="relative flex flex-col gap-16 bg-[#0e1822] px-6 py-32">
      <div className="flex max-w-screen-2xl flex-col gap-6 md:gap-12 lg:flex-row lg:gap-16 xl:gap-20 2xl:gap-48">
        <h2
          className={`flex flex-col text-center text-6xl uppercase text-[#bbcbdc] md:mb-4 md:text-4xl xl:text-5xl ${menoBannerCondensedLight.className}`}
        >
          El Pintor
        </h2>

        <div className="flex flex-col gap-24 lg:flex-row">
          <div className="flex basis-1/2 flex-col">
            <div className="relative aspect-square">
              <Image
                alt="Retiro"
                fill
                style={{ objectFit: "cover" }}
                priority
                src="/javier/javier-000.jpg"
                className=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-16 px-4">
            <blockquote
              className={`text-center text-2xl italic text-[#bbcbdc] md:text-xl xl:text-2xl ${menoBannerLight.className}`}
            >
              &quot;Hay narraciones secretas e íntimas en la pintura de Javier
              Velilla. Sus cuadros están habitados por el eco de la búsqueda de
              algún horizonte irrepetible, y poseen la certeza que imprime esa
              soledad del viajero que se rinde a la belleza y rescata para otro
              esa ciudad inmortal, ese equilibrio de color, esa emoción que no
              se cuenta y solo puede percibirse. Sus pinturas poseen una buena
              dosis de generosidad disimulada. Apropiarse de la belleza,
              recordarla incorrupta para finalmente plasmarla en un lienzo no es
              un acto gratuito para el alma. El aislamiento y la disciplina de
              su pulso, me obligan a pensar en el tiempo, en ese que él detiene
              para devolvernos el único horizonte, el momento mágico de esa luz
              imposible, la levedad de un aire que se convierte en un sutil
              fondo para entender el realismo de quien habla al otro lado de la
              mirada&quot;.
            </blockquote>

            <div className="flex flex-col gap-2">
              <h3
                className={`flex flex-col text-5xl uppercase text-[#bbcbdc] md:mb-4 md:text-4xl xl:text-5xl ${menoBannerCondensedLight.className}`}
              >
                El otro lado de la mirada
              </h3>

              <cite
                className={`text-2xl not-italic text-[#bbcbdc] md:text-xl xl:text-2xl ${menoBannerCondensedLight.className}`}
              >
                Por Elena Moreno
              </cite>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 transform bg-[#bbcbdc] opacity-20" />
    </section>
  );
};

export { Insight };
