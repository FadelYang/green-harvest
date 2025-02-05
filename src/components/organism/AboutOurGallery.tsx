import { TranslationProps } from "../../types/types";
import ourGalleryImage1 from "/img/our-gallery-image-1.png";
import ourGalleryImage2 from "/img/our-gallery-image-2.png";
import ourGalleryImage3 from "/img/our-gallery-image-3.png";
import ourGalleryImage4 from "/img/our-gallery-image-4.png";

const AboutOurGallery = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="max-w-[1444px] xl:px-24 px-6 mx-auto flex xl:flex-row flex-col justify-between">
        <h1 className="text-slate-800 text-2xl font-medium min-w-[130px] xl:mb-0 mb-4">
          {t("aboutUs.ourGallery")}
        </h1>
        <div className="flex gap-6 justify-end flex-wrap">
          <img src={ourGalleryImage1} alt="" />
          <img src={ourGalleryImage2} alt="" />
          <img src={ourGalleryImage3} alt="" />
          <img src={ourGalleryImage4} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutOurGallery;
