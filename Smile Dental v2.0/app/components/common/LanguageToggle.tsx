"use client";
import { toggleLanguage } from "@/app/lib/clientLanguage";

interface Props {
  isBn: boolean;
}

export default function LanguageToggle({ isBn }: Props) {
  return (
    <button
      onClick={() => toggleLanguage(isBn)}
      className="px-4 py-2 rounded border"
    >
      {isBn ? "English" : "বাংলা"}
    </button>
  );
}
