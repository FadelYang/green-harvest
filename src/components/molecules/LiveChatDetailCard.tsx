import Arrow from "../atoms/Arrow";
import AttachmentIcon from "../atoms/AttachmentIcon";
import SendIcon from "../atoms/SendIcon";
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
    onClick,
  } = props;

  return (
    <>
      <div className="min-h-[539px] flex flex-col">
        <div key={id} className="flex gap-4 items-center p-4 ">
          <div className="rotate-180 hover:cursor-pointer" onClick={onClick}>
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
            </div>
            {latestChat && (
              <div className="overflow-hidden max-w-[262p]">
                <p
                  className={`${
                    isLatestChatRead
                      ? "text-slate-800 font-medium line-clamp-1"
                      : "text-slate-500 line-clamp-1"
                  } text-xs`}
                ></p>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-auto bg-gray-50">
          {latestChat && (
            <div className="px-4 py-2 flex flex-col gap-1">
              <div className="bg-white p-3 max-w-[256px] ml-2 rounded-md rounded-bl-none text-sm text-slate-800">
                {latestChat}
              </div>
              <div className="flex gap-2 itens-center">
                <img src={avatar} alt="" className="w-4" />
                <p className="text-xs text-slate-500">{latestChatTime}</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-auto pt-3 items-center px-4 pb-4">
          <div className="p-[10px]">
            <AttachmentIcon />
          </div>
          <div>
            <div className="relative max-w-[262px] w-full">
              <input
                type="text"
                className="w-full py-1 px-2 pr-8 bg-slate-50 border border-slate-200 rounded-md"
              />
              <div className="absolute inset-y-0 right-1 flex items-center">
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChatDetailCard;
