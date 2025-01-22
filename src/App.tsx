import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Product from "./components/pages/Product";
import { useTranslationContext } from "./context/TranslationContext";

const App = () => {
  const { t } = useTranslationContext();

  return (
    <Routes>
      <Route path="/" element={<Home t={t} />} />
      <Route path="/service" element={<Service t={t} />} />
      <Route path="/products/:category" element={<Product t={t} />} />
      <Route path="/contact" element={<Contact t={t} />} />
      <Route path="/about" element={<About t={t} />} />
      <Route path="*" element={<NotFound t={t} />} />
    </Routes>
  );
};

export default App;
