"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import { useKakaoOAuthMutation } from "@/app/api/kakao/useKakaoMutation"

import NickNameForm from "@/app/kakao/_components/NickNameForm"
import Step from "@/_common/_hooks/useFunnel/_component/Step"
import { UserSignInProvider } from "@/app/kakao/_context/signinContext"
import { SuccessLogin } from "@/app/kakao/_components/SuccessLogin"
import { useRouter } from "next/navigation"
import { toast } from "@/_common/_hooks/useToast"
import AvatarForm from "@/app/kakao/_components/AvatarForm"

const KakaoLoginWithSocialId = ({
  params
}: {
  params: { socialid: string }
}) => {
  const mutation = useKakaoOAuthMutation()
  const router = useRouter()

  const handleLoginSuccess = () => {
    mutation.mutate(
      { code: params.socialid },
      {
        onSuccess: () => {
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
        <Funnel>
          <Step name="nickname">
            <NickNameForm onSubmit={() => setStep("profileAvatar")} />
          </Step>
          <Step name="profileAvatar">
            <AvatarForm onSubmit={() => setStep("verify-user-info")} />
          </Step>
          <Step name="verify-user-info">
            <SuccessLogin onLoginSuccess={handleLoginSuccess} />
          </Step>
        </Funnel>
      </div>
    </UserSignInProvider>
  )
}

export default KakaoLoginWithSocialId
