const backgroundColors = {
  primary: "#0e1822",
  secondary: "#aa580d",
} as const;

type SectionProps = {
  backgroundColor?: keyof typeof backgroundColors;
  children: React.ReactNode;
  className?: string;
  paddingX?: boolean;
  paddingY?: boolean;
  tag?: keyof JSX.IntrinsicElements;
};

const Section = ({
  backgroundColor = "primary",
  children,
  className = "",
  paddingX = true,
  paddingY = true,
  tag: Tag = "section",
}: SectionProps) => {
  return (
    <Tag
      className={`${paddingX ? "px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40" : ""} ${paddingY ? "py-12 sm:py-16 md:py-24 lg:py-36 xl:py-44 2xl:py-52" : ""} bg-[${backgroundColors[backgroundColor]}] ${className}`}
    >
      {children}
    </Tag>
  );
};

export { Section };
