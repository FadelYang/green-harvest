import Button from "../atoms/Button";
import HeaderSection from "../atoms/HeaderSection";
import HeroExpertiseItemCard from "../molecules/HeroExpertiseItemCard";
import HeroMaklonExpertiseCardList from "../molecules/HeroMaklonExpertiseCardList";
import arrowRight from "/img/arrowRight.svg";
import heroImage from "/img/hero-image.png";
import { useTranslationContext } from '../../context/TranslationContext';

const HeroSection = () => {
  const { t } = useTranslationContext();

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] pb-[54px] overflow-hidden max-w-[1444px] mx-auto">
        {/* main hero content */}
        <div className="flex justify-between px-24 z-10">
          <div className="flex flex-col gap-8 max-w-[731px]">
            <h1 className="text-[44px] font-[500] text-slate-800">
              {t("navbar.valuedClients")}
            </h1>
            <h2 className="text-base font-normal text-slate-500">
              Specializing in the production of high-quality, private-label
              goods, we offer tailored manufacturing solutions to meet your
              business needs.
            </h2>
            <div className="z-10">
              <Button variant="primary-button">Consult Now!</Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Button
              paddingSize="px-2 py-4"
              className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
            >
              Explore Our Expertise <img src={arrowRight} alt="" />
            </Button>
            <HeroExpertiseItemCard className="z-10" />
          </div>
        </div>
        {/* image container */}
        <div className="-mt-[150px]">
          <div className="pl-14">
            <div className="relative w-screen max-w-none h-[400px] overflow-hidden p-4">
              <img
                src={heroImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="-mt-72 w-[100px] h-[336px] opacity-80 bg-yellow-500"></div>
        </div>
        {/* expertise section container */}
        <div className="px-24 mt-4 flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <HeaderSection
              title="OUR MAKLON EXPERTISE"
              subTitle="We are not just producing your products, but also helping you
                build your product from scratch"
            />
            <div>
              <HeroMaklonExpertiseCardList />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div>
              <Button variant="primary-button">Consult Now!</Button>
            </div>
            <div>
              <Button
                paddingSize="px-6 py-4"
                className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
              >
                View More Our Expertise <img src={arrowRight} alt="" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
