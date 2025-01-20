import AboutHeroSection from '../organism/AboutHeroSection';
import AboutOurGallery from '../organism/AboutOurGallery';
import AboutOurStorySection from '../organism/AboutOurStorySection';
import LastBannerSection from '../organism/LastBannerSection';
import MainTemplate from '../templates/MainTemplate';

const About = () => {
  return (
    <MainTemplate>
      <AboutHeroSection />
      <AboutOurStorySection />
      <AboutOurGallery />
      <LastBannerSection />
    </MainTemplate>
  )
}

export default About