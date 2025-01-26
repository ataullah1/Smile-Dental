import { useContext } from "react";
import { LanguageContext } from "../provider/LanguageContext";

const useLang = (): boolean => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLang must be used within a LanguageProvider");
  }

  const { language } = context;

  return language !== "en"; // Returns true if language is not 'en'
};

export default useLang;
