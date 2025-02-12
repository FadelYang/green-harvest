import navBarLogo from "/img/navbar-logo.png";
import englishFlag from "/img/english-flag.svg";
import indonesiaFlag from "/img/indonesia-flag.svg";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { useTranslationContext } from "../../context/TranslationContext";
import { TFunction } from "i18next";
import HamburgerIcon from "../atoms/HamburgerIcon";
import XIcon from "../atoms/XIcon";
import { useEffect, useState } from "react";
import useScrollToSection from '../../hooks/useScrollToSection';

type NavigationBarProps = {
  t: TFunction<"translation", undefined>;
  isMobile?: boolean;
  isSidebarOpen: boolean;
  sidebarToggle: () => void;
};

const NavigationBar = (props: NavigationBarProps) => {
  const { handleChangeLanguage, currentLanguage } = useTranslationContext();
  const { t, isSidebarOpen, sidebarToggle } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollToSection } = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      if (!isSidebarOpen && window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else if (isSidebarOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`pb-4 px-6 xl:px-24 py-6 sticky top-0 overflow-hidden bg-white z-20 ${
        isVisible ? "translate-y-0 duration-300" : "-translate-y-full duration-300"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-0 2xl:px-24">
        {/* Right Content */}
        <div className="flex gap-4 xl:gap-8 items-center">
          <div>
            <Link to={"/"}>
              <img
                src={navBarLogo}
                alt=""
                className="h-[48px] w-[64px] xl:h-[54px] xl:w-[72px]"
              />
            </Link>
          </div>
          <button onClick={() => handleChangeLanguage()}>
            {currentLanguage === "en" ? (
              <div className="flex gap-2 py-2 px-4 border border-slate-200 rounded-xl items-center">
                <img
                  src={englishFlag}
                  alt=""
                  className="max-w-4 max-h-3 shadow"
                />
                <p className="font-bold">EN</p>
              </div>
            ) : (
              <div className="flex gap-2 py-2 px-4 border border-slate-200 rounded-xl items-center">
                <img
                  src={indonesiaFlag}
                  alt=""
                  className="max-w-4 max-h-3 shadow"
                />
                <p className="font-bold">ID</p>
              </div>
            )}
          </button>
        </div>

        {/* Left Content */}
        <div className="hidden xl:flex gap-6 items-center">
          <ul className="flex text-base text-slate-800 gap-6">
            <li>
              <Link to={"/service"}>{t("navbar.ourExpertise")}</Link>
            </li>
            {/* <li>
              <a href="#">{t("navbar.valuedClients")}</a>
            </li> */}
            <li>
              <Link to={"/about"}>{t("navbar.about")}</Link>
            </li>
            <li>
              <button onClick={() => scrollToSection("insight-hub", "/")}>
                {t("navbar.insightHub")}
              </button>
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
        {isSidebarOpen ? (
          <div className="flex xl:hidden" onClick={() => sidebarToggle()}>
            <XIcon />
          </div>
        ) : (
          <div className="flex xl:hidden" onClick={() => sidebarToggle()}>
            <HamburgerIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
