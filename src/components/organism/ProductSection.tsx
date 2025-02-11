import { useState } from "react";
import arrowUpRight from "/img/arrowUpright.svg";

import product1Open from "/img/product-1-open.png";
import product1Close from "/img/product-1-close.png";
import product1OpenResponsive from "/img/product-1-open-responsive.png";
import product1CloseResponsive from "/img/product-1-close-responsive.png";

import product2Open from "/img/product-2-open.png";
import product2Close from "/img/product-2-close.png";
import product2OpenResponsive from "/img/product-2-open-responsive.png";
import product2CloseResponsive from "/img/product-2-close-responsive.png";

import product3Open from "/img/product-3-open.png";
import product3OpenResponsive from "/img/product-3-open-responsive.png";
import product3Close from "/img/product-3-close.png";
import product3CloseResponsive from "/img/product-3-close-responsive.png";

import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { TranslationProps } from "../../types/types";
import useImagePreloader from '../../hooks/useImagePreloader';

const preloadImagesList = [
  product1Open,
  product1Close,
  product1OpenResponsive,
  product1CloseResponsive,

  product2Open,
  product2Close,
  product2OpenResponsive,
  product2CloseResponsive,

  product3Open,
  product3Close,
  product3OpenResponsive,
  product3CloseResponsive,
];

const ProductSection = (props: TranslationProps) => {
  const [activeProduct, setActiveProduct] = useState<number>(1);
  const { imagesPreloaded } = useImagePreloader(preloadImagesList);
  const navigate = useNavigate();
  const { t } = props;

  const products = [
    {
      id: 1,
      open: product1Open,
      openResponsive: product1OpenResponsive,
      close: product1Close,
      closeResponsive: product1CloseResponsive,
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
      open: product2Open,
      openResponsive: product2OpenResponsive,
      close: product2Close,
      closeResponsive: product2CloseResponsive,
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
      open: product3Open,
      openResponsive: product3OpenResponsive,
      close: product3Close,
      closeResponsive: product3CloseResponsive,
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
    return null
  }

  return (
    <>
      <div className="flex flex-col xl:gap-10 gap-6 xl:py-36 py-[72px] xl:px-24 px-6 text-center max-w-[1444px] mx-auto">
        <h1 className="text-2xl xl:text-[40px] font-medium leading-[34px] xl:leading-[50px] text-slate-800">
          {t("home.product.header")}
        </h1>
        {/* product image container */}
        <div className="flex justify-center xl:flex-row flex-col gap-1 mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(1)}
              className=""
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={
                    activeProduct === product.id ? product.open : product.close
                  }
                  alt={`Product ${product.id}`}
                  className="xl:block hidden"
                />
                <img
                  src={
                    activeProduct === product.id
                      ? product.openResponsive
                      : product.closeResponsive
                  }
                  alt={`Product ${product.id}`}
                  className="xl:hidden block w-screen"
                />

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
      </div>
    </>
  );
};

export default ProductSection;
