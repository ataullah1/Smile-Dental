// Client-side language utilities
export const getClientLanguage = () => {
  return document.cookie.includes("IS_LANG=bn");
};

export const toggleLanguage = (currentLang: boolean) => {
  document.cookie = `IS_LANG=${currentLang ? "en" : "bn"}; path=/`;
  window.location.reload();
};
