// Vendors
import localFont from "next/font/local";

const menoBannerCondensedLight = localFont({
  src: "../../../app/fonts/meno-banner-condensed-light.woff2",
});

const colors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

type TextareaProps = {
  className?: string;
  color?: keyof typeof colors;
  error?: string;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  value?: string;
};

const Textarea = ({
  className = "",
  color = "primary",
  error,
  id,
  name,
  onChange,
  rows = 4,
  value,
  ...rest
}: TextareaProps) => {
  return (
    <textarea
      className={`flex items-center border-b ${error ? `border-red-800` : `border-[${colors[color]}]`} bg-transparent p-4 text-xl text-[${colors[color]}] placeholder:text-[${colors[color]}] focus:border-0 focus:outline-none focus:ring-1 ${error ? `focus:ring-red-800` : `focus:ring-[${colors[color]}]`} md:text-2xl xl:text-3xl ${menoBannerCondensedLight.className} ${className}`}
      id={id}
      name={name}
      onChange={onChange}
      rows={rows}
      value={value}
      {...rest}
    />
  );
};

export { Textarea };
