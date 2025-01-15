
import FeatureSection from '../organism/FeatureSection';
import HeroSection from '../organism/HeroSection';
import ManufacturingProcessSection from '../organism/ManufacturingProcessSection';
import ProductSection from '../organism/ProductSection';
import SuccessStorySection from '../organism/SuccessStorySection';
import VideoSection from '../organism/VideoSection';
import MainTemplate from "../templates/MainTemplate";


const Home = () => {
  return (
    <MainTemplate>
      <main className="">
        <HeroSection />
        <FeatureSection />
        <ProductSection />
        <VideoSection />
        <ManufacturingProcessSection />
        <SuccessStorySection />
      </main>
    </MainTemplate>
  );
};

export default Home;
