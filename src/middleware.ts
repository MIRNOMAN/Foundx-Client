import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
    USER : [/^\/profile/],
    ADMIN : [/^\/admin/],
};


 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const {pathName} = request.nextUrl;

  console.log(pathname);

  //   const user = {
  //     name: "Mir",
  //     token: "adsf asda",
  //     role: "ADMIN",
  //   };

  const user = undefined;
  
  if(!user){
     if(AuthRoutes.includes(pathName)){
        return NextResponse();
     }else{
        return NextResponse.redirect(new URL("/login", request.url));
     }
  }

  if()




  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}