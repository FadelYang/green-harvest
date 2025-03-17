import { useState } from "react";
import Button from "../atoms/Button";
import productAvailable1 from "/img/product-available-1.webp";
import mealReplacement from "/img/meal-replacement.webp";
import boxKosmetik from "/img/box-kosmetik.webp";
import productAvailable4 from "/img/product-available-4.webp";
import productAvailable5 from "/img/product-available-5.webp";
import productAvailable6 from "/img/product-available-6.webp";
import { TranslationProps } from "../../types/types";
import ChevronDownIcon from "../atoms/ChevronDownIcon";

const ProductAvailableSection = (props: TranslationProps) => {
  const [activeProduct, setActiveProduct] = useState<Number>(1);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { t } = props;

  const products = [
    {
      id: 1,
      buttonText: t("home.productAvailable.products.1.buttonText"),
      title: t("home.productAvailable.products.1.title"),
      description: t("home.productAvailable.products.1.description"),
      image: productAvailable1,
    },
    {
      id: 2,
      buttonText: t("home.productAvailable.products.2.buttonText"),
      title: t("home.productAvailable.products.2.title"),
      description: t("home.productAvailable.products.2.description"),
      image: mealReplacement,
      bgColor: "bg-[#d7d9d9]",
    },
    {
      id: 3,
      buttonText: t("home.productAvailable.products.3.buttonText"),
      title: t("home.productAvailable.products.3.title"),
      description: t("home.productAvailable.products.3.description"),
      image: boxKosmetik,
      bgColor: "bg-[#d98300]"
    },
    {
      id: 4,
      buttonText: t("home.productAvailable.products.4.buttonText"),
      title: t("home.productAvailable.products.4.title"),
      description: t("home.productAvailable.products.4.description"),
      image: productAvailable4,
    },
    {
      id: 5,
      buttonText: t("home.productAvailable.products.5.buttonText"),
      title: t("home.productAvailable.products.5.title"),
      description: t("home.productAvailable.products.5.description"),
      image: productAvailable5,
    },
    {
      id: 6,
      buttonText: t("home.productAvailable.products.6.buttonText"),
      title: t("home.productAvailable.products.6.title"),
      description: t("home.productAvailable.products.6.description"),
      image: productAvailable6,
    },
  ];

  return (
    <>
      <div className="xl:px-24 px-6 xl:py-36 py-[72px] flex flex-col xl:gap-[72px] gap-6 max-w-[1444px] mx-auto">
        <h1 className="text-center xl:text-[40px] text-2xl font-medium xl:leading-[50px] leading-[34px]">
          {t("home.productAvailable.header")}
        </h1>
        <div className="xl:flex hidden gap-[75px]">
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
                <div
                  className={`w-[848px] h-[452px] flex justify-center relative ${item?.bgColor}`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className={`${
                      item.bgColor
                        ? "w-[550px] h-[452px]"
                        : "w-[848px] h-[452px]"
                    } object-cover`}
                  />
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

        <div className="xl:hidden flex flex-col gap-6">
          <div className="relative inline-block w-full">
            {/* Dropdown Button */}
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center px-6 py-3 rounded-full w-full justify-between text-primary bg-[#EBFFF3]"
            >
              <div>
                {products.map((product) => (
                  <>{product.id === activeProduct ? product.title : ""}</>
                ))}
              </div>
              {isDropdownOpen ? (
                <div className="rotate-180">
                  <ChevronDownIcon />
                </div>
              ) : (
                <div className="">
                  <ChevronDownIcon />
                </div>
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-full">
                <ul className="py-2">
                  {products.map((item, index) => (
                    <li
                      key={index}
                      className="px-6 py-3 hover:text-primary hover:bg-[#EBFFF3] cursor-pointer"
                      onClick={() => {
                        setActiveProduct(item.id!);
                        setDropdownOpen(false);
                      }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="bg-white shadow-lg">
            {products.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  activeProduct === item.id ? "block " : "hidden"
                }`}
              >
                <div className={`${item.bgColor ? item.bgColor : ''} flex justify-center`}>
                  <img
                    src={item.image}
                    alt=""
                    className="h-[345px] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="text-slate-800 text-[20px] font-semibold">
                    {item.title}
                  </p>
                  <p className="text-slate-500 font-normal leading-[26px]">
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
