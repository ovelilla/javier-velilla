"use client";

// Vendors
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
// Components
import { Row } from "./components/row";
import { Title } from "@/components/title";
// Constants
import { MILESTONES } from "./constants/biography.constants";

const menoBannerCondensedLight = localFont({
  src: "../../fonts/meno-banner-condensed-light.woff2",
});
const menoBannerLight = localFont({
  src: "../../fonts/meno-banner-light.woff2",
});

const Biography = () => {
  const { scrollY } = useScroll();

  const ySpan1 = useTransform(scrollY, [0, 800], [0, -200]);
  const ySpan2 = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative bg-[#f5efe0]">
      <div className="flex h-72 items-end justify-center overflow-hidden py-6 sm:h-[312px] md:h-[336px] lg:h-[360px] xl:h-[408px] 2xl:h-[456px]">
        <Title className="flex flex-col text-center" textColor="secondary">
          <motion.span className="leading-none" style={{ x: ySpan1 }}>
            El
          </motion.span>
          <motion.span className="leading-none" style={{ x: ySpan2 }}>
            Pintor
          </motion.span>
        </Title>
      </div>

      <div className="xl:px-24 2xl:px-40">
        <div className="relative pt-[160%] sm:pt-[100%] md:pt-[80%] lg:pt-[60%] xl:pt-[50%] 2xl:pt-[40%]">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-full xl:-bottom-40 2xl:-bottom-64">
            <Image
              alt="Retiro"
              fill
              style={{ objectFit: "cover" }}
              priority
              src="/javier/javier-003.jpg"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-32 px-6 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24 xl:px-24 xl:py-72 2xl:px-40 2xl:pt-[420px]">
        <div className="flex basis-[60%] flex-col items-center gap-12 lg:gap-16 2xl:gap-20">
          <blockquote
            className={`text-center text-2xl text-[#aa580d] lg:max-w-2xl 2xl:text-3xl ${menoBannerLight.className}`}
          >
            &quot;Hay narraciones secretas e íntimas en la pintura de Javier
            Velilla. Sus cuadros están habitados por el eco de la búsqueda de
            algún horizonte irrepetible, y poseen la certeza que imprime esa
            soledad del viajero que se rinde a la belleza y rescata para otro
            esa ciudad inmortal, ese equilibrio de color, esa emoción que no se
            cuenta y solo puede percibirse. Sus pinturas poseen una buena dosis
            de generosidad disimulada. Apropiarse de la belleza, recordarla
            incorrupta para finalmente plasmarla en un lienzo no es un acto
            gratuito para el alma. El aislamiento y la disciplina de su pulso,
            me obligan a pensar en el tiempo, en ese que él detiene para
            devolvernos el único horizonte, el momento mágico de esa luz
            imposible, la levedad de un aire que se convierte en un sutil fondo
            para entender el realismo de quien habla al otro lado de la
            mirada.&quot;
          </blockquote>

          <div className="flex flex-col gap-2">
            <h3
              className={`flex flex-col text-center text-5xl uppercase text-[#aa580d] md:text-4xl xl:text-6xl ${menoBannerCondensedLight.className}`}
            >
              El otro lado de la mirada
            </h3>

            <cite
              className={`text-center text-2xl not-italic text-[#aa580d] md:text-xl xl:text-3xl ${menoBannerCondensedLight.className}`}
            >
              Por Elena Moreno
            </cite>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6 py-12 sm:gap-4 sm:px-10 sm:py-16 md:gap-12 md:px-16 md:py-24 lg:gap-16 lg:px-24 lg:py-36 xl:gap-20 xl:px-32 xl:py-44 2xl:gap-24 2xl:px-40 2xl:py-52">
        <Title
          className="flex flex-col text-center"
          textColor="secondary"
          tag="h2"
        >
          Currículum
        </Title>

        <div className="flex flex-col gap-8 lg:gap-12 2xl:gap-16">
          {MILESTONES.map((milestone, index) => (
            <Row key={index} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Biography;
