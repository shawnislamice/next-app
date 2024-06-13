import { NextResponse } from "next/server";

export const middleware = (request) => {
  console.log(request);
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
};
export const config = {
  matcher: ["/my-profile", "/services"],
};
