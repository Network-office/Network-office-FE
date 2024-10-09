import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

const verifyPhoneCode = async ({ phoneNumber }: { phoneNumber: string }) => {
  try {
    return await http<string>("/dev/api/v1/verification/phone/verify", {
      method: "POST",
      body: JSON.stringify(phoneNumber)
    })
  } catch (e) {
    throw e
  }
}

export const useVerifyPhoneCode = () => {
  return useMutation({
    mutationFn: verifyPhoneCode
  })
}
