import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

//로그인 성공 시 redirect주소로

interface KakaoOAuthLoginReq {
  socialId: string
}

export const kakaoOAuthLogin = async ({ socialId }: KakaoOAuthLoginReq) => {
  try {
    await http<{ code: string }>("/api/v1/login/oauth", {
      method: "POST",
      body: JSON.stringify({ socialId })
    })
  } catch (e) {
    throw e
  }
}

export const useKakaoOAuthMutation = () => {
  return useMutation({
    mutationFn: kakaoOAuthLogin
  })
}
