import Button from "../atoms/Button";
import aboutHeroImage from "/img/about-hero-image.png";

const AboutHeroSection = () => {
  return (
    <>
      <div className="px-24 pt-[72px] max-w-[1444px] mx-auto flex flex-col gap-[60px] pb-36">
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="text-slate-800 font-medium text-[44px] max-w-[517px]">
              You Own The Brand, We Do The Rest
            </h1>
            <div>
              <Button variant="primary-button">Consult Now!</Button>
            </div>
          </div>
          <div>
            <h2 className="text-slate-500 leading-[26px] max-w-[439px]">
              <span className="font-bold">Greenlife Harvest Group</span> is a
              leading private label manufacturer specializing in herbal
              products, supplements, and cosmetics since 2004. Trusted by
              hundreds of brands, our products reach over 50 countries
              worldwide.
            </h2>
          </div>
        </div>
        <div>
          <img src={aboutHeroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
