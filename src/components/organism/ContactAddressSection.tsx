import { TranslationProps } from "../../types/types";
import Button from "../atoms/Button";
import ContactMapSectionTemplate from "../molecules/ContactMapSectionTemplate";
import arrowRight from "/img/arrowRight.svg";

const ContactAddressSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex flex-col gap-8 max-w-[1444px] mx-auto xl:px-24 px-6">
        <a href="https://maps.app.goo.gl/9vyszBvcPFM41tmT9" target="_blank">
          <Button
            paddingSize="px-2 py-4"
            className="flex gap-3 primary-text xl:justify-start justify-center font-medium text-base border-b border-[#015F26]"
          >
            {t("contact.hero.viewOurLocationOnMaps")}
            <img src={arrowRight} alt="" className="-rotate-45" loading='lazy'/>
          </Button>
        </a>
        <div className='flex flex-col gap-36'>
          <ContactMapSectionTemplate country="indonesia" t={t} />
          <ContactMapSectionTemplate country="malaysia" t={t} />
        </div>
      </div>
    </>
  );
};

export default ContactAddressSection;
