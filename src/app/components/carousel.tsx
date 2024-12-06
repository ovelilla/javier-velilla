"use client";

// Vendors
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../../components/button";
// Styles
import "./embla.css";

const TWEEN_FACTOR_BASE = 0.2;

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      loop: true,
      align: "start",
    },
    [Autoplay()],
  );
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <section className="relative flex flex-col gap-12 bg-[#0e1822] py-32 md:gap-16 lg:gap-20 lg:py-36 xl:py-48 2xl:py-52">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <Image
                    width={500}
                    height={500}
                    className="embla__slide__img embla__parallax__img"
                    src="/galeria/imagen-019.jpg"
                    alt="Imagen 19"
                  />
                </div>
              </div>
            </div>

            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <Image
                    width={500}
                    height={500}
                    className="embla__slide__img embla__parallax__img"
                    src="/galeria/imagen-043.jpg"
                    alt="Imagen 43"
                  />
                </div>
              </div>
            </div>

            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <Image
                    width={500}
                    height={500}
                    className="embla__slide__img embla__parallax__img"
                    src="/galeria/imagen-024.jpg"
                    alt="Imagen 24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <Button className="self-center" color="primary" href="/galeria">
          Ver todas las pinturas
        </Button>
      </div>
    </section>
  );
};

export { Carousel };
