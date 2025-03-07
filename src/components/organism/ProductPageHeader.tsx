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
          <div className="xl:pb-36 pb-[72px]">
            <div className="flex flex-col gap-8 xl:pt-[72px] pt-10">
              <div className="flex flex-col gap-8 xl:px-24 px-6">
                <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-8 xl:min-w-0">
                  <h1 className="text-slate-800 xl:text-[44px] text-[32px] font-medium xl:leading-[54px] leading-[42px] xl:tracking=[-1.76px] tracking=[-1.28px] xl:min-w-[604px]">
                    {data.heading}
                  </h1>
                  <h2 className="text-slate-500 xl:text-lg text-base font-normal leading-7 max-w-[604px]">
                    {data.subHeading}
                  </h2>
                </div>
                <div>
                  <a href="https://tanya.web.id/harvest-maklon-discussion" target='_blank'>
                    <Button variant="primary-button" className='xl:w-auto w-full'>{t('product.herbal.hero.bookAConsultationButton')}</Button>
                  </a>
                </div>
                <div className="">
                  <img src={data.heroImage} alt="Hero" className='xl:w-auto xl:h-auto w-full h-[400px] object-cover'/>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute xl:left-12 xl:-mt-64 -mt-28 xl:w-[100px] w-[48px] xl:h-[336px] h-[162px] bg-yellow-500 opacity-80"></div>
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
