import { TranslationProps } from '../../types/types';
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

const Home = (props: TranslationProps) => {
  const { t } = props;

  return (
    <MainTemplate t={t}>
      test
      {/* <HeroSection t={t} />
      <FeatureSection t={t} />
      <ProductSection t={t} />
      <VideoSection t={t} />
      <ManufacturingProcessSection t={t} />
      <SuccessStorySection t={t} /> // optional
      <ProductAvailableSection t={t} />
      <InsightHubSection t={t} />
      <QnaSection t={t} />
      <LastBannerSection t={t}/> */}
    </MainTemplate>
  );
};

export default Home;
