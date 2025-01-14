import navBarLogo from "/img/navbar-logo.png";
import englishFlag from "/img/english-flag.svg";
import Button from "../atoms/Button";

const NavigationBar = (props: any) => {
  const { t } = props;

  return (
    <div className="px-24 py-6">
      <div className="max-w-[1440px] flex justify-between items-center">
        {/* Right Content */}
        <div className="flex gap-8 items-center">
          <div>
            <img src={navBarLogo} alt="" className="h-[54px] w-[72px]" />
          </div>
          <div className="flex gap-2 py-2 px-4 border border-slate-200 rounded-xl">
            <img src={englishFlag} alt="" />
            <p className="font-bold">EN</p>
          </div>
        </div>

        {/* Left Content */}
        <div className="flex gap-6 items-center">
          <ul className="flex text-base text-slate-800 gap-6">
            <li>
              <a href="#">{t("navbar.ourExpertise")}</a>
            </li>
            <li>
              <a href="#">{t("navbar.valuedClients")}</a>
            </li>
            <li>
              <a href="#">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#">{t("navbar.insightHub")}</a>
            </li>
            <li>
              <a href="#">{t("navbar.contact")}</a>
            </li>
          </ul>
          <div className="">
            <Button variant="primary-button" className="py-4 px-6">
              {t("navbar.consultNow")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
