import { headers } from "next/headers";
import TheFooter from "./TheFooter";

export default function FooterWrapper() {
  const headersList = headers();
  const lang = headersList.get("x-language") || "en";

  return <TheFooter lang={lang} />;
}
