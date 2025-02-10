import { TFunction } from "i18next";
import ProductCard from "../atoms/ProductCard";
import useProduct from "../atoms/ProductMasterData";

type ProductCardListProps = {
  category: string;
  t: TFunction<"translation", undefined>;
};

const ProductCardList = (props: ProductCardListProps) => {
  const { category, t } = props;
  const { getProductByCategory } = useProduct({ t });
  const products = getProductByCategory(category);

  return (
    <>
      <div className="flex gap-8 flex-wrap max-w-[1444px] mx-auto xl:px-24 px-6 xl:py-0 py-[72px] justify-center">
        <h1 className="mx-auto text-slate-800 xl:text-[32px] text-2xl xl:leading-[42px] leading-[34px] xl:text-start text-center font-semibold">
          {products?.listSectionHeading}
        </h1>
        {products?.products.map((item) => (
          <ProductCard
            key={item.productId}
            id={item.productId}
            thumbnailImage={item.productThumbnailImage}
            title={item.productName}
            description={item.productDescription}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCardList;
