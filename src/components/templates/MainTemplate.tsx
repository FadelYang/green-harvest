import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import NavigationBar from "../organism/NavigationBar";
import Footer from "../organism/Footer";

const MainTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    // temporary like this
    <div className="max-h-[1440px] flex flex-col justify-between h-screen">
      <NavigationBar t={t} />
      <div className="main flex-grow">{children}</div>
      <Footer t={t}/>
    </div>
  );
};

export default MainTemplate;
