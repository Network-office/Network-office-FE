"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import { useKakaoOAuthMutation } from "@/app/kakao/_hooks/_mutations/useKakaoMutation"

import { UserSignInProvider } from "@/app/kakao/_context/signinContext"
import { SuccessLogin } from "@/app/kakao/_components/SuccessLogin"
import { useToast } from "@/_common/_hooks/useToast"
import { useRouter } from "next/navigation"
import { useGetCSRFToken } from "@/app/kakao/_api/auth/csrf"
import { useUpdateNicknameMutation } from "@/app/kakao/_hooks/_mutations/useUpdateNickname"
import { useEffect } from "react"
import NickNameForm from "../../_components/NickNameForm"
import Step from "@/_common/_hooks/useFunnel/_component/Step"
import AvatarForm from "../../_components/AvatarForm"

const KakaoLoginWithSocialId = ({
  params
}: {
  params: { socialid: string }
}) => {
  const mutation = useKakaoOAuthMutation()
  const router = useRouter()
  const { mutate } = useGetCSRFToken()
  const { mutate: updateNickname } = useUpdateNicknameMutation()
  const { toast } = useToast()

  useEffect(() => {
    mutate()
  }, [])

  const handleLoginSuccess = () => {
    mutation.mutate(
      { code: params.socialid },
      {
        onSuccess: () => {
          toast({
            title: "로그인 성공",
            description: "로그인에 성공하셨어요"
          })
          mutate()

          router.push("/meeting")
        },
        onError: (e) => {
          console.log(e)
          toast({
            type: "background",
            title: "로그인에 실패하였습니다!",
            color: "red"
          })
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
            <NickNameForm
              onSubmit={(nickname: string) => {
                updateNickname(
                  { nickname },
                  {
                    onSuccess: () => {
                      setStep("profileAvatar")
                    },
                    onError: () => {
                      toast({
                        duration: 1000,
                        title: "사비스를 이용할 수 없어요!",
                        type: "background"
                      })
                    }
                  }
                )
              }}
            />
          </Step>
          <Step name="profileAvatar">
            <AvatarForm />
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
