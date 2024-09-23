"use client"
import { useKakaoOAuthMutation } from "@/app/api/kakao/useKakaoMutation"
import { kakaoOAuthLogin } from "@/app/api/kakao/useKakaoMutation"
import { useEffect } from "react"
const KakaoLoginWithSocialId = ({
  params
}: {
  params: {
    socialId: string
  }
}) => {
  //socialID를 갖고 실제 POST요청 보내는 부분

  const { mutate } = useKakaoOAuthMutation()
  useEffect(() => {
    kakaoOAuthLogin({
      socialId: params.socialId
    })
  }, [])
  return <div>소셜ID를 받고 로그인 요청 실제 보내는 부분</div>
}

export default KakaoLoginWithSocialId
