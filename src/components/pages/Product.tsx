import { useParams } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import ProductPageHeader from "../organism/ProductPageHeader";
import ProductCardList from "../molecules/ProductCardList";
import LastBannerSection from "../organism/LastBannerSection";
import NotFound from "./NotFound";

const Product = () => {
  const { category } = useParams<{ category?: string }>() || null;

  const currentExistCategories = ["herbal", "drink", "cosmetic"];

  if (!category) {
    console.error("Category is missing or undefined.");
    return;
  }

  return (
    <>
      {currentExistCategories.includes(category) ? (
        <MainTemplate>
          <>
            <ProductPageHeader category={category} />
            <ProductCardList category={category} />
            <LastBannerSection />
          </>
        </MainTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Product;
