import { ReactNode } from "react";
import NavigationBar from "../organism/NavigationBar";
import Footer from "../organism/Footer";
import { TFunction } from 'i18next';

type MainTemplateProps = {
  t:  TFunction<"translation", undefined>
  children: ReactNode
}

const MainTemplate = (props: MainTemplateProps) => {
  const { t, children } = props;

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
