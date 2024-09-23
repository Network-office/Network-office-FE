"use client"

import Image from "next/image"
import React from "react"
import { signIn } from "next-auth/react"

import { useSession } from "next-auth/react"

function Login() {
  const { data } = useSession()

  //로그인 후 socialId받고 POST요청 보내는 로직
  //다시 redirectURL로 redirect되는데 이 때 성공 실패에 따라서 성공 시 -> 닉네임 입력 -> 프로필 사진 -> 본인 인증 절차

  //로그인 퍼널 -> 카카오 로그인 / [퍼널-닉네임 입력, 프로필 사진 본인 인증까지만]

  //소셜 ID로 바뀌어야 함
  const handleKakaoLogin = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: `/kakao/login/${data?.user?.id + ""}`
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
