"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const { scrollY } = useScroll();

  // const yImage = useTransform(scrollY, [0, 600], [0, -60]);
  const ySpan1 = useTransform(scrollY, [0, 500], [0, -300]);
  const ySpan2 = useTransform(scrollY, [0, 500], [0, -250]);
  const ySpan3 = useTransform(scrollY, [0, 500], [0, -200]);
  // const opacitySpan1 = useTransform(scrollY, [0, 200], [1, 0]);
  // const opacitySpan2 = useTransform(scrollY, [0, 200], [1, 0]);
  // const opacitySpan3 = useTransform(scrollY, [0, 200], [1, 0]);
  // const xText1 = useTransform(scrollY, [0, 600], [0, -100]);
  // const xText2 = useTransform(scrollY, [0, 600], [0, -100]);
  // const opacityText1 = useTransform(scrollY, [0, 200], [1, 0]);
  // const opacityText2 = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="flex h-[calc(100vh-7rem)] flex-col bg-[#0e1822] sm:h-[calc(100dvh-8rem)] md:h-[calc(100dvh-9rem)] xl:h-[calc(100dvh-9rem+200px)]">
      <div className="md relative h-20 shrink-0 sm:h-24 md:h-28 lg:h-36 xl:h-44 2xl:h-52">
        <div className="absolute top-0 z-30 flex h-[calc(100vh-7rem)] w-full flex-col sm:h-[calc(100dvh-8rem)] md:h-[calc(100dvh-9rem)]">
          <div className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
            <h1 className="flex flex-col font-noto text-5xl uppercase leading-[1.2] text-white sm:text-6xl sm:leading-[1.2] md:text-7xl md:leading-[1.1] lg:text-8xl lg:leading-[1.1] xl:text-9xl xl:leading-[1] 2xl:text-9xl 2xl:leading-[1]">
              <motion.span className="self-start" style={{ y: ySpan1 }}>
                J. Javier
              </motion.span>
              <motion.span
                className="self-start sm:ml-44 md:ml-56 lg:ml-72 xl:ml-96 2xl:ml-[28rem]"
                style={{ y: ySpan2 }}
              >
                Velilla
              </motion.span>
              <motion.span className="self-start" style={{ y: ySpan3 }}>
                Aguilar
              </motion.span>
            </h1>
          </div>

          <div className="mt-auto flex justify-end overflow-hidden">
            <div className="flex items-end w-[90%] flex-col gap-4 p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 2xl:p-28">
              <div
                className="text-2xl uppercase text-white md:text-3xl xl:text-4xl"
                // style={{ x: xText1 }}
              >
                NOVIEMBRE 28 - DICIEMBRE 29
              </div>

              <div
                className="text-xl uppercase text-white md:text-2xl xl:text-3xl"
                // style={{ x: xText2 }}
              >
                <p>
                  Exposición de pintura en Casa de Vacas del madrileño Parque
                  del Buen Retiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-full items-center justify-center overflow-hidden">
        {/* <motion.div
          className="absolute left-1/2 top-1/2 h-[120%] w-[120%] overflow-hidden [translate:-50%-50%] md:h-[110%] md:w-[110%] lg:h-[110%] lg:w-[110%]"
          style={{ y: yImage }}
        > */}
        <Image
          alt="Retiro"
          fill
          style={{ objectFit: "cover" }}
          priority
          src="/monumento-leones-parque-retiro-javier-velilla.jpg"
        />
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export { Hero };
