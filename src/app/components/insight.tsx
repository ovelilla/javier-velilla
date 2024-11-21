"use client";

// Vendors
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
import Image from "next/image";

const Insight = () => {
  // const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  // });
  // const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  console.log(scrollY);

  return (
    <section className="flex flex-col gap-8 bg-[#121d29] px-6 py-8">
      <div className="relative aspect-[5/5] overflow-hidden">
        {/* <motion.div
          className="absolute left-1/2 top-1/2 h-[130%] w-[130%] overflow-hidden [translate:-50%-50%]"
          style={{ y: yImage }}
        >
          <div className="absolute inset-0 z-10 bg-black/20"></div> */}

        <Image
          alt="Retiro"
          fill
          style={{ objectFit: "cover" }}
          priority
          src="/javier-velilla-pintando-estudio.jpg"
          className="rounded-full"
        />
        {/* {/* </motion.div> */}
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="flex flex-col font-noto text-[24px] leading-[1.3] text-white">
          El otro lado de la mirada
        </h2>
        <p className="hyphens-auto text-[16px] font-light leading-[1.5] text-white">
          Hay narraciones secretas e íntimas en la pintura de Javier Velilla.
          Sus cuadros están habitados por el eco de la búsqueda de algún
          horizonte irrepetible, y poseen la certeza que imprime esa soledad del
          viajero que se rinde a la belleza y rescata para otro esa ciudad
          inmortal, ese equilibrio de color, esa emoción que no se cuenta y solo
          puede percibirse.
        </p>
        <p className="hyphens-auto text-[16px] font-light leading-[1.5] text-white">
          Sus pinturas poseen una buena dosis de generosidad disimulada.
          Apropiarse de la belleza, recordarla incorrupta para finalmente
          plasmarla en un lienzo no es un acto gratuito para el alma. El
          aislamiento y la disciplina de su pulso, me obligan a pensar en el
          tiempo, en ese que él detiene para devolvernos el único horizonte, el
          momento mágico de esa luz imposible, la levedad de un aire que se
          convierte en un sutil fondo para entender el realismo de quien habla
          al otro lado de la mirada.
        </p>
        <cite className="scale-y-90 self-end text-lg font-light uppercase leading-[1.5] text-white">
          Elena Moreno
        </cite>
      </div>
    </section>
  );
};

export { Insight };
