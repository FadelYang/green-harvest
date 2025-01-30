import { TranslationProps } from "../../types/types";
import ContactAddressSection from "../organism/ContactAddressSection";
import ContactHeaderSection from "../organism/ContactHeaderSection";
import LastBannerSection from "../organism/LastBannerSection";
import MainTemplate from "../templates/MainTemplate";

const Contact = (props: TranslationProps) => {
  const { t } = props;

  return (
    <MainTemplate t={t}>
      <ContactHeaderSection t={t} />
      <ContactAddressSection t={t} />
      <LastBannerSection t={t} />
    </MainTemplate>
  );
};

export default Contact;
