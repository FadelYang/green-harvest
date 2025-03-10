import Button from "../atoms/Button";
import contactHeroImage1 from "/img/contact-hero-1.webp";
import contactHeroImage2 from "/img/contact-hero-2.webp";
import contactHeroImage1Responsive from "/img/contact-hero-image-1-responsive.webp";
import contactHeroImage2Responsive from "/img/contact-hero-image-2-responsive.webp";
import { TranslationProps } from "../../types/types";

const ContactHeaderSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="xl:py-36 pt-10 pb-[72px] xl:px-24 px-6 max-w-[1444px] mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex xl:flex-row flex-col xl:gap-8 gap-2">
            <h1 className="text-slate-800 xl:text-[44px] text-[32px] font-medium xl:leading-[54px] leading-[42px] xl:tracking-[-1.76px] tracking-[-1.28px]">
              {t("contact.hero.header")}
            </h1>
            <div className="flex items-end text-slate-500 text-lg font-medium leading-7">
              {t("contact.hero.subHeader")}
            </div>
          </div>
          <div className="flex xl:flex-row flex-col gap-4">
            <a href="https://tanya.web.id/harvest-maklon-discussion" target='_blank'>
              <Button variant="primary-button">
                {t("contact.hero.contactUsButton")}
              </Button>
            </a>
          </div>
          <div className="flex xl:flex-row flex-col gap-5">
            <img
              src={contactHeroImage1}
              alt=""
              className="xl:max-w-[856px] min-w-[775px] xl:block hidden"
              loading='lazy'
            />
            <img
              src={contactHeroImage1Responsive}
              alt=""
              className="xl:hidden block"
              loading='lazy'
            />
            <img src={contactHeroImage2} alt="" className="xl:block hidden" loading='lazy'/>
            <img
              src={contactHeroImage2Responsive}
              alt=""
              className="xl:hidden block"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeaderSection;
