import arrowRight from "/img/arrowRight.svg";
import Button from "../atoms/Button";
import contactHeroImage1 from "/img/contact-hero-1.png";
import contactHeroImage2 from "/img/contact-hero-2.png";

const ContactHeroSection = () => {
  return (
    <>
      <div className="py-36 px-24 max-w-[1444px] mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <h1 className="text-slate-800 text-[44px] font-medium leading-[54px] tracking-[-1.76px]">
              Reach Out to Harvest Group – Supporting Your Needs with Excellence
            </h1>
            <div className="flex items-end text-slate-500 text-lg font-medium leading-7">
              Empowering Your Brand from Concept to Market
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="primary-button">Contact Us</Button>
            <Button
              paddingSize="px-2 py-4"
              className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
            >
              View our location on maps{" "}
              <img src={arrowRight} alt="" className="-rotate-45" />
            </Button>
          </div>
          <div className="flex gap-5">
            <img src={contactHeroImage1} alt="" className="max-w-[856px] min-w-[775px]" />
            <img src={contactHeroImage2} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeroSection;
