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
    <section className="relative bg-[#0e1822]">
      <div className="flex h-72 items-end justify-center overflow-hidden py-6 sm:h-[312px] md:h-[336px] lg:h-[360px] xl:h-[408px] 2xl:h-[456px]">
        <Title className="flex flex-col text-center">
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

      <div className="relative flex flex-col gap-32 bg-[#f5efe0] px-6 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24 xl:px-24 xl:py-72 2xl:px-40 2xl:pt-[420px]">
        <div className="flex basis-[60%] flex-col items-center gap-12 lg:gap-16 2xl:gap-20">
          <div className="flex flex-col gap-2">
            <cite
              className={`text-center text-2xl not-italic text-[#aa580d] md:text-xl xl:text-3xl ${menoBannerCondensedLight.className}`}
            >
              A. Calderón de Jesús: Analista & Crítico de AR
            </cite>
          </div>

          <blockquote
            className={`flex flex-col gap-4 text-center text-2xl text-[#aa580d] lg:max-w-2xl lg:gap-6 2xl:gap-8 2xl:text-3xl ${menoBannerLight.className}`}
          >
            <p>
              &quot;En el panorama artístico, siempre aparece algún artista
              dispuesto a romper los esquemas, a sabiendas de que sus obras no
              son transgresoras, tanto por su estilo y temática, sino por esa
              composición de carácter bíblico, ya que sus obras están en ese
              terreno de la búsqueda continua de lo inmortal y lo mitológico. En
              ese equilibrio se desenvuelve casi toda su obra.&quot;
            </p>
            <p>
              &quot;Teniendo en sus espectros la concepción del arte
              imaginativo, ligado a los grandes maestros como Velázquez,
              Rembrandt y Goya, todo esto bajo una referencia de admiración y
              pasión por lo que su trabajo representa. La técnica del
              claroscuro, junto con otros esquemas, transita por sus obras con
              total garantía.&quot;
            </p>
            <p>
              &quot;En su proceso creativo podemos contemplar también las
              distintas variantes que le aporta el arte actual, con referencia a
              la intervención de los ambientes urbanos, siendo en estos momentos
              el tema más concurrente por aquello de dar prioridad a la hora de
              retratar las figuras humanas.&quot;
            </p>
            <p>
              &quot;Este artista se ha destapado en los espacios artísticos como
              buen conductor del llamado arte figurativo.&quot;
            </p>
          </blockquote>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-[#f5efe0] px-6 pb-12 sm:gap-4 sm:px-10 sm:pb-16 md:gap-12 md:px-16 md:pb-24 lg:gap-16 lg:px-24 lg:pb-36 xl:gap-20 xl:px-32 xl:pb-44 2xl:gap-24 2xl:px-40 2xl:pb-52">
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
