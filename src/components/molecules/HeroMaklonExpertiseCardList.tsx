import HeroMaklonExpertiseCard from "../atoms/HeroMaklonExpertiseICard";
import erlenmayerFlaskIcon from "/img/erlenmayer-flask-icon.svg";
import blendingAndPackageIcon from "/img/blending-and-package-icon.svg";
import qualityCheckIcon from "/img/quality-check-icon.svg";
import labelIcon from "/img/label-icon.svg";
import { useTranslationContext } from "../../context/TranslationContext";

const HeroMaklonExpertiseCardList = () => {
  const { t } = useTranslationContext();

  const heroMaklonExpertiseItems = [
    {
      imagePath: erlenmayerFlaskIcon,
      title: t("home.hero.expertiseHero.expertiseItem.customFormulation.title"),
      description: t(
        "home.hero.expertiseHero.expertiseItem.customFormulation.description"
      ),
    },
    {
      imagePath: blendingAndPackageIcon,
      title: t(
        "home.hero.expertiseHero.expertiseItem.blendingAndPackaging.title"
      ),
      description: t(
        "home.hero.expertiseHero.expertiseItem.blendingAndPackaging.description"
      ),
    },
    {
      imagePath: qualityCheckIcon,
      title: t("home.hero.expertiseHero.expertiseItem.qualityAssurance.title"),
      description: t(
        "home.hero.expertiseHero.expertiseItem.qualityAssurance.description"
      ),
    },
    {
      imagePath: labelIcon,
      title: t(
        "home.hero.expertiseHero.expertiseItem.privateLabelSolution.title"
      ),
      description: t(
        "home.hero.expertiseHero.expertiseItem.privateLabelSolution.description"
      ),
    },
  ];

  return (
    <>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-8">
        {heroMaklonExpertiseItems.map((item) => (
          <HeroMaklonExpertiseCard
            imagePath={item.imagePath}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default HeroMaklonExpertiseCardList;
