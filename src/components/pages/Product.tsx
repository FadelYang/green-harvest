import { useParams } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import ProductPageHeader from "../organism/ProductPageHeader";
import ProductCardList from '../molecules/ProductCardList';
import LastBannerSection from '../organism/LastBannerSection';

const Product = () => {
  const { category } = useParams<{ category?: string }>() || null;

  if (!category) {
    console.error("Category is missing or undefined.");
    return <div>Error: No category specified.</div>;
  }

  return (
    <>
      <MainTemplate>
        <ProductPageHeader category={category} />
        <ProductCardList category={category}/>
        <LastBannerSection />
      </MainTemplate>
    </>
  );
};

export default Product;
