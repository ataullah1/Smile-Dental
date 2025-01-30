"use client";
import { useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import { languageEvents } from "@/app/lib/languageEvents";

export default function LanguageToggle() {
  const router = useRouter();
  const [isBn, setIsBn] = useState(false);

  useEffect(() => {
    setIsBn(document.cookie.includes("IS_LANG=bn"));

    return languageEvents.subscribe(() => {
      setIsBn(document.cookie.includes("IS_LANG=bn"));
    });
  }, []);

  const toggleLanguage = useCallback(() => {
    const newIsBn = !isBn;
    setIsBn(newIsBn);
    setCookie("IS_LANG", newIsBn ? "bn" : "en");
    languageEvents.emit();
    router.refresh();
  }, [isBn, router]);

  return (
    <button onClick={toggleLanguage} className="px-4 py-2 rounded border">
      {isBn ? "English" : "বাংলা"}
    </button>
  );
}
