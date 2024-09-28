import { cookies } from "next/headers"
import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

//쿠키 없다면 메인 주소로 리다이렉트
export async function middleware(_request: NextRequest) {
  const jwt = cookies().get("dreaming_accessToken")

  if (!jwt) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`)
  }
}
