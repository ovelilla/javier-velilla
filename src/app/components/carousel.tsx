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

import { ChevronsRight } from "lucide-react";

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
    <section className="flex flex-col gap-12 bg-[#0c151f] py-12">
      <h2 className="flex flex-col px-8 font-noto text-2xl leading-[1.3] text-white">
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
      <Link
        href="/galeria"
        className="mx-8 flex h-12 items-center justify-center gap-2 self-end rounded-full text-lg font-extrabold uppercase text-white"
      >
        Ver galería <ChevronsRight size={24} />
      </Link>
    </section>
  );
};

export { Carousel };
// "mx-6 flex h-12 items-center justify-center gap-2 self-end rounded-full bg-[#ecb67c] px-8 uppercase text-[#0c151f] font-extrabold";
