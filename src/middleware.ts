import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware!!!");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("middleware -- path redirect");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 성능에 영향을 끼치기 때문에 특정한 경우에서만 실행하고 싶은 경우
// *: zero or more
// +: one or more

// /products/:path* path가 있거나(많거나) 없거나 둘 다 가능
// /products/:path+ path가 하나 또는 많거나
// 고로, /products/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행을 원할경우 아래와 같이 작성해 주셔야 해요

// /products/:path+
export const config = {
  matcher: ["/products/:path+"],
};
