"use client"

import Image from "next/image"
import React from "react"
import { cva } from "class-variance-authority"

function Login() {
  const handleKakaoLogin = async () => {}

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <button onClick={handleKakaoLogin}>
          <Image
            src="/kakao_login.png"
            alt="kakaoLogin"
            className="object-cover"
            width={200}
            height={200}
          />
        </button>
      </div>
    </div>
  )
}

export default Login
