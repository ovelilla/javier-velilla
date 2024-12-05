// Vendors
import React, { forwardRef } from "react";
import localFont from "next/font/local";

const menoBannerCondensedLight = localFont({
  src: "../app/fonts/meno-banner-condensed-light.woff2",
});

const textColors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

const titleClasses = {
  h1: "text-[72px] sm:text-[88px] md:text-[104px] lg:text-[112px] xl:text-[128px] 2xl:text-[152px] leading-[152px]",
  h2: "text-[60px] sm:text-[64px] md:text-[68px] lg:text-[72px] xl:text-[80px] 2xl:text-[96px] leading-[96px]",
  h3: "text-[48px] sm:text-[52px] md:text-[56px] lg:text-[60px] xl:text-[64px] 2xl:text-[72px] leading-[72px]",
};

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
  textColor?: keyof typeof textColors;
  children: React.ReactNode;
  tag?: keyof typeof titleClasses;
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      className = "",
      textColor = "primary",
      children,
      tag: Tag = "h1",
      ...rest
    },
    ref,
  ) => {
    return (
      <Tag
        ref={ref}
        className={`uppercase ${titleClasses[Tag]} ${menoBannerCondensedLight.className} text-[${textColors[textColor]}] ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

Title.displayName = "Title";

export { Title };
