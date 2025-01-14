
import FeatureSection from '../organism/FeatureSection';
import HeroSection from '../organism/HeroSection';
import MainTemplate from "../templates/MainTemplate";


const Home = () => {
  return (
    <MainTemplate>
      <main className="">
        <HeroSection />
        <FeatureSection />
      </main>
    </MainTemplate>
  );
};

export default Home;
