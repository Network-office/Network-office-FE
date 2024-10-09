import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

//로그인 성공 시 redirect주소로

interface KakaoOAuthLoginReq {
  code: string
}

export const kakaoOAuthLogin = async ({ code }: KakaoOAuthLoginReq) => {
  try {
    await http<{ code: string }>("api/v1/login/oauth", {
      method: "POST",
      body: JSON.stringify({ code })
    })
  } catch (e) {
    throw e
  }
}

export const useKakaoOAuthMutation = () => {
  return useMutation({
    mutationFn: kakaoOAuthLogin,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  })
}
