import product1 from '/img/product-1-open.png'
import product2 from '/img/product-2-closed.png'
import product3 from '/img/product-3-closed.png'

const ProductSection = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-36 px-24 text-center">
        <h1 className="text-[40px] font-medium leading-[50px] text-slate-800">
          Greenlife Harvest Group Product Maklon Category
        </h1>
        {/* product image container */}
        <div className='flex justify-center'>
          <img src={product1} alt="" />
          <img src={product2} alt="" />
          <img src={product3} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
