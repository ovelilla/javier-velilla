// Vendors
import localFont from "next/font/local";

const menoBannerCondensedLight = localFont({
  src: "../../..//app/fonts/meno-banner-condensed-light.woff2",
});

const colors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

type LabelProps = {
  color?: keyof typeof colors;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

const Label = ({
  color = "primary",
  children,
  className = "",
  htmlFor,
}: LabelProps) => {
  return (
    <label
      className={`text-3xl lg:text-4xl 2xl:text-5xl ${menoBannerCondensedLight.className} text-[${colors[color]}] ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export { Label };
