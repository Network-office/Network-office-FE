import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

//로그인 성공 시 redirect주소로

interface KakaoOAuthLoginReq {
  code: string
}

export const kakaoOAuthLogin = async ({ code }: KakaoOAuthLoginReq) => {
  try {
    const response = await http<{ code: string }>(
      "/dev/api/v1/login/oauth/kakao",
      {
        method: "POST",
        body: JSON.stringify({ code }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    return response
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
