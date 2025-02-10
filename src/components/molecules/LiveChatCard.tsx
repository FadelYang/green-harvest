import OnlineDotIcon from "../atoms/OnlineDotIcon";

export type liveChatCardProps = {
  id: string;
  avatar: string;
  name: string;
  role: string;
  division: string;
  latestChat?: string;
  latestChatTime?: string;
  isLatestChatRead?: boolean;
  onClick?: () => void;
};

const LiveChatCard = (props: liveChatCardProps) => {
  const {
    id,
    avatar,
    name,
    role,
    division,
    latestChat,
    latestChatTime,
    isLatestChatRead,
  } = props;

  return (
    <>
      <div key={id} className="flex gap-4 py-4 items-center border-b">
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
              <OnlineDotIcon />
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
        {!latestChat && (
          <div className='mr-2'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="18"
              viewBox="0 0 9 18"
              fill="none"
            >
              <path
                d="M0.910156 16.92L7.43016 10.4C8.20016 9.63002 8.20016 8.37002 7.43016 7.60002L0.910156 1.08002"
                stroke="#64748B"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default LiveChatCard;
