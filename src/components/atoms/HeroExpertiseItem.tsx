type HeroExpertiseItemProps = {
  totalNumber: string;
  category: string;
};

const HeroExpertiseItem = (props: HeroExpertiseItemProps) => {
  const { totalNumber, category } = props;

  return (
    <>
      <div className="flex flex-col gap-0 xl:gap-4 py-1 px-4 text-center">
        <p className="text-yellow-500 text-2xl xl:text-[32px] font-semibold">{totalNumber}</p>
        <p className="text-slate-500 font-normal text-sm xl:text-[20px] max-w-[206px]">{category}</p>
      </div>
    </>
  );
};

export default HeroExpertiseItem;
