// Vendors
import localFont from "next/font/local";

const menoBannerCondensedLight = localFont({
  src: "../../../app/fonts/meno-banner-condensed-light.woff2",
});

const colors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

type InputProps = {
  color?: keyof typeof colors;
  className?: string;
  error?: string;
  name?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password";
  value?: string;
};

const Input = ({
  color = "primary",
  className = "",
  error,
  id,
  name,
  onChange,
  type = "text",
  value,
  ...rest
}: InputProps) => {
  return (
    <input
      className={`flex h-12 items-center border-b ${error ? `border-red-800` : `border-[${colors[color]}]`} bg-transparent px-4 text-xl text-[${colors[color]}] placeholder:text-[${colors[color]}] focus:border-0 focus:outline-none focus:ring-1 ${error ? `focus:ring-red-800` : `focus:ring-[${colors[color]}]`} md:text-2xl xl:h-16 xl:text-3xl ${menoBannerCondensedLight.className} ${className}`}
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      {...rest}
    />
  );
};

export { Input };
