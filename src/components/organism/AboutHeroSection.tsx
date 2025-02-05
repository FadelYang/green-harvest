import { Trans } from "react-i18next";
import { TranslationProps } from "../../types/types";
import Button from "../atoms/Button";
import aboutHeroImage from "/img/about-hero-image.png";
import aboutHeroImageResponsive from "/img/about-hero-image-responsive.png";

const AboutHeroSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="xl:px-24 p-6 pt-[40px] max-w-[1444px] mx-auto flex flex-col gap-[60px] xl:pb-36 pb-[72px]">
        <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-6">
          <div className="flex flex-col xl:gap-8 gap-6">
            <h1 className="text-slate-800 font-medium xl:text-[44px] text-[32px] max-w-[517px] leading-[42px] tracking-[-1.28px]">
              {t("aboutUs.hero.header")}
            </h1>
            <div className='hidden xl:block'>
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
          <div className='xl:hidden block'>
              <Button variant="primary-button" className='w-full sm:w-auto'>{t("aboutUs.hero.consultNowButton")}</Button>
            </div>
        </div>
        <div>
          <img src={aboutHeroImage} alt="" className='sm:block hidden'/>
          <img src={aboutHeroImageResponsive} alt="" className='block sm:hidden'/>
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
