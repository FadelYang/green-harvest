import ProductCard from "../atoms/ProductCard";
import ProductMasterData from "../atoms/ProductMasterData";

type ProductCardListProps = {
  category: string;
};

const ProductCardList = (props: ProductCardListProps) => {
  const { category } = props;
  const products = ProductMasterData.getProductByCategory(category);

  return (
    <>
      <div className="flex gap-8">
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
