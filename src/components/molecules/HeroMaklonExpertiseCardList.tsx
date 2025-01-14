import HeroMaklonExpertiseCard from "../atoms/HeroMaklonExpertiseICard";
import erlenmayerFlaskIcon from "/img/erlenmayer-flask-icon.svg";
import blendingAndPackageIcon from "/img/blending-and-package-icon.svg";
import qualityCheckIcon from "/img/quality-check-icon.svg";
import labelIcon from "/img/label-icon.svg";

const HeroMaklonExpertiseCardList = () => {
  const heroMaklonExpertiseItems = [
    {
      imagePath: erlenmayerFlaskIcon,
      title: "Custom Formulation",
      description:
        "We offer custom formulation services using high quality materials, ensuring your unique vision comes to life.",
    },
    {
      imagePath: blendingAndPackageIcon,
      title: "Blending and Packaging",
      description:
        "Our state-of-the-art facilities handle a range of blending and packaging options to suit different product types and quantities.",
    },
    {
      imagePath: qualityCheckIcon,
      title: "Quality Assurance",
      description:
        "We adhere to stringent quality control measures and industry standards, guaranteeing that your products are safe, consistent, and compliant.",
    },
    {
      imagePath: labelIcon,
      title: "Private Label Solutions",
      description:
        "Expand your brand with our private label services. From concept to shelf, we support you at every step.",
    },
  ];

  return (
    <>
      <div className='flex gap-8'>
        {heroMaklonExpertiseItems.map((item) => (
          <HeroMaklonExpertiseCard
            imagePath={item.imagePath}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default HeroMaklonExpertiseCardList;
