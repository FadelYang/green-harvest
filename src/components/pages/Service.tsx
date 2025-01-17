import LastBannerSection from '../organism/LastBannerSection';
import ProductAvailableSection from '../organism/ProductAvailableSection';
import ProductSection from '../organism/ProductSection';
import ServiceHeroSection from '../organism/ServiceHeroSection';
import MainTemplate from "../templates/MainTemplate";


const Service = () => {
  return (
    <MainTemplate>
      <ServiceHeroSection />
      <ProductSection />
      <ProductAvailableSection />
      <LastBannerSection />
    </MainTemplate>
  );
};

export default Service;
