"use client";

import React from "react";

type ImageProps = {
  alt: string;
  size: string;
  src: string;
};

const Image = ({ alt, size, src }: ImageProps) => {
  return (
    <a
      data-lg-size={size}
      data-tweet-text="lightGallery slide  2"
      className="gallery__item"
      data-src={src}
    >
      <img className="img-responsive" src={src} alt={alt} />
    </a>
  );
};

export { Image };
