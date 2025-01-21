import navBarLogo from "/img/navbar-logo.png";
import englishFlag from "/img/english-flag.svg";
import indonesiaFlag from "/img/indonesia-flag.svg";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { TFunction } from 'i18next';

type NavigationBarProps = {
  t: TFunction<"translation", undefined>;
  handleChangeLanguage: () => void;
  currentLanguage: string;
};

const NavigationBar = (props: NavigationBarProps) => {
  const { t, handleChangeLanguage, currentLanguage } = props;

  return (
    <div className="px-24 py-6 sticky top-0 overflow-hidden bg-white z-50">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-0 2xl:px-24">
        {/* Right Content */}
        <div className="flex gap-8 items-center">
          <div>
            <Link to={"/"}>
              <img src={navBarLogo} alt="" className="h-[54px] w-[72px]" />
            </Link>
          </div>
          <button onClick={() => handleChangeLanguage()}>
            {currentLanguage === "en" ? (
              <div className="flex gap-2 py-2 px-4 border border-slate-200 rounded-xl items-center">
                <img src={englishFlag} alt="" className='max-w-4 max-h-3 shadow'/>
                <p className="font-bold">EN</p>
              </div>
            ) : (
              <div className="flex gap-2 py-2 px-4 border border-slate-200 rounded-xl items-center">
              <img src={indonesiaFlag} alt="" className='max-w-4 max-h-3 shadow'/>
              <p className="font-bold">ID</p>
            </div>
            )}
          </button>
        </div>

        {/* Left Content */}
        <div className="flex gap-6 items-center">
          <ul className="flex text-base text-slate-800 gap-6">
            <li>
              <Link to={"/service"}>{t("navbar.ourExpertise")}</Link>
            </li>
            <li>
              <a href="#">{t("navbar.valuedClients")}</a>
            </li>
            <li>
              <Link to={"/about"}>{t("navbar.about")}</Link>
            </li>
            <li>
              <a href="#">{t("navbar.insightHub")}</a>
            </li>
            <li>
              <Link to="/contact">{t("navbar.contact")}</Link>
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
