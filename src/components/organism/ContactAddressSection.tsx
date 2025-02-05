import { TranslationProps } from "../../types/types";
import ContactMapSectionTemplate from "../molecules/ContactMapSectionTemplate";

const ContactAddressSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex flex-col gap-36 max-w-[1444px] mx-auto xl:px-24 px-6">
        <ContactMapSectionTemplate country="indonesia" t={t} />
        <ContactMapSectionTemplate country="malaysia" t={t} />
      </div>
    </>
  );
};

export default ContactAddressSection;
