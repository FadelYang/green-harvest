import { TFunction } from "i18next";
import { Link } from "react-router";
import Button from '../atoms/Button';
import useScrollToSection from '../../hooks/useScrollToSection';

type SidebarProps = {
  t: TFunction<"translation", undefined>;
  isMobile: boolean;
  isSidebarOpen: boolean;
};

const Sidebar = (props: SidebarProps) => {
  const { isMobile, isSidebarOpen, t } = props;
  const { scrollToSection } = useScrollToSection();

  return (
    <>
      {isMobile && isSidebarOpen && (
        <div className="fixed top-20 w-screen h-screen bg-white z-50 px-6 pt-10">
          <div className="h-screen px-5 py-6 text-center bg-white">
            <div className="flex flex-col h-full">
              <ul className="flex flex-col text-base text-slate-800 gap-[52px]">
                <li className="sidebar-item">
                  <Link to={"/service"}>{t("navbar.ourExpertise")}</Link>
                </li>
                {/* <li>
              <a href="#">{t("navbar.valuedClients")}</a>
            </li> */}
                <li className="sidebar-item">
                  <Link to={"/about"}>{t("navbar.about")}</Link>
                </li>
                <button className="sidebar-item" onClick={() => scrollToSection("insight-hub", "/")}>
                  {t("navbar.insightHub")}
                </button>
                <li className="sidebar-item">
                  <Link to="/contact">{t("navbar.contact")}</Link>
                </li>
                <div className="">
                  <Button variant="primary-button" className="py-4 px-6 w-full">
                    {t("navbar.consultNow")}
                  </Button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
