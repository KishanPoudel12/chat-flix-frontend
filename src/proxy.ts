import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // Routes that don't require auth
  const publicPaths = ["/login", "/signup", "/"];

  // If the path is public, allow access
  if (publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Token exists → continue
  return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/watch/:path*", "/dashboard/:path*"], // list of protected routes
};
