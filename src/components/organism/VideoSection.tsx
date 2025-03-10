import { Trans } from "react-i18next";
import Button from "../atoms/Button";
import arrowRight from "/img/arrowRight.svg";
import { TranslationProps } from "../../types/types";
import { useVideoAutoPlayback } from "../../hooks/useVideoAutoPlayback";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';

const VideoSection = (props: TranslationProps) => {
  const { t } = props;
  const videoSrc = "/video/index.m3u8";
  const [containerRef, videoRef] = useVideoAutoPlayback(videoSrc, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const hiddenButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Automatically "click" the hidden button when the page loads
    if (hiddenButtonRef.current) {
      hiddenButtonRef.current.click();
    }
  }, []);

  return (
    <>
      <div className="bg-[#EBFFF3]">
        <div className="flex flex-col gap-10 xl:pl-24 pl-0 xl:py-36 py-[72px] max-w-[1444px] mx-auto">
          <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-6 xl:pr-24 pr-0">
            <p className="xl:text-[40px] text-2xl font-medium xl:leading-[50px] leading-[34px] xl:w-[611px] px-6 xl:px-0">
              {t("home.video.header")}
            </p>
            <div className="xl:w-[530px] flex flex-col xl:gap-4 gap-6">
              <p className="text-slate-800 font-normal leading-[26px] text-base px-6 xl:px-0">
                <Trans
                  i18nKey={"home.video.subHeader"}
                  components={{ bold: <span className="font-bold" /> }}
                />
              </p>
              <div className="flex justify-start self-start w-full px-6">
                <Link to={"/about"}>
                  <Button
                    paddingSize="px-6 py-4"
                    className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26] xl:justify-start justify-center w-full xl:w-auto"
                  >
                    {t("home.video.exploreOurProfileButton")}{" "}
                    <img src={arrowRight} alt="" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full xl:pr-24 xl:px-0 px-6 z-30"
            ref={containerRef}
          >
            <video width="100%" ref={videoRef} preload='auto' muted={true} controls>
            <source type="application/x-mpegURL" />
            </video>
          </div>
          <div className="relative">
            <div className="absolute right-0 xl:-mt-24 -mt-16 z-10 xl:w-[524px] w-[150px] xl:h-[100px] h-[42px] bg-yellow-500 opacity-80"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
