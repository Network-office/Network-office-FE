import { makeToken, makeRefreshToken, verifyToken } from "@/lib/token"

import NextAuth from "next-auth/next"
import KakaoProvider from "next-auth/providers/kakao"

import { cookies } from "next/headers"

const handler = NextAuth({
  pages: {
    signIn: "kakao/login"
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60
  },
  logger: {},
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || "",
      profile(profile) {
        return profile
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      try {
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
        return {
          ...profile,
          ...account,
          ...user,
          ...token
        }
      } catch (e) {}

      return {
        ...profile,
        ...account,
        ...user,
        ...token
      }
    },
    async session({ session, user, token }) {
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
