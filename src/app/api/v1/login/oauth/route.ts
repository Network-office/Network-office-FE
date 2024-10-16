import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { makeToken } from "@/lib/token"

interface KakaoOAuthLoginReq {
  code: string
}

export async function POST(request: Request) {
  try {
    const body: KakaoOAuthLoginReq = await request.json()
    const { code } = body

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const accessToken = makeToken(code)

    cookies().set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
      path: "/"
    })

    // Return a success response
    return NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error in Kakao OAuth login:", error)
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 }
    )
  }
}
