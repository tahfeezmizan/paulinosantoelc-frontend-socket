// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  // If user is NOT logged in, redirect to login page
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If logged in, continue to requested page
  return NextResponse.next();
}

// Apply middleware only to profile routes
export const config = {
  matcher: ["/profile", "/profile/"],
};
