type ProductCardProps = {
  id: number;
  thumbnailImage: string;
  title: string;
  description: string;
};

const ProductCard = (props: ProductCardProps) => {
  const { thumbnailImage, title, description } = props;

  return (
    <>
      <div className='flex flex-col 2xl:max-w-[392px] xl:max-w-[365px] max-w-[360px] max-h-[438px] shadow-lg'>
        <img loading='lazy' src={thumbnailImage} alt={`${title}-image`} className='xl:w-auto xl:h-auto w-[345px] h-[175px] object-cover'/>
        <div className='flex flex-col gap-2 p-4'>
          <h1 className='text-slate-800 xl:text-2xl text-xl l:leading-[34px] leading-[26px] font-semibold'>{title}</h1>
          <p className='text-slate-500 font-normal text-base leading-[26px]'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
