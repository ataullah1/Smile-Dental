import { cookies } from "next/headers";

export function getLanguage() {
  const cookieStore = cookies();
  return cookieStore.get("NEXT_LOCALE")?.value === "bn";
}

export const isBn = () => {
  return document.cookie.includes("IS_LANG=bn");
};
