import { useState } from "react";
import arrowUpRight from "/img/arrowUpright.svg";

import product1Open from "/img/product-1-open.png";
import product1Close from "/img/product-1-close.png";
import product2Open from "/img/product-2-open.png";
import product2Close from "/img/product-2-close.png";
import product3Open from "/img/product-3-open.png";
import product3Close from "/img/product-3-close.png";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useTranslationContext } from "../../context/TranslationContext";

const ProductSection = () => {
  const [activeProduct, setActiveProduct] = useState<number>(1);
  const navigate = useNavigate();
  const { t } = useTranslationContext();

  const products = [
    {
      id: 1,
      open: product1Open,
      close: product1Close,
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
      close: product2Close,
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
      close: product3Close,
      closeText: t("home.product.3.closeText"),
      openText: {
        title: t("home.product.3.openText.title"),
        description: t("home.product.3.openText.description"),
        buttonText: t("home.product.3.openText.buttonText"),
        buttonHref: t("home.product.3.openText.buttonHref"),
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10 py-36 px-24 text-center max-w-[1444px] mx-auto">
        <h1 className="text-[40px] font-medium leading-[50px] text-slate-800">
          {t('home.product.header')}
        </h1>
        {/* product image container */}
        <div className="flex justify-center gap-0">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(1)}
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={
                    activeProduct === product.id ? product.open : product.close
                  }
                  alt={`Product ${product.id}`}
                  className="transition-all duration-300"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-end justify-start text-start">
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
