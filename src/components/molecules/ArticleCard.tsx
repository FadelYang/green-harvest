type ArticleCard = {
  thumbnailImage: string;
  insightCategory: string;
  createdAt: string;
  title: string;
  description: string;
};

const ArticleCard = (props: ArticleCard) => {
  const { thumbnailImage, insightCategory, createdAt, title, description } =
    props;

  return (
    <>
      <div className="flex flex-col w-[496px] gap-4 shadow-xl">
        <div className=''>
          <img src={thumbnailImage} alt="" className='max-w-[496px] min-h-[298px]'/>
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6">
          <div className="flex justify-between text-gray-500 ">
            <p className="font-semibold text-base leading-[26px]">{insightCategory}</p>
            <p className="font-normal leading-[34px]">{createdAt}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="max-h-[73px] overflow-hidden">
              <h1 className="text-slate-800 font-semibold text-2xl leading-[34px] tracking-[0.96px] line-clamp-2">
                {title}
              </h1>
            </div>
            <div className="max-h-[112px] overflow-hidden">
              <p className="text-slate-500 font-normal line-clamp-4">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
