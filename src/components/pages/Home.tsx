import Button from "../atoms/Button";
import HeroExpertiseItemCard from "../molecules/HeroExpertiseItemCard";
import MainTemplate from "../templates/MainTemplate";
import arrowRight from "/img/arrowRight.svg";
import heroImage from "/img/hero-image.png";

const Home = () => {
  return (
    <MainTemplate>
      <main className="">
        {/* Hero */}
        <section className="pt-[72px] pb-[54px] overflow-hidden">
          <div className="flex justify-between px-24 z-10">
            <div className="flex flex-col gap-8 max-w-[731px]">
              <h1 className="text-[44px] font-[500] text-slate-800">
                Your Trusted Partner in High Quality Maklon Services
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
          <div className="-mt-[150px]">
            <div className='px-14'>
              <div className="relative w-screen max-w-none h-[400px] overflow-hidden p-4">
                <img
                  src={heroImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className='-mt-72 w-[100px] h-[336px] opacity-80 bg-yellow-500'>

            </div>
          </div>
        </section>
      </main>
    </MainTemplate>
  );
};

export default Home;
