"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import { useKakaoOAuthMutation } from "@/app/kakao/_hooks/_mutations/useKakaoMutation"

import { UserSignInProvider } from "@/app/kakao/_context/signinContext"
import { SuccessLogin } from "@/app/kakao/_components/SuccessLogin"
import { useToast } from "@/_common/_hooks/useToast"
import { useRouter } from "next/navigation"
import { useGetCSRFToken } from "@/app/kakao/_api/auth/csrf"
import { useUpdateProfileImageMutation } from "@/app/kakao/_hooks/_mutations/useUpdateProfile"
import { useUpdateNicknameMutation } from "@/app/kakao/_hooks/_mutations/useUpdateNickname"
import { useState } from "react"
import NickNameForm from "@/app/kakao/_components/NickNameForm"
import Step from "@/_common/_hooks/useFunnel/_component/Step"
import AvatarForm from "@/app/kakao/_components/AvatarForm"

const KakaoLoginWithSocialId = ({
  params
}: {
  params: { socialid: string }
}) => {
  const mutation = useKakaoOAuthMutation()
  const router = useRouter()
  const { mutate } = useGetCSRFToken()
  const [errorState, setErrorState] = useState(false)
  const { mutate: updateNickname } = useUpdateNicknameMutation()
  const { mutate: updateProfileImage } = useUpdateProfileImageMutation()
  const { toast } = useToast()

  const handleLoginSuccess = () => {
    if (errorState) {
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
          onError: () => {
            toast({
              type: "background",
              title: "로그인에 실패하였습니다!",
              color: "red"
            })
          }
        }
      )
    } else {
      router.push("/meeting")
    }
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
                mutation.mutate(
                  { code: params.socialid },
                  {
                    onSuccess: () => {
                      setErrorState(false)
                      updateNickname(
                        { nickname },
                        {
                          onSuccess: () => {
                            setStep("profileAvatar")
                          },
                          onError: (e) => {
                            toast({
                              duration: 1000,
                              title: e.message,
                              type: "background"
                            })
                          }
                        }
                      )
                    },
                    onError: () => {
                      setErrorState(true)
                    }
                  }
                )
              }}
            />
          </Step>
          <Step name="profileAvatar">
            <AvatarForm
              onSubmit={(profileimage) => {
                updateProfileImage(profileimage, {
                  onSuccess: () => {
                    setStep("verify-user-info")
                  },
                  onError: (err) => {
                    toast({
                      duration: 1000,
                      title: "사비스를 이용할 수 없어요!",
                      type: "background"
                    })
                  }
                })
              }}
            />
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
