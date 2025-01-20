import AboutHeroSection from '../organism/AboutHeroSection';
import AboutOurStorySection from '../organism/AboutOurStorySection';
import MainTemplate from '../templates/MainTemplate';

const About = () => {
  return (
    <MainTemplate>
      <AboutHeroSection />
      <AboutOurStorySection />
    </MainTemplate>
  )
}

export default About