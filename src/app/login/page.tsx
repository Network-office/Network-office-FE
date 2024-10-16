"use client"

import Image from "next/image"
import React from "react"
import { signIn } from "next-auth/react"
import { cva } from "class-variance-authority"

function Login() {
  const handleKakaoLogin = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/"
    })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <button onClick={handleKakaoLogin}>
          <Image
            src="/kakao_login.png"
            alt="kakaoLogin"
            className="object-cover"
            width={200} // 원하는 크기로 조정
            height={200} // 원하는 크기로 조정
          />
        </button>
      </div>
    </div>
  )
}

export default Login
