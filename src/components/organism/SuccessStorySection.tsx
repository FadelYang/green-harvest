import Button from "../atoms/Button";
import arrowRight from "/img/arrowRight.svg";
import Arrow from "../atoms/Arrow";
import SuccessStoryArticleList from "../molecules/SuccessStoryArticleList";
import { useTranslationContext } from "../../context/TranslationContext";

const SuccessStorySection = () => {
  const { t } = useTranslationContext();

  return (
    <>
      <div className="flex flex-col gap-10 py-36 max-w-[1444px] mx-auto">
        <div className="flex px-24 justify-between">
          <div className="w-[355px]">
            <p className="text-slate-800 font-medium text-[40px] leading-[50px]">
              {t("home.successStory.header")}
            </p>
          </div>
          <div className="flex gap-8">
            <div className="w-[417px]">
              <p className="text-2xl font-normal leading-[34px]">
                {t("home.successStory.subHeader")}
              </p>
            </div>
            <div className="flex gap-4 items-end">
              <Button
                className="bg-[#F1F5F9] rounded-full rotate-180"
                paddingSize="p-2"
              >
                <Arrow hexColor="#1E293B" />
              </Button>
              <Button className="bg-[#F1F5F9] rounded-full" paddingSize="p-2">
                <Arrow hexColor="#1E293B" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex pl-24">
          <SuccessStoryArticleList />
        </div>
        <div className="flex justify-center gap-4">
          <div>
            <Button variant="primary-button">{t('home.hero.consultNowButton')}</Button>
          </div>
          <div>
            <Button
              paddingSize="px-6 py-4"
              className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
            >
              {t('home.hero.viewMoreOurExpertiseButton')} <img src={arrowRight} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStorySection;
