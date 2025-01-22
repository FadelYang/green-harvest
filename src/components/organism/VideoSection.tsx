import { Trans } from 'react-i18next';
import Button from "../atoms/Button";
import arrowRight from "/img/arrowRight.svg";
import video from "/video/video.mp4";
import { TranslationProps } from '../../types/types';

const VideoSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="bg-[#EBFFF3]">
        <div className="flex flex-col gap-10 pl-24 py-36 max-w-[1444px] mx-auto">
          <div className="flex justify-between pr-24">
            <p className="text-[40px] font-medium leading-[50px] w-[611px]">
              {t("home.video.header")}
            </p>
            <div className="w-[530px] flex flex-col gap-4">
              <p className="text-slate-800 font-normal">
                <Trans
                  i18nKey={"home.video.subHeader"}
                  components={{ bold: <span className="font-bold" /> }}
                />
              </p>
              <div className="flex justify-start self-start">
                <Button
                  paddingSize="px-6 py-4"
                  className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
                >
                  {t('home.video.exploreOurProfileButton')} <img src={arrowRight} alt="" />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full h-full pr-24 z-20">
            <video width="100%" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="relative">
            <div className="absolute right-0 -mt-24 z-10 w-[524px] h-[100px] bg-yellow-500 opacity-80"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
