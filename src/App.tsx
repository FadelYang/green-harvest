import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Product from "./components/pages/Product";
import { TranslationProvider } from "./context/TranslationContext";

const App = () => {
  return (
    <TranslationProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products/:category" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TranslationProvider>
  );
};

export default App;
