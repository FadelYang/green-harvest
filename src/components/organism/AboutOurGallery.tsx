import ourGalleryImage1 from "/img/our-gallery-image-1.png";
import ourGalleryImage2 from "/img/our-gallery-image-2.png";
import ourGalleryImage3 from "/img/our-gallery-image-3.png";
import ourGalleryImage4 from "/img/our-gallery-image-4.png";

const AboutOurGallery = () => {
  return (
    <>
      <div className="max-w-[1444px] px-24 mx-auto flex justify-between">
        <h1 className="text-slate-800 text-2xl font-medium min-w-[130px]">Our Gallery</h1>
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
