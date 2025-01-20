import AboutHeroSection from '../organism/AboutHeroSection';
import AboutOurGallery from '../organism/AboutOurGallery';
import AboutOurStorySection from '../organism/AboutOurStorySection';
import MainTemplate from '../templates/MainTemplate';

const About = () => {
  return (
    <MainTemplate>
      <AboutHeroSection />
      <AboutOurStorySection />
      <AboutOurGallery />
    </MainTemplate>
  )
}

export default About