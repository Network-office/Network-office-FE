"use client"

import { Suspense } from "react"
import Image from "next/image"
import React, { useEffect } from "react"
import { useSearchParams } from "next/navigation"

function LoginContent() {
  const params = useSearchParams()

  useEffect(() => {
    const code = params.get("code")
    if (code) {
      window.location.href = `https://localhost:3000/kakao/login/${code}`
    }
  }, [params])

  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}`
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          카카오 로그인
        </h1>
        <p className="text-center text-gray-600 mb-8">
          간편하게 카카오 계정으로 로그인하세요
        </p>
        <div className="flex justify-center">
          <Image
            src="/kakao_login.png"
            alt="Kakao Login"
            width={300}
            height={45}
            onClick={handleKakaoLogin}
            className="cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <LoginContent />
    </Suspense>
  )
}

export const dynamic = "force-dynamic"
