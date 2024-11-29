"use client";

import { useEffect } from "react";

import "./css/style.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

import { Item } from "./components/item";

import { IMAGES } from "./constants/gallery.constants";

// Hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Gallery = () => {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("flickr-justified-gallery").then((module) => {
        const fjGallery = module.default;
        const gallery = document.querySelectorAll(".gallery");
        if (gallery.length > 0) {
          fjGallery(gallery, {
            itemSelector: ".gallery__item",
            rowHeight: isSm && !isMd ? 240 : isSm && isMd ? 280 : 180,
            lastRow: "start",
            gutter: 16,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false,
          });
        }
      });
    }
  }, [isSm, isMd]);

  return (
    <section className="flex flex-col gap-8 bg-[#0e1822] pb-12 sm:pb-20 md:gap-12 md:pb-28 lg:gap-16 lg:pb-36 xl:pb-48 2xl:pb-40">
      <h2 className="flex flex-col px-8 font-noto text-3xl text-white sm:px-12 sm:text-4xl md:px-16 md:text-5xl lg:px-24 lg:text-6xl xl:px-32 xl:text-7xl 2xl:px-48 2xl:text-8xl">
        Galería
      </h2>

      <div>
        <LightGallery
          plugins={[lgZoom]}
          mode="lg-fade"
          pager={false}
          thumbnail={true}
          galleryId={"nature"}
          autoplayFirstVideo={false}
          elementClassNames={"gallery"}
          mobileSettings={{
            controls: false,
            showCloseIcon: true,
            download: true,
            rotate: false,
          }}
        >
          {IMAGES.map((image) => (
            <Item key={image.id} {...image} />
          ))}
        </LightGallery>
      </div>
    </section>
  );
};

export default Gallery;
