
import FeatureSection from '../organism/FeatureSection';
import HeroSection from '../organism/HeroSection';
import ProductSection from '../organism/ProductSection';
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
      </main>
    </MainTemplate>
  );
};

export default Home;
