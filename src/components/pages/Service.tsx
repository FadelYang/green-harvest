import { TranslationProps } from "../../types/types";
import LastBannerSection from "../organism/LastBannerSection";
import ProductAvailableSection from "../organism/ProductAvailableSection";
import ProductSection from "../organism/ProductSection";
import ServiceHeroSection from "../organism/ServiceHeroSection";
import MainTemplate from "../templates/MainTemplate";

const Service = (props: TranslationProps) => {
  const { t } = props;

  return (
    <MainTemplate t={t}>
      <ServiceHeroSection t={t}/>
      <ProductSection t={t}/>
      <ProductAvailableSection t={t}/>
      <LastBannerSection t={t}/>
    </MainTemplate>
  );
};

export default Service;
