import articleImage1 from "/img/article-image-1.png";

const ArticleCard = () => {
  return (
    <>
      <div className="flex flex-col w-[496px] gap-4 shadow-xl">
        <div>
          <img src={articleImage1} alt="" />
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6">
          <div className="flex justify-between text-gray-500 ">
            <p className="font-semibold text-base leading-[26px]">Article</p>
            <p className="font-normal leading-[34px]">10/11/2024</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="max-h-[73px] overflow-hidden">
              <h1 className="text-slate-800 font-semibold text-2xl leading-[34px] tracking-[0.96px] line-clamp-2">
                Maklon Skincare Tangerang, Solusi Praktis Membuat Produk
                Skincare dan Kosmetik Berkualitas di Harvest Group
              </h1>
            </div>
            <div className="max-h-[112px] overflow-hidden">
              <p className="text-slate-500 font-normal line-clamp-4">
                Industri skincare dan kosmetik di Indonesia terus tumbuh pesat.
                Di tengah kebutuhan produk perawatan kulit yang semakin
                meningkat, bisnis skincare menjadi salah satu peluang yang
                sangat menjanjikan. Namun, bagi para pengusaha yang ingin
                meluncurkan produk skincare atau kosmetik dengan merek sendiri,
                tantangan seperti biaya produksi, riset, regulasi, dan
                pengemasan bisa sangat menguras waktu dan biaya.
                Industri skincare dan kosmetik di Indonesia terus tumbuh pesat.
                Di tengah kebutuhan produk perawatan kulit yang semakin
                meningkat, bisnis skincare menjadi salah satu peluang yang
                sangat menjanjikan. Namun, bagi para pengusaha yang ingin
                meluncurkan produk skincare atau kosmetik dengan merek sendiri,
                tantangan seperti biaya produksi, riset, regulasi, dan
                pengemasan bisa sangat menguras waktu dan biaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
