
import FeatureSection from '../organism/FeatureSection';
import HeroSection from '../organism/HeroSection';
import ProductSection from '../organism/ProductSection';
import MainTemplate from "../templates/MainTemplate";


const Home = () => {
  return (
    <MainTemplate>
      <main className="">
        <HeroSection />
        <FeatureSection />
        <ProductSection />
      </main>
    </MainTemplate>
  );
};

export default Home;
