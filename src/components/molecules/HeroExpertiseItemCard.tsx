import clsx from "clsx";
import HeroExpertiseItem from "../atoms/HeroExpertiseItem";
import { useTranslationContext } from "../../context/TranslationContext";

type HeroExpertiseItemCardProps = {
  className?: string;
};

const HeroExpertiseItemCard = (props: HeroExpertiseItemCardProps) => {
  const { className } = props;
  const { t } = useTranslationContext();

  const heroExpertiseItemProps = [
    { totalNumber: "20.000K +", category: t("home.hero.achievmentItem.sku") },
    { totalNumber: "1.017K +", category: t("home.hero.achievmentItem.bpom") },
    { totalNumber: "600 +", category: t("home.hero.achievmentItem.brand") },
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
