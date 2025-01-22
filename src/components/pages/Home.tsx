import { useTranslationContext } from "../../context/TranslationContext";
import FeatureSection from "../organism/FeatureSection";
import HeroSection from "../organism/HeroSection";
import InsightHubSection from "../organism/InsightHubSection";
import LastBannerSection from "../organism/LastBannerSection";
import ManufacturingProcessSection from "../organism/ManufacturingProcessSection";
import ProductAvailableSection from "../organism/ProductAvailableSection";
import ProductSection from "../organism/ProductSection";
import QnaSection from "../organism/QnaSection";
import SuccessStorySection from "../organism/SuccessStorySection";
import VideoSection from "../organism/VideoSection";
import MainTemplate from "../templates/MainTemplate";

const Home = () => {
  const { t } = useTranslationContext();

  return (
    <MainTemplate t={t}>
      <HeroSection t={t} />
      <FeatureSection t={t} />
      <ProductSection t={t} />
      <VideoSection t={t} />
      <ManufacturingProcessSection t={t} />
      <SuccessStorySection t={t} />
      <ProductAvailableSection t={t} />
      <InsightHubSection t={t} />
      <QnaSection />
      <LastBannerSection />
    </MainTemplate>
  );
};

export default Home;
