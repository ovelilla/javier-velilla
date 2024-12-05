"use client";

// Vendors
import { useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
// Components
import { Item } from "./components/item";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
// Constants
import { IMAGES } from "./constants/portraits.constants";
// Hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
// Styles
import "./css/style.css";

const Portraits = () => {
  const isSm = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isMd = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLg = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isXl = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    const getRowHeight = () => {
      if (isSm) return 280;
      if (isMd) return 320;
      if (isLg) return 360;
      if (isXl) return 400;
      return 240;
    };

    if (typeof window !== "undefined") {
      import("flickr-justified-gallery").then((module) => {
        const fjGallery = module.default;
        const gallery = document.querySelectorAll(".gallery");
        if (gallery.length > 0) {
          fjGallery(gallery, {
            itemSelector: ".gallery__item",
            rowHeight: getRowHeight(),
            lastRow: "start",
            gutter: 16,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false,
          });
        }
      });
    }
  }, [isSm, isMd, isLg, isXl]);

  return (
    <Section>
      <Title>Retratos</Title>

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
    </Section>
  );
};

export default Portraits;
