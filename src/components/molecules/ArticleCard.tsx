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
      <div className="flex flex-col xl:w-[496px] w-[324px] gap-4 shadow-xl">
        <div className=''>
          <img src={thumbnailImage} alt="" className='xl:max-w-[496px] xl:min-h-[298px] w-[324px] h-[321px] object-cover'/>
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6">
          <div className="flex justify-between text-gray-500 ">
            <p className="font-semibold  xl:text-base text-sm xl:leading-[26px] leading-6 tracking-[0.56px]">{insightCategory}</p>
            <p className="font-normal xl:text-base text-sm leading-6 xl:leading-[34px] tracking-[0.56px]">{createdAt}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="max-h-[73px] overflow-hidden">
              <h1 className="text-slate-800 font-semibold xl:text-2xl text-xl xl:leading-[34px] leading-[30px] xl:tracking-[0.96px] tracking-[0.8px] line-clamp-2">
                {title}
              </h1>
            </div>
            <div className="max-h-[112px] overflow-hidden">
              <p className="text-slate-500 font-normal text-sm leading-6 stacking-[0.56px] line-clamp-4">
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
