import { useMutation } from "@tanstack/react-query"

const generatePhoneVerificationCode = async ({
  phoneNumber
}: {
  phoneNumber: string
}) => {
  try {
    const response = await fetch("/server/api/v1/verification/phone/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phoneNumber })
    })
    return response
  } catch (e) {
    throw e
  }
}

export const useGeneratePhoneVerification = () => {
  return useMutation({
    mutationFn: generatePhoneVerificationCode
  })
}
