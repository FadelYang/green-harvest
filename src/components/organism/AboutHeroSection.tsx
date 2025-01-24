import { Trans } from "react-i18next";
import { TranslationProps } from "../../types/types";
import Button from "../atoms/Button";
import aboutHeroImage from "/img/about-hero-image.png";

const AboutHeroSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="px-24 pt-[72px] max-w-[1444px] mx-auto flex flex-col gap-[60px] pb-36">
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="text-slate-800 font-medium text-[44px] max-w-[517px]">
              {t("aboutUs.hero.header")}
            </h1>
            <div>
              <Button variant="primary-button">{t("aboutUs.hero.consultNowButton")}</Button>
            </div>
          </div>
          <div>
            <h2 className="text-slate-500 leading-[26px] max-w-[439px]">
              <Trans
                i18nKey={"aboutUs.hero.subHeader"}
                components={{ bold: <span className="font-bold" /> }}
              />
            </h2>
          </div>
        </div>
        <div>
          <img src={aboutHeroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
