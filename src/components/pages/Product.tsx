import { useParams } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import ProductPageHeader from "../organism/ProductPageHeader";
import ProductCardList from "../molecules/ProductCardList";
import LastBannerSection from "../organism/LastBannerSection";
import NotFound from "./NotFound";
import { TranslationProps } from "../../types/types";

const Product = (props: TranslationProps) => {
  const { category } = useParams<{ category?: string }>() || null;

  const currentExistCategories = ["herbal", "drink", "cosmetic"];
  const { t } = props;

  if (!category) {
    console.error("Category is missing or undefined.");
    return;
  }

  return (
    <>
      {currentExistCategories.includes(category) ? (
        <MainTemplate t={t}>
          <>
            <ProductPageHeader category={category} t={t}/>
            <ProductCardList category={category} t={t}/>
            <LastBannerSection t={t}/>
          </>
        </MainTemplate>
      ) : (
        <NotFound t={t}/>
      )}
    </>
  );
};

export default Product;
