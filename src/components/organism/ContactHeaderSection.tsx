import arrowRight from "/img/arrowRight.svg";
import Button from "../atoms/Button";
import contactHeroImage1 from "/img/contact-hero-1.png";
import contactHeroImage2 from "/img/contact-hero-2.png";
import contactHeroImage1Responsive from "/img/contact-hero-image-1-responsive.png";
import contactHeroImage2Responsive from "/img/contact-hero-image-2-responsive.png";
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
            <a href="https://wa.me/6285210882525" target='_blank'>
              <Button variant="primary-button">
                {t("contact.hero.contactUsButton")}
              </Button>
            </a>
            <a
              href="https://www.google.com/maps/place/PABRIK+MAKLON+SERTIFIKAT+BPOM+DAN+HALAL+-+PT.+INDO+GREENLIFE+HARVEST/@-6.1658141,106.667084,17z/data=!4m10!1m2!2m1!1sindo+green+harvest!3m6!1s0x2e69f8f4e7af8bc5:0x9a220a264d0408cd!8m2!3d-6.1646789!4d106.6692973!15sChJpbmRvIGdyZWVuIGhhcnZlc3SSARdhZ3JpY3VsdHVyYWxfcHJvZHVjdGlvbuABAA!16s%2Fg%2F11ss7ds0zj?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <Button
                paddingSize="px-2 py-4"
                className="flex gap-3 primary-text xl:justify-start justify-center font-medium text-base border-b border-[#015F26]"
              >
                {t("contact.hero.viewOurLocationOnMaps")}
                <img src={arrowRight} alt="" className="-rotate-45" />
              </Button>
            </a>
          </div>
          <div className="flex xl:flex-row flex-col gap-5">
            <img
              src={contactHeroImage1}
              alt=""
              className="xl:max-w-[856px] min-w-[775px] xl:block hidden"
            />
            <img
              src={contactHeroImage1Responsive}
              alt=""
              className="xl:hidden block"
            />
            <img src={contactHeroImage2} alt="" className="xl:block hidden" />
            <img
              src={contactHeroImage2Responsive}
              alt=""
              className="xl:hidden block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeaderSection;
