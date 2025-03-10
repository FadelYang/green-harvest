import serviceHeroImage1 from "/img/service-hero-1.webp";
import serviceHeroImage2 from "/img/service-hero-2.webp";
import serviceHeroImage3 from "/img/service-hero-3.webp";
import serviceHeroImage4 from "/img/service-hero-4.webp";
import Button from "../atoms/Button";
import { TranslationProps } from "../../types/types";

const ServiceHeroSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex flex-col gap-8 xl:py-36 pt-10 mx-auto max-w-[1444px]">
        <div className="xl:px-24 px-6 flex xl:flex-row flex-col xl:gap-[200px] gap-6">
          <h1 className="text-slate-800 xl:text-[44px] text-[32px] xl:leading-[54px] leading-[42px] tracking-[-1.28px] font-medium xl:min-w-[520px]">
            {t("service.hero.header")}
          </h1>
          <h2 className="flex items-end text-slate-500 xl:text-[18px] text-[16px] leading-7 font-normal">
            {t("service.hero.subHeader")}
          </h2>
        </div>
        <div className="px-24 z-10 xl:block hidden">
          <a href="https://tanya.web.id/harvest-maklon-discussion" target='_blank'>
            <Button variant="primary-button"> {t("service.hero.getFreeConsultationButton")}</Button>
          </a>
        </div>
        <div className="flex md:gap-3 gap-5 xl:-mt-16 overflow-hidden">
          <img loading='lazy' src={serviceHeroImage1} alt="" className='md:w-full w-[255px] md:ml:0 -ml-14'/>
          <img loading='lazy' src={serviceHeroImage2} alt="" className='md:w-full w-[227px]'/>
          <img loading='lazy' src={serviceHeroImage3} alt="" className='xl:block hidden'/>
          <img loading='lazy' src={serviceHeroImage4} alt="" className='xl:block hidden'/>
        </div>
      </div>
    </>
  );
};

export default ServiceHeroSection;
