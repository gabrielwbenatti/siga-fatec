import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const classId = request.cookies.get("class_id")?.value;
  const teacherId = request.cookies.get("teacher_id")?.value;

  if (!teacherId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!classId && request.nextUrl.pathname.startsWith("/app")) {
    return NextResponse.redirect(new URL("/class-selection", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
