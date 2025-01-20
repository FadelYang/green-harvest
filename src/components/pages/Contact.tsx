import ContactAddressSection from '../organism/ContactAddressSection';
import ContactHeaderSection from '../organism/ContactHeaderSection';
import LastBannerSection from '../organism/LastBannerSection';
import MainTemplate from '../templates/MainTemplate';

const Contact = () => {
  return (
    <MainTemplate>
      <ContactHeaderSection />
      <ContactAddressSection />
      <LastBannerSection />
    </MainTemplate>
  );
};

export default Contact;
