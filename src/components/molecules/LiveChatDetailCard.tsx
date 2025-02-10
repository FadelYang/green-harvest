import Arrow from "../atoms/Arrow";
import { liveChatCardProps } from "./LiveChatCard";

const LiveChatDetailCard = (props: liveChatCardProps) => {
  const {
    id,
    avatar,
    name,
    role,
    division,
    latestChat,
    latestChatTime,
    isLatestChatRead,
    onClick
  } = props;

  return (
    <>
      <div className='max-h-[539px]'>
        <div key={id} className="flex gap-4 py-4 items-center">
          <div className='rotate-180 hover:cursor-pointer' onClick={onClick}>
            <Arrow hexColor="black" />
          </div>
          <div className="">
            <img
              src={avatar}
              alt={`${avatar}-name`}
              className="min-w-9 min-h-9"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <p className="text-[10px] text-slate-500 font-medium">{division}</p>
            <div className="flex gap-4 justify-between">
              <div className="flex gap-1 items-center">
                <p className="text-slate-800 text-[14px] font-medium">
                  {name} - {role}
                </p>
              </div>
              {latestChatTime && (
                <p className="text-xs text-slate-500">{latestChatTime}</p>
              )}
            </div>
            {latestChat && (
              <div className="overflow-hidden max-w-[262p]">
                <p
                  className={`${
                    isLatestChatRead
                      ? "text-slate-800 font-medium line-clamp-1"
                      : "text-slate-500 line-clamp-1"
                  } text-xs`}
                >
                  {latestChat}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default LiveChatDetailCard;
