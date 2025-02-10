import React, { useState } from "react";
import WhatsappIcon from "../atoms/WhatsappIcon";
import BaseModal from "../atoms/BaseModal";
import CsAvatar from "/img/cs-avatar.png";
import MessageICon from "../atoms/MessageICon";
import LiveChatCard from "../molecules/LiveChatCard";
import XIcon from "../atoms/XIcon";

const liveChatData = [
  {
    id: "1",
    avatar: CsAvatar,
    name: "Puji",
    role: "Cosmetics Marketing 1",
    division: "Cosmetics Manufacturing",
    latestChat:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    latestChatTime: "9.05",
    isLatestChatRead: true,
  },
  {
    id: "2",
    avatar: CsAvatar,
    name: "Zahra",
    role: "Cosmetics Marketing 2",
    division: "Cosmetics Manufacturing",
    latestChat:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    latestChatTime: "8.00",
  },
  {
    id: "3",
    avatar: CsAvatar,
    name: "Fajar",
    role: "Herbal Marketing 1",
    division: "Food Supplement",
  },
  {
    id: "4",
    avatar: CsAvatar,
    name: "Karlina",
    role: "Drink Marketing 1",
    division: "Food Supplement",
  },
  {
    id: "5",
    avatar: CsAvatar,
    name: "Kristal",
    role: "Drink Marketing 2",
    division: "Food Supplement",
  },
];

const LiveChatModal = () => {
  const [isLiveChatShow, setIsLiveChatShow] = useState(false);

  return (
    <>
      <button
        className="fixed xl:bottom-4 bottom-4 xl:right-20 right-4 z-50"
        onClick={() => setIsLiveChatShow(!isLiveChatShow)}
      >
        <div className="px-6 py-4 border border-[#015F26] inline-block rounded-xl rounded-br-none bg-white">
          <WhatsappIcon fill="white" stroke="#015F26" />
        </div>
      </button>

      {isLiveChatShow && (
        <BaseModal>
          <div className="max-w-[346px]">
            <div className="flex flex-col gap-[10px] justify-center items-center pb-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-1 justify-center">
                  {liveChatData.map((item, index) => (
                    <div
                      key={index}
                      className={`${index !== 0 ? "-ml-7" : ""}`}
                      style={{ zIndex: liveChatData.length - index }}
                    >
                      <img
                        src={item.avatar}
                        alt={`${item.name} avatar`}
                        className="w-10 h-10 rounded-full border border-white"
                      />
                    </div>
                  ))}
                </div>

                <div className='cursor-pointer -ml-5' onClick={() => setIsLiveChatShow(!isLiveChatShow)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex text-center">
                <div className="flex gap-1 justify-center">
                  <h1 className="text-slate-800 font-semibold">Live Chat</h1>
                  <MessageICon />
                </div>
              </div>
              <h2 className="text-center text-slate-500 text-[14px]">
                Select a customer representative to chat about <br /> your
                product needs
              </h2>
            </div>
            <div>
              {liveChatData.map((item, index) => (
                <LiveChatCard
                  id={+index}
                  avatar={item.avatar}
                  name={item.name}
                  role={item.role}
                  division={item.division}
                  latestChat={item.latestChat}
                  isLatestChatRead={item.isLatestChatRead}
                  latestChatTime={item.latestChatTime}
                />
              ))}
            </div>
          </div>
        </BaseModal>
      )}
    </>
  );
};

export default LiveChatModal;
