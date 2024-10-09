import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

const generatePhoneVerificationCode = async ({
  phoneNumber
}: {
  phoneNumber: string
}) => {
  try {
    return await http<{
      code: "string"
      phoneNumber: "string"
    }>("/dev/api/v1/verification/phone/code", {
      method: "POST",
      body: JSON.stringify({ phoneNumber })
    })
  } catch (e) {
    throw e
  }
}

export const useGeneratePhoneVerification = () => {
  return useMutation({
    mutationFn: generatePhoneVerificationCode
  })
}
