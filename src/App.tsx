import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Service from './components/pages/Service';
import ProductHerbal from './components/pages/ProductHerbal';
import ProductDrink from './components/pages/ProductDrink';
import ProductCosmetic from './components/pages/ProductCosmetic';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/products/herbal" element={<ProductHerbal />} />
      <Route path="/products/drinks" element={<ProductDrink />} />
      <Route path="/products/cosmetics" element={<ProductCosmetic />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
