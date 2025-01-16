import { useState } from "react";
import arrowUpRight from "/img/arrowUpright.svg";

import product1Open from "/img/product-1-open.png";
import product1Close from "/img/product-1-close.png";
import product2Open from "/img/product-2-open.png";
import product2Close from "/img/product-2-close.png";
import product3Open from "/img/product-3-open.png";
import product3Close from "/img/product-3-close.png";
import Button from "../atoms/Button";

const ProductSection = () => {
  const [activeProduct, setActiveProduct] = useState<number>(1);

  const products = [
    {
      id: 1,
      open: product1Open,
      close: product1Close,
      closeText: "Herbal Maklon / Capsule",
      openText: {
        title: "Herbal Maklon / Capsule",
        description:
          "Herbal Maklon with efficacy & packaging according to your needs. In the form of capsules, caplets, propolis, honey etc.",
        buttonText: "See product that can be maklon",
        buttonHref: "#",
      },
    },
    {
      id: 2,
      open: product2Open,
      close: product2Close,
      openText: {
        title: "Health Drink Maklon",
        description:
          "Health & Beauty Drink Maklon in powder form such as diet drinks, Fiber, Collagen, Meal Replacement etc.",
        buttonText: "See product that can be maklon",
        buttonHref: "#",
      },
    },
    {
      id: 3,
      open: product3Open,
      close: product3Close,
      openText: {
        title: "Cosmetic Manufacturing",
        description:
          "Maklon Cosmetics & Facial Skincare, Hair Care & Body Skincare that is legal & according to your request.",
        buttonText: "See product that can be maklon",
        buttonHref: "#",
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10 py-36 px-24 text-center max-w-[1444px] mx-auto">
        <h1 className="text-[40px] font-medium leading-[50px] text-slate-800">
          Greenlife Harvest Group Product Maklon Category
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
                        <div className='flex gap-2'>
                          <Button
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
