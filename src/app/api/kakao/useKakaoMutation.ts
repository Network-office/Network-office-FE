import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

//로그인 성공 시 redirect주소로

interface KakaoOAuthLoginReq {
  code: string
}

export const kakaoOAuthLogin = async ({ code }: KakaoOAuthLoginReq) => {
  try {
    const response = await fetch(`/dev/api/v1/login/oauth/kakao?code=${code}`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accpet: "*",
        "Access-Control-Allow-Origin": "*"
      }
    })

    return response
  } catch (e) {
    throw e
  }
}

export const useKakaoOAuthMutation = () => {
  return useMutation({
    mutationFn: kakaoOAuthLogin
  })
}
