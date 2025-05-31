// "use server"

// import type { NextRequest } from "next/server"
// import { NextResponse } from "next/server"

// import { auth } from "@/shared/auth/auth"
//  // importa de NextAuth(config)

// export async function middleware(request: NextRequest) {
// 	const session = await auth()
// 	console.log("middleware =>", session)

// 	const pathname = request.nextUrl.pathname

// 	// Bloquear /admin para não-admins
// 	if (pathname.startsWith("/dashboard")) {
// 		if (!session || session.user.role !== "admin") {
// 			// Redireciona para /sign-in se não for admin
// 			return NextResponse.redirect(new URL("/sign-in", request.url))
// 		}
// 	}

// 	// Bloquear /user para não-logados
// 	if (pathname.startsWith("/user")) {
// 		if (!session) {
// 			return NextResponse.redirect(new URL("/sign-in", request.url))
// 		}
// 	}

// 	return NextResponse.next()
// }

// export const config = {
// 	matcher: ["/dashboard/:path*", "/user/:path*"], // rotas protegidas
// }
