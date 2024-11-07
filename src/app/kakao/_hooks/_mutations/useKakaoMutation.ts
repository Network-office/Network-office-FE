import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

interface KakaoOAuthLoginReq {
  code: string
}

export const kakaoOAuthLogin = async ({ code }: KakaoOAuthLoginReq) => {
  try {
    const response = await http(`/api/v1/login/oauth/kakao?code=${code}`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accpet: "*",
        "Access-Control-Allow-Origin": "*"
      }
    })

    if (response.status === 200) {
      return { data: "success" }
    }

    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const useKakaoOAuthMutation = () => {
  return useMutation({
    mutationFn: kakaoOAuthLogin
  })
}
