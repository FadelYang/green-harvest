import { TFunction } from 'i18next';
import { FC, ReactNode, createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

type TranslationContextType = {
  t: TFunction<"translation", undefined>;
  changeLanguage: (language: string) => void;
  currentLanguage: string;
  handleChangeLanguage: () => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

type TranslationProviderProps = {
  children: ReactNode;
};

export const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
}) => {
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
    <TranslationContext.Provider
      value={{
        t,
        changeLanguage,
        currentLanguage: language,
        handleChangeLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};
