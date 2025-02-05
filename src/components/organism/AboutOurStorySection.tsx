import { TranslationProps } from "../../types/types";
import aboutOurStoryImage1 from "/img/about-our-story-image-1.png";
import aboutOurStoryImage2 from "/img/about-our-story-image-2.png";
import aboutOurStoryImage3 from "/img/about-our-story-image-3.png";
import aboutOurStoryImage4 from "/img/about-our-story-image-4.png";
import aboutOurStoryImage5 from "/img/about-our-story-image-5.png";
import aboutOurStoryImage6 from "/img/about-our-story-image-6.png";
import aboutOurStoryImage7 from "/img/about-our-story-image-7.png";

import aboutOurStoryImage2Responsive from "/img/about-our-story-image-2-responsive.png";
import aboutOurStoryImage3Responsive from "/img/about-our-story-image-3-responsive.png";
import aboutOurStoryImage4Responsive from "/img/about-our-story-image-4-responsive.png";
import aboutOurStoryImage5Responsive from "/img/about-our-story-image-5-responsive.png";
import aboutOurStoryImage6Responsive from "/img/about-our-story-image-6-responsive.png";
import aboutOurStoryImage7Responsive from "/img/about-our-story-image-7-responsive.png";

const AboutOurStorySection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex flex-col xl:flex-row xl:gap-[72px] xl:pb-36 pb-[72px] xl:px-24 px-6 max-w-[1444px] mx-auto">
        <div className="flex flex-col gap-2 xl:pb-0 pb-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-slate-800 text-2xl font-medium">
              {t("aboutUs.ourStory.header")}
            </h1>
            <img src={aboutOurStoryImage1} alt="" />
          </div>
          <p className="text-slate-500 text-[16px] leading-[26px]">
            Our manufacturing facility
          </p>
        </div>
        <div className="max-w-[614px] flex flex-col gap-5">
          <article className="flex flex-col gap-4">
            <h1 className="our-story-title">
              {t("aboutUs.ourStory.story1.title")}
            </h1>
            <p className="first-letter:leading-[50px] first-letter:text-slate-800 first-letter:text-[66px] first-letter:font-semibold first-letter:mr-2 first-letter:float-left text-slate-500 text-base leading-[26px]">
              {t("aboutUs.ourStory.story1.body.1")}
            </p>
            <p className="text-slate-500 text-base leading-[26px]">
              {t("aboutUs.ourStory.story1.body.2")}
            </p>
            <p className="text-slate-500 text-base leading-[26px]">
              {t("aboutUs.ourStory.story1.body.3")}
            </p>
          </article>
          <div className="flex gap-4">
            <img
              src={aboutOurStoryImage2}
              alt=""
              className="max-w-full xl:max-w-[430px] 2xl:max-w-[472px] sm:block hidden"
            />
            <img
              src={aboutOurStoryImage2Responsive}
              alt=""
              className="max-w-full sm:hidden block"
            />
            <img
              src={aboutOurStoryImage3}
              alt=""
              className="max-w-full xl:max-w-[260px] 2xl:max-w-[300px] sm:block hidden"
            />
            <img
              src={aboutOurStoryImage3Responsive}
              alt=""
              className="max-w-full sm:hidden block"
            />
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-4 xl:px-24 px-6 max-w-[1444px] mx-auto xl:pb-36 pb-[72px]">
        <div>
          <img src={aboutOurStoryImage4} alt="" className="xl:block hidden" />
          <img
            src={aboutOurStoryImage4Responsive}
            alt=""
            className="xl:hidden block w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img src={aboutOurStoryImage5} alt="" className="xl:block hidden" />
          <img
            src={aboutOurStoryImage5Responsive}
            alt=""
            className="xl:hidden block"
          />
          <div className="max-w-[614px] flex flex-col gap-5">
            <article className="flex flex-col gap-4">
              <h1 className="our-story-title">
                {t("aboutUs.ourStory.story2.title")}
              </h1>
              <p className="first-letter:leading-[50px] first-letter:text-slate-800 first-letter:text-[66px] first-letter:font-semibold first-letter:mr-2 first-letter:float-left text-slate-500 text-base leading-[26px]">
                {t("aboutUs.ourStory.story2.body.1")}
              </p>
              <p className="text-slate-500 text-base leading-[26px]">
                {t("aboutUs.ourStory.story2.body.2")}
              </p>
              <p className="text-slate-500 text-base leading-[26px]">
                {t("aboutUs.ourStory.story2.body.3")}
              </p>
              <p className="text-slate-500 text-base leading-[26px]">
                {t("aboutUs.ourStory.story2.body.4")}
              </p>
              <h1 className="our-story-title">
                {t("aboutUs.ourStory.story3.title")}
              </h1>{" "}
              <p className="text-slate-500 text-base leading-[26px]">
                {t("aboutUs.ourStory.story3.body.1")}
              </p>
            </article>
            <div className="flex gap-4">
              <img
                src={aboutOurStoryImage6}
                alt=""
                className="max-w-full xl:max-w-[442px] 2xl:max-w-[472px] xl:block hidden"
              />
              <img
                src={aboutOurStoryImage6Responsive}
                alt=""
                className="xl:hidden block"
              />
              <img
                src={aboutOurStoryImage7}
                alt=""
                className="max-w-full xl:max-w-[272px] 2xl:max-w-[300px] xl:block hidden"
              />
              <img
                src={aboutOurStoryImage7Responsive}
                alt=""
                className="xl:hidden block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurStorySection;
