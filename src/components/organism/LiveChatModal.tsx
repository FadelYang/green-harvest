import { useState } from "react";
import WhatsappIcon from "../atoms/WhatsappIcon";
import BaseModal from "../atoms/BaseModal";
import CsAvatarPuji from "/img/cs-avatar-puji.png";
import CsAvatarZahra from "/img/cs-avatar-zahra.png";
import CsAvatarFajar from "/img/cs-avatar-fajar.png";
import CsAvatarWidya from "/img/cs-avatar-widya.webp";
import CsAvatarAdelia from "/img/cs-avatar-adelia.webp";
import CsAvatarKristal from "/img/cs-avatar-kristal.png";
import MessageICon from "../atoms/MessageICon";
import LiveChatCard, { liveChatCardProps } from "../molecules/LiveChatCard";
import { TranslationProps } from "../../types/types";

const LiveChatModal = (props: TranslationProps) => {
  const [isLiveChatShow, setIsLiveChatShow] = useState(false);
  const [isLiveChatButtonTextShowed, setIsLiveChatButtonTextShowed] =
    useState(false);
  useState<liveChatCardProps>({
    id: "0",
    avatar: "",
    name: "",
    role: "",
    division: "",
  });
  const { t } = props;

  const liveChatData = [
    {
      id: "1",
      avatar: CsAvatarPuji,
      name: "Puji",
      role: "Cosmetics Marketing 1",
      division: "Cosmetics Manufacturing",
      phoneNumber: "6281399382525",
    },
    {
      id: "2",
      avatar: CsAvatarZahra,
      name: "Zahra",
      role: "Cosmetics Marketing 2",
      division: "Cosmetics Manufacturing",
      phoneNumber: "6281298659168",
    },
    {
      id: "3",
      avatar: CsAvatarFajar,
      name: "Fajar",
      role: "Herbal Marketing 1",
      division: "Food Supplement",
      phoneNumber: "6281280454168",
    },
    {
      id: "4",
      avatar: CsAvatarWidya,
      name: "Widya",
      role: "Marketing 1",
      division: "Food Supplement",
      phoneNumber: "6285210882525"
    },
    {
      id: "5",
      avatar: CsAvatarAdelia,
      name: "Adelia",
      role: "Marketing 2",
      division: "Food Supplement",
      phoneNumber: "6281366782525"
    },
    {
      id: "6",
      avatar: CsAvatarKristal,
      name: "Kristal",
      role: "Drink Marketing 2",
      division: "Food Supplement",
      phoneNumber: "6281315014168",
    },
  ];

  return (
    <>
      <button
        className="fixed xl:bottom-4 bottom-4 xl:right-20 right-4 z-50 px-6 py-4 border border-[#015F26] inline-block rounded-xl rounded-br-none bg-white"
        onClick={() => {
          setIsLiveChatShow(!isLiveChatShow);
        }}
        onMouseEnter={() => {
          setIsLiveChatButtonTextShowed(!isLiveChatButtonTextShowed);
        }}
        onMouseLeave={() => {
          setIsLiveChatButtonTextShowed(!isLiveChatButtonTextShowed);
        }}
      >
        <div className="flex items-center gap-2">
          {isLiveChatButtonTextShowed && (
            <span
              className="text-primary text-base leading-[26px] font-medium"
              id="chat-with-marketing"
            >
              Chat With Marketing{" "}
            </span>
          )}
          <WhatsappIcon fill="white" stroke="#015F26" />
        </div>
      </button>

      {isLiveChatShow && (
        <BaseModal>
          <div className="p-4 max-w-[393px]">
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
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  ))}
                </div>

                <div
                  className="cursor-pointer -ml-5"
                  onClick={() => {
                    setIsLiveChatShow(!isLiveChatShow);
                  }}
                >
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
                {t("liveChat.header")}
              </h2>
            </div>
            <div>
              {liveChatData.map((item, index) => (
                <a
                  key={index}
                  className="hover:cursor-pointer"
                  href={`https://wa.me/${item.phoneNumber}`}
                  target="_blank"
                >
                  <LiveChatCard
                    id={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    role={item.role}
                    division={item.division}
                  />
                </a>
              ))}
            </div>
          </div>
        </BaseModal>
      )}
    </>
  );
};

export default LiveChatModal;
