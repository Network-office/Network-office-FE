import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

const verifyPhoneCode = async ({ phoneNumber }: { phoneNumber: string }) => {
  try {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]

    const response = await http("/api/v1/verification/phone/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-XSRF-TOKEN": xsrfToken + ""
      },
      credentials: "include",
      body: JSON.stringify({ phoneNumber })
    })
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw e
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
