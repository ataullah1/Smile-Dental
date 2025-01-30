"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

interface LanguageContextType {
  isBn: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isBn, setIsBn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsBn(document.cookie.includes("IS_LANG=bn"));
  }, []);

  const toggleLanguage = () => {
    const newIsBn = !isBn;
    setIsBn(newIsBn);
    setCookie("IS_LANG", newIsBn ? "bn" : "en");
    router.refresh();
  };

  return (
    <LanguageContext.Provider value={{ isBn, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
