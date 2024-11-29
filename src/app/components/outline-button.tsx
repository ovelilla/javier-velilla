"use client";

// Vendors
import localFont from "next/font/local";

const menoBannerLightItalic = localFont({
  src: "../fonts/meno-banner-light-italic.woff2",
});

const colors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

type OutlineButtonProps = {
  className?: string;
  color: keyof typeof colors;
  text: string;
};

const OutlineButton = ({ className, color, text }: OutlineButtonProps) => {
  return (
    <button
      className={`h-12 w-full border md:h-14 md:w-auto lg:h-16 xl:h-20 border-[${colors[color]}] px-6 text-xl md:px-8 md:text-2xl lg:px-10 lg:text-3xl xl:px-12 xl:text-4xl text-[${colors[color]}] ${menoBannerLightItalic.className} ${className}`}
    >
      {text}
    </button>
  );
};

export { OutlineButton };
