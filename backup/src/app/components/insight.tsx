"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Insight = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);
  const citeRef = useRef(null);

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: titleScrollProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: paragraphScrollProgress1 } = useScroll({
    target: paragraphRef1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: paragraphScrollProgress2 } = useScroll({
    target: paragraphRef2,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: citeScrollProgress } = useScroll({
    target: citeRef,
    offset: ["start end", "end start"],
  });

  const scaleImage = useTransform(imageScrollProgress, [0, 1], [1.2, 1]);
  const titleOpacity = useTransform(titleScrollProgress, [0, 0.5], [0, 1]);
  const paragraphOpacity1 = useTransform(
    paragraphScrollProgress1,
    [0, 0.5],
    [0, 1],
  );
  const paragraphOpacity2 = useTransform(
    paragraphScrollProgress2,
    [0, 0.5],
    [0, 1],
  );
  const citeOpacity = useTransform(citeScrollProgress, [0, 0.5], [0, 1]);

  return (
    <section className="flex justify-center bg-[#121d29] px-8 py-12 sm:px-12 sm:py-20 md:px-16 md:py-28 lg:px-24 lg:py-36 xl:px-32 xl:py-48 2xl:px-48 2xl:py-60">
      <div className="flex max-w-screen-2xl flex-col gap-8 md:gap-12 lg:flex-row lg:gap-16 xl:gap-20 2xl:gap-48">
        <div
          className="relative aspect-[4/3] basis-1/2 overflow-hidden lg:order-2"
          ref={imageRef}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-[100%] w-[100%] overflow-hidden [translate:-50%-50%]"
            style={{ scale: scaleImage }}
          >
            <Image
              alt="Retiro"
              fill
              style={{ objectFit: "cover" }}
              priority
              src="/javier-velilla-pintando-estudio.jpg"
              className=""
            />
          </motion.div>
        </div>
        <div className="flex basis-1/2 flex-col gap-8 md:gap-10">
          <motion.h2
            className="flex flex-col font-noto text-3xl text-white md:mb-4 md:text-4xl xl:text-5xl"
            ref={titleRef}
            style={{ opacity: titleOpacity }}
          >
            El otro lado de la mirada
          </motion.h2>
          <motion.p
            className="hyphens-auto text-lg text-white md:text-xl xl:text-2xl"
            ref={paragraphRef1}
            style={{ opacity: paragraphOpacity1 }}
          >
            Hay narraciones secretas e íntimas en la pintura de Javier Velilla.
            Sus cuadros están habitados por el eco de la búsqueda de algún
            horizonte irrepetible, y poseen la certeza que imprime esa soledad
            del viajero que se rinde a la belleza y rescata para otro esa ciudad
            inmortal, ese equilibrio de color, esa emoción que no se cuenta y
            solo puede percibirse.
          </motion.p>
          <motion.p
            className="hyphens-auto text-lg text-white md:text-xl xl:text-2xl"
            ref={paragraphRef2}
            style={{ opacity: paragraphOpacity2 }}
          >
            Sus pinturas poseen una buena dosis de generosidad disimulada.
            Apropiarse de la belleza, recordarla incorrupta para finalmente
            plasmarla en un lienzo no es un acto gratuito para el alma. El
            aislamiento y la disciplina de su pulso, me obligan a pensar en el
            tiempo, en ese que él detiene para devolvernos el único horizonte,
            el momento mágico de esa luz imposible, la levedad de un aire que se
            convierte en un sutil fondo para entender el realismo de quien habla
            al otro lado de la mirada.
          </motion.p>
          <motion.cite
            className="self-end text-lg uppercase text-white md:text-xl xl:text-2xl"
            ref={citeRef}
            style={{ opacity: citeOpacity }}
          >
            Elena Moreno
          </motion.cite>
        </div>
      </div>
    </section>
  );
};

export { Insight };
