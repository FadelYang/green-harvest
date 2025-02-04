import Button from "../atoms/Button";
import ArticleCard from "../molecules/ArticleCard";
import arrowRight from "/img/arrowRight.svg";
import articleImage1 from "/img/article-image-1.png";
import articleImage2 from "/img/article-image-2.png";
import articleImage3 from "/img/article-image-3.png";
import { TranslationProps } from '../../types/types';

const insightHubArticleData = [
  {
    imageThumbnail: articleImage1,
    insightCategory: "ARTICLE",
    title:
      "Maklon Skincare Tangerang, Solusi Praktis Membuat Produk Skincare dan Kosmetik Berkualitas di Harvest Group",
    description:
      "Industri skincare dan kosmetik di Indonesia terus tumbuh pesat. Di tengah kebutuhan produk perawatan kulit yang semakin meningkat, bisnis skincare menjadi salah satu peluang yang sangat menjanjikan. Namun, bagi para pengusaha yang ingin meluncurkan produk skincare atau kosmetik dengan merek sendiri, tantangan seperti biaya produksi, riset, regulasi, dan pengemasan bisa sangat menguras waktu dan biaya.",
    createdAt: "10/11/2024",
  },
  {
    imageThumbnail: articleImage2,
    insightCategory: "ARTICLE",
    title: "Mengapa Memilih Pabrik Maklon di Tangerang?",
    description:
      "Dalam dunia bisnis produk kecantikan dan kesehatan, banyak orang yang memiliki ide brilian tetapi terkendala oleh keterbatasan fasilitas dan biaya produksi. Di sinilah pabrik maklon memainkan peran penting, terutama bagi para pemilik merek yang ingin menciptakan produk berkualitas tanpa harus repot dengan urusan produksi. Harvest Group di Tangerang hadir sebagai solusi maklon terlengkap, dengan layanan yang mencakup produk skincare, kosmetik, minuman serbuk fiber, kolagen, hingga whey protein.",
    createdAt: "09/11/2024",
  },
  {
    imageThumbnail: articleImage3,
    insightCategory: "ARTICLE",
    title:
      "Mengapa Jasa Maklon Menjadi Solusi Terbaik untuk Bisnis Produk Kesehatan dan Kecantikan Anda?",
    description:
      "Dalam dunia bisnis produk kecantikan dan kesehatan, banyak orang yang memiliki ide brilian tetapi terkendala oleh keterbatasan fasilitas dan biaya produksi. Di sinilah pabrik maklon memainkan peran penting, terutama bagi para pemilik merek yang ingin menciptakan produk berkualitas tanpa harus repot dengan urusan produksi. Harvest Group di Tangerang hadir sebagai solusi maklon terlengkap, dengan layanan yang mencakup produk skincare, kosmetik, minuman serbuk fiber, kolagen, hingga whey protein.",
    createdAt: "09/11/2024",
  },
];

const InsightHubSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex flex-col xl:pt-36 pt-[72px] xl:gap-9 gap-6">
        <div>
          <div className="xl:px-24 px-6 flex justify-between items-center max-w-[1444px] mx-auto">
            <h1 className="text-slate-800 xl:text-[40px] text-2xl font-medium xl:leading-[48px] leading-[34px]">
              {t("home.insightHub.header")}
            </h1>
            <div className='xl:block hidden'>
              <Button
                paddingSize="px-6 py-4"
                className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
              >
                {t("home.insightHub.viewMoreArticleButton")}
                <img src={arrowRight} alt="" className="-rotate-45" />
              </Button>
            </div>
          </div>
        </div>
        {/* Article section */}
        <div className="flex xl:pl-24 pl-6 gap-9 overflow-x-auto max-w-full no-scrollbar xl:pb-36 pb-5 mx-auto z-10">
          <div className="flex xl:gap-9 gap-4">
            {insightHubArticleData.map((item, index) => (
              <ArticleCard
                key={index}
                thumbnailImage={item.imageThumbnail}
                createdAt={item.createdAt}
                title={item.title}
                description={item.description}
                insightCategory={item.insightCategory}
              />
            ))}
          </div>
        </div>
        <div className='xl:hidden block px-6'>
              <Button
                paddingSize="px-6 py-4"
                className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26] w-full justify-center"
              >
                {t("home.insightHub.viewMoreArticleButton")}
                <img src={arrowRight} alt="" className="-rotate-45" />
              </Button>
            </div>
      </div>
    </>
  );
};

export default InsightHubSection;
