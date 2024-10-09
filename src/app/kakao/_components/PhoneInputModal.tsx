import { useState, useEffect } from "react"
import { Input } from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useGeneratePhoneVerification } from "@/app/api/phone/useGeneratePhoneVerfification"
import { useRouter } from "next/navigation"

interface PhoneInputModalProps {
  onConfirm?: (phone: string) => void
  onModalClose?: () => void
}

export const PhoneInputModal = ({
  onConfirm,
  onModalClose
}: PhoneInputModalProps) => {
  const [isVerifying, setIsVerifying] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    mode: "onChange"
  })
  const { mutate } = useGeneratePhoneVerification()

  useEffect(() => {
    const handleFocus = () => {
      if (isVerifying) {
        setIsVerifying(false)
        // 여기에서 인증 완료 후의 로직을 처리할 수 있습니다.
        // 예: API 호출을 통해 인증 상태 확인
      }
    }

    window.addEventListener("focus", handleFocus)
    return () => window.removeEventListener("focus", handleFocus)
  }, [isVerifying])

  const onSubmit = (data: { phoneNumber: string }) => {
    if (onConfirm) {
      onConfirm(data.phoneNumber)
    }
  }

  const phoneNumber = watch("phoneNumber")

  const handleVerification = () => {
    mutate(
      { phoneNumber },
      {
        onSuccess: (data) => {
          setIsVerifying(true)
          const verificationUrl = `/dev.networkoffice@gmail.com/${data.data.code}`
          window.open(verificationUrl, "_blank")
        }
      }
    )
  }

  return (
    <div
      className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg w-full h-full"
      onClick={onModalClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[350px] h-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">핸드폰 인증</h2>
        <form
          onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
          className="w-full">
          <Input
            type="tel"
            placeholder="핸드폰 번호를 입력하세요"
            {...register("phoneNumber", {
              required: "핸드폰 번호를 입력해주세요",
              pattern: {
                value: /^010-\d{4}-\d{4}$/,
                message: "010-xxxx-xxxx 형식으로 입력해주세요"
              }
            })}
            className="mb-2 w-full"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mb-4">
              {errors.phoneNumber.message as string}
            </p>
          )}
          <Button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
            onClick={handleVerification}
            disabled={!!errors.phoneNumber || isVerifying}>
            {isVerifying ? "인증 진행 중..." : "인증문자 보내기"}
          </Button>
        </form>
      </div>
    </div>
  )
}
