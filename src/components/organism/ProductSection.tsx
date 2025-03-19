import { useState } from "react";
import arrowUpRight from "/img/arrowUpright.svg";

import mealReplacement from "/img/meal-replacement.webp";
import boxPangan from "/img/box-pangan.webp";
import boxKosmetik from "/img/box-kosmetik.webp";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { TranslationProps } from "../../types/types";
import useImagePreloader from "../../hooks/useImagePreloader";

const preloadImagesList = [
  mealReplacement,
  boxPangan,
  boxKosmetik
];

const ProductSection = (props: TranslationProps) => {
  const [activeProduct, setActiveProduct] = useState<number>(1);
  const { imagesPreloaded } = useImagePreloader(preloadImagesList);
  const navigate = useNavigate();
  const { t } = props;

  const products = [
    {
      id: 1,
      img: mealReplacement,
      bgColor: "bg-[#bbf7d0]",
      closeText: t("home.product.1.closeText"),
      openText: {
        title: t("home.product.1.openText.title"),
        description: t("home.product.1.openText.description"),
        buttonText: t("home.product.1.openText.buttonText"),
        buttonHref: t("home.product.1.openText.buttonHref"),
      },
    },
    {
      id: 2,
      img: boxPangan,
      bgColor: "bg-[#7dd3fc]",
      closeText: t("home.product.2.closeText"),
      openText: {
        title: t("home.product.2.openText.title"),
        description: t("home.product.2.openText.description"),
        buttonText: t("home.product.2.openText.buttonText"),
        buttonHref: t("home.product.2.openText.buttonHref"),
      },
    },
    {
      id: 3,
      img: boxKosmetik,
      bgColor: "bg-[#fef08a]",
      closeText: t("home.product.3.closeText"),
      openText: {
        title: t("home.product.3.openText.title"),
        description: t("home.product.3.openText.description"),
        buttonText: t("home.product.3.openText.buttonText"),
        buttonHref: t("home.product.3.openText.buttonHref"),
      },
    },
  ];

  if (!imagesPreloaded) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col xl:gap-10 gap-6 xl:py-36 py-[72px] xl:px-24 px-6 text-center max-w-[1444px] mx-auto">
        <h1 className="text-2xl xl:text-[40px] font-medium leading-[34px] xl:leading-[50px] text-slate-800">
          {t("home.product.header")}
        </h1>
        {/* product image container */}
        {imagesPreloaded && (
          <div className="flex justify-center xl:flex-row flex-col gap-1 mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setActiveProduct(product.id)}
                className=""
              >
                {/* Product Image */}
                <div className="relative">
                  <div
                    className={`${product.bgColor} ${
                      activeProduct === product.id
                        ? "xl:w-[940px] xl:h-[540px] w-[345px] h-[220px]"
                        : "xl:w-[136px] xl:h-[540px] w-[345px] h-[145px]"
                    }`}
                  >
                    <div className="flex justify-center items-center h-full">
                      <img
                        src={product.img}
                        alt={`Product ${product.id}`}
                        className={`${
                          activeProduct === product.id
                            ? "xl:w-[650px] xl:h-[500px] w-[200px] h-[200px]"
                            : "xl:w-[400px] xl:h-[300px] w-[150px] h-[150px]"
                        } object-cover`}
                      />
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 w-full ${
                        activeProduct
                          ? "h-5/6 bg-gradient-to-t from-neutral-800 to-transparent"
                          : "h-full bg-black opacity-70"
                      }`}
                    ></div>
                  </div>

                  {/* Text overlay responsive */}
                  <div className="absolute inset-0 items-end justify-start text-start xl:hidden flex">
                    <p className="text-white text-lg font-medium">
                      {activeProduct === product.id ? (
                        <div className="p-4 flex flex-col">
                          <a
                            className="text-2xl font-medium"
                            onClick={() => {
                              navigate(
                                `/products/${product.openText.buttonHref}`
                              );
                              window.scrollTo(0, 0);
                            }}
                          >
                            {product.openText.title}
                          </a>
                          <p className="text-[14px] text-slate-100 font-normal leading-6">
                            {product.openText.description}
                          </p>
                        </div>
                      ) : (
                        <p className="p-4 text-2xl font-medium">
                          {product.openText.title}
                        </p>
                      )}
                    </p>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 items-end justify-start text-start xl:flex hidden">
                    <p className="text-white text-lg font-medium">
                      {activeProduct === product.id ? (
                        <div className="p-6 flex flex-col gap-2">
                          <p className="text-2xl font-semibold">
                            {product.openText.title}
                          </p>
                          <p className="text-base text-slate-100 font-normal">
                            {product.openText.description}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => {
                                navigate(
                                  `/products/${product.openText.buttonHref}`
                                );
                                window.scrollTo(0, 0);
                              }}
                              paddingSize="px-0 py-4"
                              className="flex gap-3 font-medium text-base border-b border-white"
                            >
                              {product.openText.buttonText}
                              <img src={arrowUpRight} alt="" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="px-2 py-6 text-base font-semibold">
                          {product.openText.title}
                        </p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductSection;
