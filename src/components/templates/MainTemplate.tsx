import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import NavigationBar from "../organism/NavigationBar";
import Footer from "../organism/Footer";

const MainTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    // temporary like this
    <div className="mx-auto">
      <NavigationBar t={t} />
      <div className="main flex-grow mx-auto">{children}</div>
      <Footer t={t}/>
    </div>
  );
};

export default MainTemplate;
