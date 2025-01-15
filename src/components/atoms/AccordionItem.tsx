import chevronDown from "/img/chevron-down.svg";

type AccordionItemProps = {
  question: string;
  asnwer: string;
  isOpen: boolean
};

const AccordionItem = (props: AccordionItemProps) => {
  const { question, asnwer, isOpen } = props;

  return (
    <>
      <div className="flex flex-col gap-4 py-4 border-b-[1px]">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">{question}</p>
          <img src={chevronDown} alt="" className={isOpen ? 'rotate-180': ''} />
        </div>
        <div className={isOpen ? 'block': 'hidden'}>
          <p className='text-slate-500 font-medium leading-[26px]'>{asnwer}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
