import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import NavigationBar from "../organism/NavigationBar";
import Footer from "../organism/Footer";

const MainTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    // temporary like this
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar t={t}/>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer t={t}/>
    </div>
  );
};

export default MainTemplate;
