"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const { scrollY } = useScroll();

  const yImage = useTransform(scrollY, [0, 600], [0, -60]);
  const ySpan1 = useTransform(scrollY, [0, 500], [0, -300]);
  const ySpan2 = useTransform(scrollY, [0, 500], [0, -250]);
  const ySpan3 = useTransform(scrollY, [0, 500], [0, -200]);
  const opacitySpan1 = useTransform(scrollY, [0, 200], [1, 0]);
  const opacitySpan2 = useTransform(scrollY, [0, 200], [1, 0]);
  const opacitySpan3 = useTransform(scrollY, [0, 200], [1, 0]);
  const xText1 = useTransform(scrollY, [0, 600], [0, -100]);
  const xText2 = useTransform(scrollY, [0, 600], [0, -100]);
  const opacityText1 = useTransform(scrollY, [0, 200], [1, 0]);
  const opacityText2 = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="flex h-[calc(100vh-7rem)] flex-col bg-[#0e1822] sm:h-[calc(100dvh-8rem)] md:h-[calc(100dvh-9rem)]">
      <div className="md relative h-20 shrink-0 sm:h-24 md:h-28">
        <div className="absolute top-0 z-30 flex h-[calc(100vh-7rem)] w-full flex-col sm:h-[calc(100dvh-8rem)] md:h-[calc(100dvh-9rem)]">
          <div className="px-8 sm:px-12 md:px-16">
            <h1 className="flex flex-col font-noto text-5xl uppercase leading-[1.2] text-white sm:text-6xl sm:leading-[1.2] md:text-7xl md:leading-[1.2]">
              <motion.span
                className="self-start"
                style={{ y: ySpan1, opacity: opacitySpan1 }}
              >
                J. Javier
              </motion.span>
              <motion.span
                className="self-start"
                style={{ y: ySpan2, opacity: opacitySpan2 }}
              >
                Velilla
              </motion.span>
              <motion.span
                className="self-start"
                style={{ y: ySpan3, opacity: opacitySpan3 }}
              >
                Aguilar
              </motion.span>
            </h1>
          </div>

          <div className="mt-auto overflow-hidden">
            <div className="flex w-[90%] flex-col gap-4 p-8 pb-14 sm:p-12 md:p-16">
              <motion.div
                className="text-xl uppercase text-white sm:text-2xl md:text-3xl"
                style={{ x: xText1, opacity: opacityText1 }}
              >
                NOVIEMBRE 28 - DICIEMBRE 29
              </motion.div>

              <motion.div
                className="text-xl uppercase text-white sm:text-2xl md:text-3xl"
                style={{ x: xText2, opacity: opacityText2 }}
              >
                <p>
                  Exposición de pintura en Casa de Vacas del madrileño Parque
                  del Buen Retiro.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-full items-center justify-center overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[120%] w-[140%] overflow-hidden [translate:-50%-50%]"
          style={{ y: yImage }}
        >
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/monumento-leones-parque-retiro-javier-velilla.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
