type ManufacturingProcessCardProps = {
  openDetail: number | null;
  id: number;
  title: string;
  openTitle: string;
  description: string;
  onClick: any;
  imageThumbnail: string | undefined;
};

const ManufacturingProcessCard = (props: ManufacturingProcessCardProps) => {
  const {
    openDetail,
    id,
    title,
    openTitle,
    description,
    onClick,
    imageThumbnail,
  } = props;

  return (
    <>
      {openDetail !== id ? (
        <div className="flex hover:cursor-pointer" onClick={onClick}>
          <div className="xl:p-6 p-4 bg-white flex xl:flex-col flex-row xl:items-stretch items-center  gap-6 w-[80px]">
            <button>
              <p className="px-[11px] py-[3px] w-8 h-8 rounded-full text-white bg-black">
                {id}
              </p>
            </button>
            <p className="text-slate-800 xl:rotate-90 whitespace-nowrap font-medium xl:text-base text-sm">
              {title}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex xl:flex-row flex-col xl:h-[400px]">
          <div className="p-6 bg-[#1C7F43] flex flex-col gap-4">
            <div className='xl:w-[192px] flex flex-col gap-4'>
              <button>
                <p className="px-[11px] py-[3px] w-8 h-8 rounded-full text-white bg-black">
                  {id}
                </p>
              </button>
              <div className="text-white flex flex-col gap-2">
                <p className="text-2xl font-semibold leading-[34px]">
                  {openTitle}
                </p>
                <p className="leading-[26px]">{description}</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={imageThumbnail}
              alt=""
              className="object-cover w-full  xl:h-full h-[192px]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ManufacturingProcessCard;
