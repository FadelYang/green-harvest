import { useState } from "react";
import Button from "../atoms/Button";
import productAvailable1 from "/img/product-available-1.png";
import productAvailable2 from "/img/product-available-2.png";
import productAvailable3 from "/img/product-available-3.png";
import productAvailable4 from "/img/product-available-4.png";
import productAvailable5 from "/img/product-available-5.png";
import productAvailable6 from "/img/product-available-6.png";

const ProductAvailableSection = () => {
  const [activeProduct, setActiveProduct] = useState<Number>(1);

  const products = [
    {
      id: 1,
      buttonText: "Fiber-based Drink",
      title: "Fiber Drink",
      description:
        "Boost digestive health with high-fiber drinks tailored to your brand's needs. Our fiber-based formulations help in maintaining gut health and provide essential nutrients for daily wellness.",
      image: productAvailable1,
    },
    {
      id: 2,
      buttonText: "Meal Replacement",
      title: "Meal Replacement",
      description:
        "Create balanced meal replacement products that offer complete nutrition for those on the go. Our options include protein-packed shakes and fortified powders to support weight management and fitness goals.",
      image: productAvailable2,
    },
    {
      id: 3,
      buttonText: "Skincare & Cosmetics",
      title: "Skincare & Cosmetics",
      description:
        "Develop premium skincare and cosmetic products, from cleansers and moisturizers to specialized treatments. Our formulations focus on efficacy and safety, ensuring high customer satisfaction.",
      image: productAvailable3,
    },
    {
      id: 4,
      buttonText: "Collagen-based Drink",
      title: "Collagen-based Drink",
      description:
        "Support beauty from within with our collagen-based drinks, designed to enhance skin elasticity and hydration. We provide customizable formulas rich in peptides and vitamins for optimal results.",
      image: productAvailable4,
    },
    {
      id: 5,
      buttonText: "Collustrum Milk",
      title: "Collustrum Milk",
      description:
        "Leverage the power of colostrum for immune support with our specialized colostrum milk products. Rich in antibodies and growth factors, these products are perfect for health-focused brands.",
      image: productAvailable5,
    },
    {
      id: 6,
      buttonText: "Whey Protein",
      title: "Whey Protein",
      description:
        "Formulate high-quality whey protein products for fitness enthusiasts and athletes. Our whey protein options come in various flavors and compositions, ideal for muscle recovery and strength building.",
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
                onClick={() => setActiveProduct(item.id)}
                key={index}
                paddingSize="px-6 py-2"
                className={`product-available-select-button ${activeProduct === item.id ? "product-availabel-select-button-selected" : ""}`}
              >
                {item.buttonText}
              </Button>
            ))}
          </div>
          <div className="">
            {products.map((item, index) => (
              <div key={index} className={`flex flex-col ${activeProduct === item.id ? 'block ': 'hidden'}`}>
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
