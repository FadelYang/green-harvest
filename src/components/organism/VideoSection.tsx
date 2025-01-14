import Button from "../atoms/Button";
import arrowRight from "/img/arrowRight.svg";
import video from "/video/video.mp4"

const VideoSection = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-24 py-36">
        <div className="flex justify-between">
          <p className="text-[40px] font-medium leading-[50px] w-[611px]">
            We are committed to being the best partner for your brand's growth.
          </p>
          <div className="w-[530px] flex flex-col gap-4">
            <p className="text-slate-800 font-normal">
              <span className="font-bold">Greenlife Harvest Group</span> is a
              leading private label manufacturer specializing in herbal
              products, supplements, and cosmetics since 2004. Trusted by
              hundreds of brands, our products reach over 50 countries
              worldwide.
            </p>
            <div className="flex justify-start self-start">
              <Button
                paddingSize="px-6 py-4"
                className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
              >
                Explore Our Profile <img src={arrowRight} alt="" />
              </Button>
            </div>
          </div>
        </div>
        <div className='w-full h-full'>
          <video width='100%' controls>
            <source src={video} type='video/mp4'/>
          </video>
          <div className='bg-yellow-500 opacity-80 w-[524px] h-[100px] absolute -mt-14 -z-10 right-0'></div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
