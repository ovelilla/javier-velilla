"use client";

// Vendors
import localFont from "next/font/local";
import Image from "next/image";
// Components
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

const menoBannerCondensedLight = localFont({
  src: "../fonts/meno-banner-condensed-light.woff2",
});
const menoBannerLight = localFont({
  src: "../fonts/meno-banner-light.woff2",
});

const Insight = () => {
  return (
    <Section className="pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0">
      <Container>
        <Title tag="h2" className="text-center">
          El Pintor
        </Title>

        <div className="flex flex-col gap-12 lg:flex-row xl:gap-16 2xl:gap-28">
          <div className="flex basis-[50%] flex-col">
            <div className="relative aspect-[4/3] lg:aspect-[4/4]">
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

          <div className="flex basis-[60%] flex-col gap-12 lg:gap-16 2xl:gap-20">
            <blockquote
              className={`text-2xl text-[#bbcbdc] lg:order-2 lg:max-w-3xl 2xl:text-3xl ${menoBannerLight.className}`}
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
              mirada.&quot;
            </blockquote>

            <div className="flex flex-col gap-2 lg:order-1">
              <h3
                className={`flex flex-col text-5xl uppercase text-[#bbcbdc] md:text-4xl xl:text-6xl ${menoBannerCondensedLight.className}`}
              >
                El otro lado de la mirada
              </h3>

              <cite
                className={`text-2xl not-italic text-[#bbcbdc] md:text-xl xl:text-3xl ${menoBannerCondensedLight.className}`}
              >
                Por Elena Moreno
              </cite>
            </div>
          </div>
        </div>

        <Button
          className="lg:mt-16 lg:self-center"
          color="primary"
          href="/biografia"
        >
          Conoce al Pintor
        </Button>
      </Container>
    </Section>
  );
};

export { Insight };
