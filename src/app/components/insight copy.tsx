"use client";

// Vendors
import localFont from "next/font/local";
// // import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
import Image from "next/image";

const menoBannerLight = localFont({
  src: "../fonts/meno-banner-light.woff2",
});

const Insight = () => {
  return (
    <section className="relative flex flex-col gap-16 bg-[#0e1822] px-6 py-32">
      <div className="flex max-w-screen-2xl flex-col gap-8 md:gap-12 lg:flex-row lg:gap-16 xl:gap-20 2xl:gap-48">
        <div className="flex basis-1/2 flex-col gap-8 md:gap-10">
          <h2
            className={`flex flex-col text-4xl text-[#bbcbdc] md:mb-4 md:text-4xl xl:text-5xl ${menoBannerLight.className}`}
          >
            El otro lado de la mirada
          </h2>

          <div className="relative aspect-[4/3]">
            <Image
              alt="Retiro"
              fill
              style={{ objectFit: "cover" }}
              priority
              src="/javier/javier-000.jpg"
              className=""
            />
          </div>

          <p className="hyphens-auto text-lg text-[#bbcbdc] md:text-xl xl:text-2xl">
            Hay narraciones secretas e íntimas en la pintura de Javier Velilla.
            Sus cuadros están habitados por el eco de la búsqueda de algún
            horizonte irrepetible, y poseen la certeza que imprime esa soledad
            del viajero que se rinde a la belleza y rescata para otro esa ciudad
            inmortal, ese equilibrio de color, esa emoción que no se cuenta y
            solo puede percibirse.
          </p>
          <p className="hyphens-auto text-lg text-[#bbcbdc] md:text-xl xl:text-2xl">
            Sus pinturas poseen una buena dosis de generosidad disimulada.
            Apropiarse de la belleza, recordarla incorrupta para finalmente
            plasmarla en un lienzo no es un acto gratuito para el alma. El
            aislamiento y la disciplina de su pulso, me obligan a pensar en el
            tiempo, en ese que él detiene para devolvernos el único horizonte,
            el momento mágico de esa luz imposible, la levedad de un aire que se
            convierte en un sutil fondo para entender el realismo de quien habla
            al otro lado de la mirada.
          </p>
          <cite
            className={`self-end text-2xl text-[#bbcbdc] md:text-xl xl:text-2xl ${menoBannerLight.className}`}
          >
            Elena Moreno
          </cite>
        </div>
      </div>

      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 transform bg-[#bbcbdc] opacity-10" />
    </section>
  );
};

export { Insight };
