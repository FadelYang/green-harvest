import Button from "../atoms/Button";
import HeaderSection from "../atoms/HeaderSection";
import HeroExpertiseItemCard from "../molecules/HeroExpertiseItemCard";
import HeroMaklonExpertiseCardList from "../molecules/HeroMaklonExpertiseCardList";
import arrowRight from "/img/arrowRight.svg";
import heroImage from "/img/hero-image.webp";
import heroImageResponsive from "/img/hero-image-responsive.webp";
import { TranslationProps } from "../../types/types";
import { Link } from "react-router-dom";

const HeroSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      {/* Hero */}
      <section className="pt-10 xl:pt-[72px] pb-[54px] overflow-hidden max-w-[1444px] mx-auto">
        {/* main hero content */}
        <div className="flex xl:flex-row flex-col xl:justify-between px-6 xl:px-24 z-10">
          <div className="flex flex-col gap-6 xl:gap-8  xl:max-w-[760px] mt-">
            <h1 className="text-[32px] xl:text-[44px] font-[500] text-slate-800">
              {t("home.hero.header")}
            </h1>
            <h2 className="text-base font-normal text-slate-500">
              {t("home.hero.subHeader")}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="z-10">
                <a href="https://tanya.web.id/harvest-maklon-discussion" target="_blank">
                  <Button variant="primary-button" className="w-full xl:w-auto">
                    {t("home.hero.consultNowButton")}
                  </Button>
                </a>
              </div>
              <div className="text-center block xl:hidden z-20">
                <Link to={"/service"}>
                  <Button
                    paddingSize="px-2 py-4"
                    className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26] w-full xl:w-auto justify-center"
                  >
                    {t("home.hero.exploreOurExpertiseButton")}{" "}
                    <img src={arrowRight} alt="" loading='lazy'/>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col gap-5 items-center hidden xl:flex">
            <Link to={"/service"}>
              <Button
                paddingSize="px-2 py-4"
                className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
              >
                {t("home.hero.exploreOurExpertiseButton")}{" "}
                <img src={arrowRight} alt="" />
              </Button>
            </Link>
            <div className="z-10">
              <HeroExpertiseItemCard className="" />
            </div>
          </div>
        </div>
        {/* image container */}
        <div className="xl:-mt-[90px] mt-0">
          <div className="pl-6 xl:pl-14">
            <div className="relative w-screen max-w-none h-[400px] xl:mt-0 -mt-10 overflow-hidden p-4">
              <img
                src={heroImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover hidden md:block mt-20 xl:-mt-2"
              />
              <img
                src={heroImageResponsive}
                alt=""
                className="absolute inset-0 w-auto object-contain md:hidden block mt-20 md:mt-28"
              />
            </div>
          </div>
          <div className="relative flex justify-center xl:hidden">
            <div className="absolute md:-mt-32 -mt-40">
              <HeroExpertiseItemCard />
            </div>
          </div>
          <div className="xl:-mt-72 xl:w-[100px] xl:h-[336px] -mt-56 w-[48px] h-[162px] opacity-80 bg-yellow-500"></div>
        </div>
        {/* expertise section container */}
        <div className="px-6 xl:py-0 py-[72px] xl:px-24 mt-32 xl:mt-4 flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <HeaderSection
              title={t("home.hero.expertiseHero.header")}
              subTitle={t("home.hero.expertiseHero.subHeader")}
            />
            <div>
              <HeroMaklonExpertiseCardList />
            </div>
          </div>
          <div className="flex xl:flex-row flex-col justify-center gap-4">
            <div>
              <a href="https://tanya.web.id/harvest-maklon-discussion" target="_blank">
                <Button variant="primary-button" className="w-full xl:w-auto">
                  {t("home.hero.consultNowButton")}
                </Button>
              </a>
            </div>
            <div>
              <Link to={"/service"}>
                <Button
                  paddingSize="px-6 py-4"
                  className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26] w-full xl:w-auto justify-center"
                >
                  {t("home.hero.viewMoreOurExpertiseButton")}{" "}
                  <img src={arrowRight} alt="" className="xl:block hidden" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
