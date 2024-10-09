"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import { useKakaoOAuthMutation } from "@/app/api/kakao/useKakaoMutation"
import { useEffect } from "react"
import NickNameForm from "@/app/kakao/_components/NickNameForm"
import Step from "@/_common/_hooks/useFunnel/_component/Step"
import { UserSignInProvider } from "@/app/kakao/_context/signinContext"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import AvatarForm from "@/app/kakao/_components/AvatarForm"

const KakaoLoginWithSocialId = ({
  params
}: {
  params: { socialid: string }
}) => {
  const mutation = useKakaoOAuthMutation()
  const router = useRouter()

  useEffect(() => {
    console.log(params)
    if (params.socialid) {
      mutation.mutate(
        { code: params.socialid },
        {
          onSuccess: () => {
            alert("로그인 성공")
          },
          onError: (error) => {
            console.error("로그인 실패:", error)
            alert("로그인에 실패했습니다. 다시 시도해주세요.")
          }
        }
      )
    } else {
      console.error("소셜 ID가 없습니다.")
    }
  }, [params.socialid])

  const steps = ["nickname", "profileAvatar", "verify-user-info"]
  const { Funnel, setStep } = useFunnel(steps)

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
