import Button from '../atoms/Button';
import arrowRight from "/img/arrowRight.svg";

const SuccessStorySection = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-36 max-w-[1444px] mx-auto">
        <div className="flex px-24 justify-between">
          <div className="w-[355px]">
            <p className="text-slate-800 font-medium text-[40px] leading-[50px]">
              Our <br /> Success Story
            </p>
          </div>
          <div className="flex gap-8">
            <div className="w-[417px]">
              <p className="text-2xl font-normal leading-[34px]">
                For the past 20 years, we collaborate with many partner. Here
                are some of our success story
              </p>
            </div>
            <div className="flex gap-4 items-end">
              <div>
                <img src={arrowRight} alt="" className="rotate-180" />
              </div>
              <div>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pl-24">This is come content</div>
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
    </>
  );
};

export default SuccessStorySection;
