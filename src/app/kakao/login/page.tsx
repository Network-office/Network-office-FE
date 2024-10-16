"use client"

import Image from "next/image"
import React, { useEffect } from "react"

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

import { useSession } from "next-auth/react"

function Login() {
  const router = useRouter()
  const params = useSearchParams()

  //로그인 후 socialId받고 POST요청 보내는 로직
  //다시 redirectURL로 redirect되는데 이 때 성공 실패에 따라서 성공 시 -> 닉네임 입력 -> 프로필 사진 -> 본인 인증 절차

  //로그인 퍼널 -> 카카오 로그인 / [퍼널-닉네임 입력, 프로필 사진 본인 인증까지만]

  //소셜 ID로 바뀌어야 함

  useEffect(() => {
    if (params.get("code")) router.push(`/kakao/login/${params.get("code")}`)
  }, [params.get("code")])
  const handleKakaoLogin = () => {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?redirect_uri=http://localhost:3000/kakao/login&response_type=code&client_id=dda9ca07ec9d628b718b8475c11feec6"
  }

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
