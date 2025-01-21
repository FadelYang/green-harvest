import { PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import NavigationBar from "../organism/NavigationBar";
import Footer from "../organism/Footer";

const MainTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "id" : "en";
    console.log({ newLanguage });
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    // temporary like this
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar
        t={t}
        handleChangeLanguage={handleChangeLanguage}
        currentLanguage={currentLanguage}
      />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
};

export default MainTemplate;
