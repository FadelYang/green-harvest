import { TranslationProps } from "../../types/types";
import aboutOurStoryImage1 from "/img/about-our-story-image-1.webp";
import aboutOurStoryImage2 from "/img/about-our-story-image-2.webp";
import aboutOurStoryImage3 from "/img/about-our-story-image-3.webp";
import aboutOurStoryImage4 from "/img/about-our-story-image-4.webp";
import aboutOurStoryImage5 from "/img/about-our-story-image-5.webp";
import aboutOurStoryImage6 from "/img/about-our-story-image-6.webp";
import aboutOurStoryImage7 from "/img/about-our-story-image-7.webp";

import aboutOurStoryImage2Responsive from "/img/about-our-story-image-2-responsive.webp";
import aboutOurStoryImage3Responsive from "/img/about-our-story-image-3-responsive.webp";
import aboutOurStoryImage4Responsive from "/img/about-our-story-image-4-responsive.webp";
import aboutOurStoryImage5Responsive from "/img/about-our-story-image-5-responsive.webp";
import aboutOurStoryImage6Responsive from "/img/about-our-story-image-6-responsive.webp";
import aboutOurStoryImage7Responsive from "/img/about-our-story-image-7-responsive.webp";

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
            <img src={aboutOurStoryImage1} alt="" loading="lazy" />
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
              loading="lazy"
            />
            <img
              src={aboutOurStoryImage2Responsive}
              alt=""
              className="max-w-full sm:hidden block flex-grow"
              loading="lazy"
            />
            <img
              src={aboutOurStoryImage3}
              alt=""
              className="max-w-full xl:max-w-[260px] 2xl:max-w-[300px] sm:block hidden"
              loading="lazy"
            />
            <img
              src={aboutOurStoryImage3Responsive}
              alt=""
              className="max-w-full sm:hidden block flex-grow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-4 xl:px-24 px-6 max-w-[1444px] mx-auto xl:pb-36 pb-[72px]">
        <div>
          <img
            src={aboutOurStoryImage4}
            alt=""
            className="xl:block hidden"
            loading="lazy"
          />
          <img
            src={aboutOurStoryImage4Responsive}
            alt=""
            className="xl:hidden block w-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={aboutOurStoryImage5}
            alt=""
            className="xl:block hidden"
            loading="lazy"
          />
          <img
            src={aboutOurStoryImage5Responsive}
            alt=""
            className="xl:hidden block"
            loading="lazy"
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
                loading="lazy"
              />
              <img
                src={aboutOurStoryImage6Responsive}
                alt=""
                className="xl:hidden block flex-grow"
              />
              <img
                src={aboutOurStoryImage7}
                alt=""
                className="max-w-full xl:max-w-[272px] 2xl:max-w-[300px] xl:block hidden"
                loading="lazy"
              />
              <img
                src={aboutOurStoryImage7Responsive}
                alt=""
                className="xl:hidden block flex-grow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurStorySection;
