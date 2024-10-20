import { useMutation } from "@tanstack/react-query"

const verifyPhoneCode = async ({ phoneNumber }: { phoneNumber: string }) => {
  try {
    const response = await fetch("/server/api/v1/verification/phone/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ phoneNumber })
    })
    return response
  } catch (e) {
    throw e
  }
}

export const useVerifyPhoneCode = () => {
  return useMutation({
    mutationFn: verifyPhoneCode
  })
}
