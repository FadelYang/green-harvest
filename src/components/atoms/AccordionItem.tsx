import chevronDown from "/img/chevron-down.svg";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = (props: AccordionItemProps) => {
  const { question, answer, isOpen, onClick } = props;
  return (
    <div onClick={onClick} className="hover:cursor-pointer border-b-[1px]">
      <div className="flex flex-col gap-4 py-4">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">{question}</p>
          <img
            src={chevronDown}
            alt="Toggle"
            className={isOpen ? "rotate-180" : ""}
          />
        </div>
      </div>
      {isOpen && (
        <div className='pb-4'>
          <p className="text-slate-500 font-medium leading-[26px] whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
