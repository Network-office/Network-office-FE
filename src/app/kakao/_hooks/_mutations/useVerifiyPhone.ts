import { useMutation } from "@tanstack/react-query"

const verifyPhoneCode = async ({ phoneNumber }: { phoneNumber: string }) => {
  try {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]
    const response = await fetch("/dev/api/v1/verification/phone/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      credentials: "include",
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
