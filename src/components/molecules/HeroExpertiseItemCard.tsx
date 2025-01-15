import clsx from "clsx";
import HeroExpertiseItem from "../atoms/HeroExpertiseItem";

type HeroExpertiseItemCardProps = {
  className?: string;
};

const HeroExpertiseItemCard = (props: HeroExpertiseItemCardProps) => {
  const { className } = props;

  const heroExpertiseItemProps = [
    { totalNumber: "20.000K +", category: "SKU" },
    { totalNumber: "1.017K +", category: "BPOM Certified Products" },
    { totalNumber: "600 +", category: "Brands" },
  ];

  return (
    <div
      className={clsx("p-4 flex flex-col bg-white mt-1 shadow-2xl", className)}
    >
      {heroExpertiseItemProps.map((item, index) => (
        <HeroExpertiseItem
          totalNumber={item.totalNumber}
          category={item.category}
          key={index}
        />
      ))}
    </div>
  );
};

export default HeroExpertiseItemCard;
