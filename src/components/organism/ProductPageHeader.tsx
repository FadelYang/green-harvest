import { TFunction } from "i18next";
import Button from "../atoms/Button";
import useProduct from "../atoms/ProductMasterData";

type ProductDetailPageProps = {
  category: string;
  t: TFunction<"translation", undefined>;
};

const ProductPageHeader = (props: ProductDetailPageProps) => {
  const { category, t } = props;
  const { getDetailProductPageContentByCategory } = useProduct({ t });
  const data = getDetailProductPageContentByCategory(category);

  return (
    <>
      <div className="mx-auto max-w-[1444px]">
        {data ? (
          <div className="pb-36">
            <div className="flex flex-col gap-8 pt-[72px]">
              <div className="flex flex-col gap-8 px-24">
                <div className="flex justify-between">
                  <h1 className="text-slate-800 text-[44px] font-medium leading-[54px] tracking=[-1.76px] min-w-[604px]">
                    {data.heading}
                  </h1>
                  <h2 className="text-slate-500 text-[18px] font-normal leading-7 max-w-[604px]">
                    {data.subHeading}
                  </h2>
                </div>
                <div>
                  <Button variant="primary-button">{t('product.herbal.hero.bookAConsultationButton')}</Button>
                </div>
                <div className="">
                  <img src={data.heroImage} alt="Hero" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-12 -mt-64 w-[100px] h-[336px] bg-yellow-500 opacity-80"></div>
            </div>
          </div>
        ) : (
          <div className="flex h-screen justify-center items-center">
            Data not found
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPageHeader;
