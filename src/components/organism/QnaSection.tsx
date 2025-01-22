import { TranslationProps } from "../../types/types";
import QnaList from "../molecules/QnaList";
import qnaImage from "/img/qna-image.png";

const QnaSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="py-36 flex gap-10 max-w-[1444px] mx-auto justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="text-[#1E293B] font-medium text-[40px] pl-24">
            Frequently Asked <br />
            Question
          </h1>
          <div>
            <img src={qnaImage} alt="" />
            <div className="bg-yellow-500 w-[336px] h-[100px] z-10 opacity-80 -mt-14"></div>
          </div>
        </div>
        <div className="p-6 pr-24 w-[724px]">
          <QnaList t={t}/>
        </div>
      </div>
    </>
  );
};

export default QnaSection;
