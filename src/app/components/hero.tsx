"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const { scrollY } = useScroll();

  const yImage = useTransform(scrollY, [0, 600], [0, -100]);
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
    <section className="flex h-[calc(100vh-7rem)] flex-col bg-[#0e1822]">
      <div className="relative h-20 shrink-0">
        <div className="absolute top-0 z-30 flex h-[calc(100dvh-7rem)] w-full flex-col">
          <div className="px-8">
            <h1 className="flex scale-y-90 flex-col font-noto text-[42px] uppercase leading-[1.2] tracking-wide text-white">
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
            <div className="flex w-[90%] flex-col gap-6 p-8 pb-14">
              <motion.div
                className="text-[20px] font-light uppercase leading-[1] text-white"
                style={{ x: xText1, opacity: opacityText1 }}
              >
                NOVIEMBRE 28 - DICIEMBRE 29
              </motion.div>

              <motion.div
                className="text-[18px] font-light uppercase leading-[1.5] text-white"
                style={{ x: xText2, opacity: opacityText2 }}
              >
                <p>
                  Exposición de pintura en la Casa de Vacas del madrileño Parque
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
          {/* <div className="absolute inset-0 z-10 bg-black/20"></div> */}

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
