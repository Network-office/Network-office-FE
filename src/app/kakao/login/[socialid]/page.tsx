"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import { useKakaoOAuthMutation } from "@/app/api/kakao/useKakaoMutation"
import { useEffect } from "react"
import NickNameForm from "@/app/kakao/_components/NickNameForm"
import Step from "@/_common/_hooks/useFunnel/_component/Step"
import { UserSignInProvider } from "@/app/kakao/login/signinContext"
import { useSession } from "next-auth/react"
import AvatarForm from "@/app/kakao/_components/AvatarForm"

const KakaoLoginWithSocialId = ({
  params
}: {
  params: {
    socialId: string
  }
}) => {
  const mutation = useKakaoOAuthMutation()

  useEffect(() => {
    mutation.mutate({ code: params.socialId })
  }, [])

  const steps = ["nickname", "profileAvatar", "verify-user-info"]
  const { Funnel, step, setStep } = useFunnel(steps)

  return (
    <UserSignInProvider>
      <div>
        소셜ID를 받고 로그인 요청 실제 보내는 부분
        <Funnel>
          <Step name="nickname">
            <NickNameForm onSubmit={() => setStep("profileAvatar")} />
          </Step>
          <Step name="profileAvatar">
            <AvatarForm />
          </Step>
          <Step name="verify-user-info">
            <div></div>
          </Step>
        </Funnel>
      </div>
    </UserSignInProvider>
  )
}

export default KakaoLoginWithSocialId
