import { TranslationProps } from "../../types/types";
import QnaList from "../molecules/QnaList";
import qnaImage from "/img/qna-image.png";

const QnaSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="xl:py-36 py-[72px] flex xl:flex-row flex-col xl:gap-10 gap-6 max-w-[1444px] mx-auto justify-between">
        <div className="flex flex-col xl:gap-10 gap-6">
          <h1 className="text-[#1E293B] font-medium xl:text-[40px] xl:leading-[56px] text-2xl xl:pl-24 xl:px-0 px-6">
            Frequently Asked <br className='xl:block hidden'/>
            Question
          </h1>
          <div className='xl:block hidden'>
            <img src={qnaImage} alt="" />
            <div className="bg-yellow-500 w-[336px] h-[100px] z-10 opacity-80 -mt-14"></div>
          </div>
        </div>
        <div className="p-6 xl:pr-24 xl:w-[724px]">
          <QnaList t={t}/>
        </div>
      </div>
    </>
  );
};

export default QnaSection;
