type ProductCardProps = {
  id: number;
  thumbnailImage: string;
  title: string;
  description: string;
};

const ProductCard = (props: ProductCardProps) => {
  const { id, thumbnailImage, title, description } = props;

  return (
    <>
      <div className='flex flex-col 2xl:max-w-[392px] xl:max-w-[392px] max-w-[360px] max-h-[438px] shadow-lg'>
        <img src={thumbnailImage} alt="" />
        <div className='flex flex-col gap-2 p-4'>
          <h1 className='text-slate-800 text-2xl leading-[34px] font-semibold'>{title}</h1>
          <p className='text-slate-500 font-normal text-base leading-[26px]'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
