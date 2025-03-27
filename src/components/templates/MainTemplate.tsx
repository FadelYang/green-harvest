import { ReactNode, useEffect, useState } from "react";
import NavigationBar from "../organism/NavigationBar";
import Footer from "../organism/Footer";
import { TFunction } from "i18next";
import Sidebar from "../organism/Sidebar";
import LiveChatModal from "../organism/LiveChatModal";

type MainTemplateProps = {
  t: TFunction<"translation", undefined>;
  children: ReactNode;
};

const MainTemplate = (props: MainTemplateProps) => {
  const { t, children } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const sidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    // temporary like this
    <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <NavigationBar
          t={t}
          isMobile={isMobile}
          isSidebarOpen={isSidebarOpen}
          sidebarToggle={sidebarToggle}
        />
      </div>

      <LiveChatModal t={t} />

      <Sidebar t={t} isMobile={isMobile} isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-24">{children}</main>

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
};

export default MainTemplate;
