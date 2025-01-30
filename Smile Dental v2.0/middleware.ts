import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get language from cookie or default to 'en'
  const language = request.cookies.get("IS_LANG")?.value || "en";

  const response = NextResponse.next();

  // Set language in response headers
  response.headers.set("x-language", language);

  return response;
}

export const config = {
  matcher: "/:path*",
};
