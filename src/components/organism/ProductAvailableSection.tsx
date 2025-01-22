import { useState } from "react";
import Button from "../atoms/Button";
import productAvailable1 from "/img/product-available-1.png";
import productAvailable2 from "/img/product-available-2.png";
import productAvailable3 from "/img/product-available-3.png";
import productAvailable4 from "/img/product-available-4.png";
import productAvailable5 from "/img/product-available-5.png";
import productAvailable6 from "/img/product-available-6.png";
import { TranslationProps } from '../../types/types';

const ProductAvailableSection = (props: TranslationProps) => {
  const [activeProduct, setActiveProduct] = useState<Number>(1);
  const { t } = props;

  const products = [
    {
      id: 1,
      buttonText: t('home.productAvailable.products.1.buttonText'),
      title: t('home.productAvailable.products.1.title'),
      description:t('home.productAvailable.products.1.description'),
      image: productAvailable1,
    },
    {
      id: 2,
      buttonText: t('home.productAvailable.products.2.buttonText'),
      title: t('home.productAvailable.products.2.title'),
      description:t('home.productAvailable.products.2.description'),
      image: productAvailable2,
    },
    {
      id: 3,
      buttonText: t('home.productAvailable.products.3.buttonText'),
      title: t('home.productAvailable.products.3.title'),
      description:t('home.productAvailable.products.3.description'),
      image: productAvailable3,
    },
    {
      buttonText: t('home.productAvailable.products.4.buttonText'),
      title: t('home.productAvailable.products.4.title'),
      description:t('home.productAvailable.products.4.description'),
      image: productAvailable4,
    },
    {
      id: 5,
      buttonText: t('home.productAvailable.products.5.buttonText'),
      title: t('home.productAvailable.products.5.title'),
      description:t('home.productAvailable.products.5.description'),
      image: productAvailable5,
    },
    {
      buttonText: t('home.productAvailable.products.6.buttonText'),
      title: t('home.productAvailable.products.6.title'),
      description:t('home.productAvailable.products.6.description'),
      image: productAvailable6,
    },
  ];

  return (
    <>
      <div className="px-24 py-36 flex flex-col gap-[72px] max-w-[1444px] mx-auto">
        <h1 className="text-center text-[40px] font-medium leading-[50px]">
          Tailored Products Available at Harvest Group
        </h1>
        <div className="flex gap-[75px]">
          <div className="flex flex-col gap-4">
            {products.map((item, index) => (
              <Button
                onClick={() => setActiveProduct(item.id!)}
                key={index}
                paddingSize="px-6 py-2"
                className={`product-available-select-button ${
                  activeProduct === item.id
                    ? "product-availabel-select-button-selected"
                    : ""
                }`}
              >
                {item.buttonText}
              </Button>
            ))}
          </div>
          <div className="">
            {products.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  activeProduct === item.id ? "block " : "hidden"
                }`}
              >
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="text-slate-800 text-[32px] font-semibold">
                    {item.title}
                  </p>
                  <p className="text-slate-500 font-normal leading-[26px] max-w-[800px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAvailableSection;
