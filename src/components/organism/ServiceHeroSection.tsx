import serviceHeroImage1 from "/img/service-hero-1.png";
import serviceHeroImage2 from "/img/service-hero-2.png";
import serviceHeroImage3 from "/img/service-hero-3.png";
import serviceHeroImage4 from "/img/service-hero-4.png";
import Button from "../atoms/Button";
import { TranslationProps } from "../../types/types";

const ServiceHeroSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex flex-col gap-8 py-36 mx-auto max-w-[1444px]">
        <div className="px-24 flex gap-[200px]">
          <h1 className="text-slate-800 text-[44px] leading-[54px] font-medium min-w-[520px]">
            {t("service.hero.header")}
          </h1>
          <h2 className="flex items-end text-slate-500 leading-7 text-[18px] font-normal">
            {t("service.hero.subHeader")}
          </h2>
        </div>
        <div className="px-24 z-10">
          <Button variant="primary-button"> {t("service.hero.getFreeConsultationButton")}</Button>
        </div>
        <div className="flex gap-3 -mt-16 overflow-hidden">
          <img src={serviceHeroImage1} alt="" />
          <img src={serviceHeroImage2} alt="" />
          <img src={serviceHeroImage3} alt="" />
          <img src={serviceHeroImage4} alt="" />
        </div>
      </div>
    </>
  );
};

export default ServiceHeroSection;
