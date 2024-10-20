"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import { useKakaoOAuthMutation } from "@/app/api/kakao/useKakaoMutation"

import NickNameForm from "@/app/kakao/_components/NickNameForm"
import Step from "@/_common/_hooks/useFunnel/_component/Step"
import { UserSignInProvider } from "@/app/kakao/_context/signinContext"
import { SuccessLogin } from "@/app/kakao/_components/SuccessLogin"
import { useRouter } from "next/navigation"
import { useGetCSRFToken } from "@/app/api/auth/csrf"
import { toast } from "@/_common/_hooks/useToast"
import AvatarForm from "@/app/kakao/_components/AvatarForm"
import { useEffect } from "react"

const KakaoLoginWithSocialId = ({
  params
}: {
  params: { socialid: string }
}) => {
  const { mutate: getCSRF } = useGetCSRFToken()
  const mutation = useKakaoOAuthMutation()
  const router = useRouter()
  const { mutate } = useGetCSRFToken()
  useEffect(() => {
    mutate()
  }, [])

  const handleLoginSuccess = () => {
    mutation.mutate(
      { code: params.socialid },
      {
        onSuccess: () => {
          getCSRF()
          toast({
            title: "로그인 성공",
            description: "로그인에 성공하셨어요"
          })

          router.push("/meeting")
        }
      }
    )
  }

  const steps = ["nickname", "profileAvatar", "verify-user-info"]
  const { Funnel, setStep } = useFunnel(steps)

  return (
    <UserSignInProvider>
      <div>
        <SuccessLogin onLoginSuccess={handleLoginSuccess} />
      </div>
    </UserSignInProvider>
  )
}

export default KakaoLoginWithSocialId
