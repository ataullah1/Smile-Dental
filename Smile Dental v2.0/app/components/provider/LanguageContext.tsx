"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(() => {
    // Load language from local storage or default to Bengali ('bn')
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "bn";
    }
    return "bn";
  });

  // Save language preference to local storage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "bn" ? "en" : "bn"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
