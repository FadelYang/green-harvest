import { TranslationProps } from "../../types/types";
import Button from "../atoms/Button";
import ManufacturingProcessList from "../molecules/ManufacturingProcessList";

const ManufacturingProcessSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex flex-col xl:gap-10 gap-6 xl:py-36 py-[72px] xl:px-24 px-6 max-w-[1444px] mx-auto">
        <div className="flex justify-between items-center xl:max-w-full max-w-[345px]">
          <div className="flex flex-col gap-2">
            <p className="text-slate-500 text-base font-semibold leading-[26px] uppercase">
              {t("home.manufacturingProcess.header")}
            </p>
            <p className="text-slate-800 text-2xl xl:text-[40px] font-medium xl:leading-[50px] leading-[34px]">
              {t("home.manufacturingProcess.subHeader")}
            </p>
          </div>
          <div className="xl:block hidden">
            <a href="https://tanya.web.id/harvest-maklon-discussion" target="_blank">
              <Button variant="primary-button">
                {t("home.hero.consultNowButton")}
              </Button>
            </a>
          </div>
        </div>
        <div className="">
          <ManufacturingProcessList />
        </div>
        <div className="xl:hidden ">
          <a href="https://tanya.web.id/harvest-maklon-discussion" target="_blank">
            <Button variant="primary-button" className="w-full">
              {t("home.hero.consultNowButton")}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ManufacturingProcessSection;
