import { useMutation } from "@tanstack/react-query"
import { useGetCSRFToken } from "../../_api/auth/csrf"

const generatePhoneVerificationCode = async ({
  phoneNumber
}: {
  phoneNumber: string
}): Promise<{ code: string }> => {
  try {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]

    const response = await fetch("/api/v1/verification/phone/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-XSRF-TOKEN": xsrfToken + ""
      },
      credentials: "include",
      body: JSON.stringify({ phoneNumber: phoneNumber.replaceAll("-", "") })
    })

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await response.json()
    return data
  } catch (e) {
    throw e
  }
}

export const useGeneratePhoneVerification = () => {
  const newCsrfToken = useGetCSRFToken()
  return useMutation({
    mutationFn: generatePhoneVerificationCode,
    onMutate: ({ phoneNumber }) => {
      newCsrfToken.mutate()
      generatePhoneVerificationCode({ phoneNumber })
    },
    onError: () => {
      newCsrfToken.mutate()
    }
  })
}
