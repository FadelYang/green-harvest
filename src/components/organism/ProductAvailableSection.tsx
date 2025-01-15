import Button from "../atoms/Button";
import productAvailable1 from "/img/product-available-1.png";

const ProductAvailableSection = () => {
  return (
    <>
      <div className="px-24 py-36 flex flex-col gap-[72px]">
        <h1 className="text-center text-[40px] font-medium leading-[50px]">
          Tailored Products Available at Harvest Group
        </h1>
        <div className="flex gap-[75px]">
          <div className="flex flex-col gap-4">
            <Button
              paddingSize="px-6 py-2"
              className="product-available-select-button product-availabel-select-button-selected"
            >
              Fiber-based Drink
            </Button>
            <Button
              paddingSize="px-6 py-2"
              className="product-available-select-button"
            >
              Meal Replacement
            </Button>
            <Button
              paddingSize="px-6 py-2"
              className="product-available-select-button"
            >
              Skincare & Cosmetics
            </Button>
            <Button
              paddingSize="px-6 py-2"
              className="product-available-select-button"
            >
              Collagen-based Drink
            </Button>
            <Button
              paddingSize="px-6 py-2"
              className="product-available-select-button"
            >
              Colostrum Milk
            </Button>
            <Button
              paddingSize="px-6 py-2"
              className="product-available-select-button"
            >
              Whey Protein
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <img src={productAvailable1} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-slate-800 text-[32px] font-semibold'>Fiber Drink</p>
              <p className='text-slate-500 font-normal leading-[26px] max-w-[800px]'>
                Boost digestive health with high-fiber drinks tailored to your
                brand's needs. Our fiber-based formulations help in maintaining
                gut health and provide essential nutrients for daily wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAvailableSection;
