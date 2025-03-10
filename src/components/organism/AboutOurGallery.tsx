import { useState } from "react";
import { TranslationProps } from "../../types/types";
import ourGalleryImage1 from "/img/our-gallery-image-1.png";
import ourGalleryImage2 from "/img/our-gallery-image-2.png";
import ourGalleryImage3 from "/img/our-gallery-image-3.png";
import ourGalleryImage4 from "/img/our-gallery-image-4.png";
import BaseModal from "../atoms/BaseModal";

const galleryImages = [
  ourGalleryImage1,
  ourGalleryImage2,
  ourGalleryImage3,
  ourGalleryImage4,
];

const GalleryImageContainer = ({ img }: { img: string }) => {
  return <img src={img} alt="" className="w-20 xl:w-40" />;
};

const AboutOurGallery = (props: TranslationProps) => {
  const { t } = props;
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-[1444px] xl:px-24 px-6 mx-auto flex flex-col justify-between gap-6">
        <h1 className="text-slate-800 text-2xl font-medium min-w-[130px] xl:mb-0 mb-4">
          {t("aboutUs.ourGallery")}
        </h1>
        <div className="flex gap-6 justify-start flex-wrap">
          {galleryImages.map((item, index) => (
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                setSelectedImage(item);
                setIsModalOpen(true);
              }}
            >
              <GalleryImageContainer img={item} key={index} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <BaseModal>
          <div className='flex flex-col'>
            <div
              className="flex justify-end items-center m-2 cursor-pointer -ml-5"
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setSelectedImage("")
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img src={selectedImage} alt="" />
          </div>
        </BaseModal>
      )}
    </>
  );
};

export default AboutOurGallery;
