import { cookies } from "next/headers";

// Server-side language check only
export const getLanguage = () => {
  const cookieStore = cookies();
  return cookieStore.get("IS_LANG")?.value === "bn";
};

// Client-side language toggle action
export const toggleLanguage = (currentLang: boolean) => {
  document.cookie = `IS_LANG=${currentLang ? "en" : "bn"}; path=/`;
  window.location.reload();
};

export const isBn = () => {
  return document.cookie.includes("IS_LANG=bn");
};
