import FeatureSection from "../organism/FeatureSection";
import HeroSection from "../organism/HeroSection";
import InsightHubSection from '../organism/InsightHubSection';
import ManufacturingProcessSection from "../organism/ManufacturingProcessSection";
import ProductAvailableSection from '../organism/ProductAvailableSection';
import ProductSection from "../organism/ProductSection";
import SuccessStorySection from "../organism/SuccessStorySection";
import VideoSection from "../organism/VideoSection";
import MainTemplate from "../templates/MainTemplate";

const Home = () => {
  return (
    <MainTemplate>
      <HeroSection />
      <FeatureSection />
      <ProductSection />
      <VideoSection />
      <ManufacturingProcessSection />
      <SuccessStorySection />
      <ProductAvailableSection />
      <InsightHubSection />
    </MainTemplate>
  );
};

export default Home;
