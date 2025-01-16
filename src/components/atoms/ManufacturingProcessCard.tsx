import manufacturingProcessImage1 from "/img/manufacturing-process-1.png";

type ManufacturingProcessCardProps = {
  openDetail: number | null;
  id: number;
  title: string;
  description: string;
  onClick: any;
};

const ManufacturingProcessCard = (props: ManufacturingProcessCardProps) => {
  const { openDetail, id, title, description, onClick } = props;

  return (
    <>
      {openDetail !== id ? (
        <div className="flex hover:cursor-pointer" onClick={onClick}>
          <div className="p-6 bg-white flex flex-col gap-6 w-[80px]">
            <button>
              <p className="px-[11px] py-[3px] w-8 h-8 rounded-full text-white bg-black">
                {id}
              </p>
            </button>
            <p className="text-slate-800 rotate-90 whitespace-nowrap font-semibold">
              {title}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-[400px]">
          <div className="p-6 bg-[#1C7F43] flex flex-col gap-4 w-[192px]">
            <button>
              <p className="px-[11px] py-[3px] w-8 h-8 rounded-full text-white bg-black">
                {id}
              </p>
            </button>
            <div className="text-white flex flex-col gap-2">
              <p className="text-2xl font-semibold">{title}</p>
              <p>{description}</p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={manufacturingProcessImage1}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ManufacturingProcessCard;
