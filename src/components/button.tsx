"use client";

// Vendors
import localFont from "next/font/local";
import Link from "next/link";

const menoBannerLightItalic = localFont({
  src: "../app/fonts/meno-banner-light-italic.woff2",
});

const colors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  className = "",
  color = "primary",
  disabled = false,
  href,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) => {
  const baseClasses = `flex items-center justify-center h-14 w-full border md:h-16 md:w-auto lg:h-20 xl:h-24 px-8 text-2xl md:px-10 md:text-2xl lg:px-12 lg:text-3xl xl:px-16 xl:text-4xl ${menoBannerLightItalic.className} ${className}`;
  const colorClasses = `border-[${colors[color]}] text-[${colors[color]}]`;
  const disabledClasses = `opacity-50 cursor-not-allowed`;

  const classes = disabled
    ? `${baseClasses} ${disabledClasses}`
    : `${baseClasses} ${colorClasses}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
