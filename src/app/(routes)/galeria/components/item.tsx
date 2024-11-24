"use client";

import React from "react";
import Image from "next/image";

type ItemProps = {
  alt: string;
  size: string;
  src: string;
};

const Item = ({ alt, size, src }: ItemProps) => {
  const width = parseInt(size.split("-")[0]);
  const height = parseInt(size.split("-")[1]);

  return (
    <a
      data-lg-size={size}
      data-tweet-text="lightGallery slide  2"
      className="gallery__item"
      data-src={src}
    >
      <Image src={src} alt={alt} width={width} height={height} loading="lazy" />
    </a>
  );
};

export { Item };
