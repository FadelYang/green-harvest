import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { TranslationProvider } from './context/TranslationContext.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </StrictMode>
    ,
  </BrowserRouter>
);
