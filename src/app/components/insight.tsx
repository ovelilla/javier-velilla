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

  // Scroll progress para cada elemento
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

  // Animaciones específicas
  const scaleImage = useTransform(imageScrollProgress, [0, 1], [1, 1.5]);
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
    <section className="flex flex-col gap-8 bg-[#121d29] px-6 py-12">
      <div className="relative aspect-[5/5] overflow-hidden" ref={imageRef}>
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
          />
        </motion.div>
      </div>
      <motion.h2
        className="flex flex-col font-noto text-2xl text-white"
        ref={titleRef}
        style={{ opacity: titleOpacity }}
      >
        El otro lado de la mirada
      </motion.h2>
      <motion.p
        className="hyphens-auto text-lg text-white"
        ref={paragraphRef1}
        style={{ opacity: paragraphOpacity1 }}
      >
        Hay narraciones secretas e íntimas en la pintura de Javier Velilla. Sus
        cuadros están habitados por el eco de la búsqueda de algún horizonte
        irrepetible, y poseen la certeza que imprime esa soledad del viajero que
        se rinde a la belleza y rescata para otro esa ciudad inmortal, ese
        equilibrio de color, esa emoción que no se cuenta y solo puede
        percibirse.
      </motion.p>
      <motion.p
        className="hyphens-auto text-lg text-white"
        ref={paragraphRef2}
        style={{ opacity: paragraphOpacity2 }}
      >
        Sus pinturas poseen una buena dosis de generosidad disimulada.
        Apropiarse de la belleza, recordarla incorrupta para finalmente
        plasmarla en un lienzo no es un acto gratuito para el alma. El
        aislamiento y la disciplina de su pulso, me obligan a pensar en el
        tiempo, en ese que él detiene para devolvernos el único horizonte, el
        momento mágico de esa luz imposible, la levedad de un aire que se
        convierte en un sutil fondo para entender el realismo de quien habla al
        otro lado de la mirada.
      </motion.p>
      <motion.cite
        className="self-end text-lg uppercase text-white"
        ref={citeRef}
        style={{ opacity: citeOpacity }}
      >
        Elena Moreno
      </motion.cite>
    </section>
  );
};

export { Insight };
