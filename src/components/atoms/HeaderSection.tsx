type HeaderSectionProps = {
  title: string;
  subTitle: string;
};

const HeaderSection = (props: HeaderSectionProps) => {
  const { title, subTitle } = props;

  return (
    <>
      <div>
        <h1 className="text-slate-500 text-base font-semibold leading-6 tracking-[0.64px]">
          {title}
        </h1>
        <h2 className="text-slate-800 text-[40px] w-[1027px] leading-[50px]">
          {subTitle}
        </h2>
      </div>
    </>
  );
};

export default HeaderSection;
