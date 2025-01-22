import { TranslationProps } from '../../types/types';
import AboutHeroSection from '../organism/AboutHeroSection';
import AboutOurGallery from '../organism/AboutOurGallery';
import AboutOurStorySection from '../organism/AboutOurStorySection';
import LastBannerSection from '../organism/LastBannerSection';
import MainTemplate from '../templates/MainTemplate';

const About = (props: TranslationProps) => {
  const {t} = props

  return (
    <MainTemplate t={t}>
      <AboutHeroSection />
      <AboutOurStorySection />
      <AboutOurGallery />
      <LastBannerSection t={t}/>
    </MainTemplate>
  )
}

export default About