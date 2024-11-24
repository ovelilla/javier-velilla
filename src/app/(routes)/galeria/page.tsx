"use client";

import { useEffect } from "react";
// import Image from "next/image";

import "./style.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
// import fjGallery from "flickr-justified-gallery";

import { Image } from "./components/image";

const Gallery = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("flickr-justified-gallery").then((module) => {
        const fjGallery = module.default;
        const gallery = document.querySelectorAll(".gallery");
        if (gallery.length > 0) {
          fjGallery(gallery, {
            itemSelector: ".gallery__item",
            rowHeight: 420,
            lastRow: "start",
            gutter: 16,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false,
          });
        }
      });
    }
  }, []);

  return (
    <section className="flex flex-col gap-8 bg-[#0e1822] pb-12 sm:pb-20 md:gap-12 md:pb-28 lg:gap-16 lg:pb-36 xl:pb-48 2xl:pb-40">
      <h2 className="flex flex-col px-8 font-noto text-3xl text-white sm:px-12 sm:text-4xl md:px-16 md:text-5xl lg:px-24 lg:text-6xl xl:px-32 xl:text-7xl 2xl:px-48 2xl:text-8xl">
        Galería
      </h2>

      <div>
        <LightGallery
          plugins={[lgZoom, lgVideo]}
          mode="lg-fade"
          pager={false}
          thumbnail={true}
          galleryId={"nature"}
          autoplayFirstVideo={false}
          elementClassNames={"gallery"}
          mobileSettings={{
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false,
          }}
        >
          <Image
            alt="sin-nombre-000"
            size="1600-829"
            src="/sin-nombre-000.jpg"
          />
          <Image
            alt="sin-nombre-001"
            size="682-685"
            src="/sin-nombre-001.jpg"
          />
          <Image
            alt="sin-nombre-002"
            size="771-481"
            src="/sin-nombre-002.jpg"
          />
          <Image
            alt="sin-nombre-003"
            size="702-502"
            src="/sin-nombre-003.jpg"
          />
          <Image
            alt="sin-nombre-004"
            size="631-592"
            src="/sin-nombre-004.jpg"
          />
          <Image
            alt="sin-nombre-006"
            size="736-566"
            src="/sin-nombre-006.jpg"
          />
          <Image
            alt="sin-nombre-007"
            size="833-1172"
            src="/sin-nombre-007.jpg"
          />
          <Image
            alt="sin-nombre-008"
            size="868-860"
            src="/sin-nombre-008.jpg"
          />
          <Image
            alt="sin-nombre-009"
            size="830-827"
            src="/sin-nombre-009.jpg"
          />
          <Image
            alt="sin-nombre-010"
            size="3762-1854"
            src="/sin-nombre-010.jpg"
          />
          <Image
            alt="sin-nombre-011"
            size="2698-1113"
            src="/sin-nombre-011.jpg"
          />
          <Image
            alt="sin-nombre-012"
            size="1702-2048"
            src="/sin-nombre-012.jpg"
          />
          <Image
            alt="sin-nombre-013"
            size="2047-1510"
            src="/sin-nombre-013.jpg"
          />
          <Image
            alt="sin-nombre-014"
            size="2048-841"
            src="/sin-nombre-014.jpg"
          />
          <Image
            alt="sin-nombre-015"
            size="2048-1583"
            src="/sin-nombre-015.jpg"
          />
          <Image
            alt="sin-nombre-016"
            size="831-586"
            src="/sin-nombre-016.jpg"
          />
          <Image
            alt="sin-nombre-017"
            size="2048-1586"
            src="/sin-nombre-017.jpg"
          />
          <Image
            alt="sin-nombre-018"
            size="1273-613"
            src="/sin-nombre-018.jpg"
          />
          <Image
            alt="sin-nombre-019"
            size="869-884"
            src="/sin-nombre-019.jpg"
          />
          <Image
            alt="sin-nombre-020"
            size="992-1396"
            src="/sin-nombre-020.jpg"
          />
          <Image
            alt="sin-nombre-021"
            size="880-609"
            src="/sin-nombre-021.jpg"
          />
        </LightGallery>
      </div>
    </section>
  );
};

export default Gallery;
