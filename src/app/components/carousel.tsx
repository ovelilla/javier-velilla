"use client";

// Vendors
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
// Styles
import "./embla.css";
// Hooks
import { useMediaQuery } from "../hooks/useMediaQuery";

import { ChevronsRight } from "lucide-react";

const TWEEN_FACTOR_BASE = 0.2;

const getIconSize = (isSm: boolean, isMd: boolean) => {
  if (isSm && !isMd) {
    return 28;
  }
  if (isSm && isMd) {
    return 32;
  }
  return 24;
};

const Carousel = () => {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");

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
    <section className="flex flex-col gap-12 bg-[#0c151f] py-12 sm:py-20 md:gap-16 md:py-28 lg:gap-20 lg:py-36 xl:py-48 2xl:py-40">
      <h2 className="flex flex-col px-8 font-noto text-3xl text-white sm:px-12 md:px-16 md:text-4xl lg:px-24 xl:px-32 2xl:px-48">
        Ecos del Arte
      </h2>
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
                    src="/san-simeon-siria.jpg"
                    alt="Retiro"
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
                    src="/villa-borguese.jpg"
                    alt="Retiro"
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
                    src="/monumento-leones-parque-retiro-javier-velilla.jpg"
                    alt="Retiro"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-8 sm:px-12 md:px-16 md:text-4xl lg:px-24 xl:px-32 2xl:px-48">
        <Link
          href="/galeria"
          className="flex h-12 items-center justify-center gap-2 rounded-full text-lg font-extrabold uppercase text-white sm:text-xl md:text-2xl"
        >
          Ver galería <ChevronsRight size={getIconSize(isSm, isMd)} />
        </Link>
      </div>
    </section>
  );
};

export { Carousel };
