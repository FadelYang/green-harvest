import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Product from "./components/pages/Product";
import { useTranslationContext } from "./context/TranslationContext";
import { ReactNode, useLayoutEffect } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const App = () => {
  const { t } = useTranslationContext();

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/service" element={<Service t={t} />} />
        <Route path="/products/:category" element={<Product t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="*" element={<NotFound t={t} />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
