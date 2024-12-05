// Vendors
import localFont from "next/font/local";

const menoBannerCondensedLight = localFont({
  src: "../../../fonts/meno-banner-condensed-light.woff2",
});
const menoBannerLight = localFont({
  src: "../../../fonts/meno-banner-light.woff2",
});

type RowProps = {
  year: string;
  experiences: Array<string>;
};

const Row = ({ year, experiences }: RowProps) => {
  return (
    <div className="grid grid-cols-[96px,1fr] sm:grid-cols-[128px,1fr] md:grid-cols-[160px,1fr] lg:grid-cols-[208px,1fr] xl:grid-cols-[240px,1fr] 2xl:grid-cols-[288px,1fr]">
      <div
        className={`text-3xl text-[#aa580d] lg:text-4xl 2xl:text-5xl ${menoBannerCondensedLight.className}`}
      >
        {year}
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        {experiences.map((experience, index) => (
          <div
            className={`text-2xl text-[#aa580d] lg:text-3xl 2xl:text-4xl ${menoBannerLight.className}`}
            key={index}
          >
            {experience}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Row };
