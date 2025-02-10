type HeroMaklonExpertiseItemProps = {
  imagePath: string;
  title: string;
  description: string;
};

const HeroMaklonExpertiseItem = (props: HeroMaklonExpertiseItemProps) => {
  const { imagePath, title, description } = props;

  return (
    <>
      <div className="max-w-[286px] min-h-[264px] p-4 flex flex-col gap-6 bg-slate-50">
        <div className='md:block flex md:justify-start justify-center'>
          <img src={imagePath} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-slate-800 text-xl font-semibold leading-[26px]">
            {title}
          </p>
          <p className="text-slate-500 font-normal text-base leading-[26px]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroMaklonExpertiseItem;
