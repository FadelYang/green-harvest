import { PropsWithChildren } from "react";
import NavigationBar from "../organism/NavigationBar";
import Footer from "../organism/Footer";

const MainTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    // temporary like this
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainTemplate;
