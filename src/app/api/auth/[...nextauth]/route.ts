import { makeToken, makeRefreshToken, verifyToken } from "@/app/lib"

import NextAuth from "next-auth/next"
import KakaoProvider from "next-auth/providers/kakao"
import type { DefaultUser } from "next-auth"
import { cookies } from "next/headers"

interface KakaoUser extends DefaultUser {
  connected_at: string
  kakao_account: {
    profile: {
      profile_image_url: string
      nickname: string
    }
    email: string
  }
}

const handler = NextAuth({
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt",
    //하루 동안 세션 유지
    maxAge: 24 * 60 * 60
  },
  logger: {},
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || "",
      profile(profile, tokens) {
        return profile
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      try {
        const { kakao_account } = profile as KakaoUser
        const refreshToken = makeRefreshToken(user.id)

        cookies().set("accessToken", makeToken(user.id), {
          sameSite: "strict",
          secure: true,
          maxAge: 60 * 60 * 1000,
          httpOnly: true
        })

        cookies().set("refreshToken", refreshToken, {
          sameSite: "strict",
          secure: true,
          maxAge: 60 * 60 * 24 * 7 * 1000,
          httpOnly: true
        })
      } catch (e) {
        console.error(e)
      }

      return token
    },
    async session({ session, token }) {
      const sessionUser = {
        ...token
      }

      try {
        delete sessionUser?.refreshToken
      } catch (e) {
        console.error(e)
      }
      session.user = sessionUser
      return session
    }
  }
})

export { handler as GET, handler as POST }
