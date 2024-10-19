import returnFetch, { FetchArgs } from "return-fetch"
import CustomError from "@/lib/CustomError"

const getCookieValue = (name: string): string | undefined => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(";").shift()
  return undefined // 값을 찾지 못했을 경우 undefined 반환
}

const createHTTP = () => {
  return async <T>(
    input: URL | RequestInfo,
    init?: RequestInit
  ): Promise<{ data: T; status?: number }> => {
    const xsrfToken = getCookieValue("XSRF-TOKEN")

    const response = await returnFetch({
      ...init,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "X-XSRF-TOKEN": xsrfToken || "" // 값이 없을 경우 빈 문자열 사용
      },
      interceptors: {
        request: async (config: FetchArgs) => {
          return config
        },
        response: async (response: Response) => {
          const responseBody = await response.json()

          if (response.status >= 400) {
            console.error(response)
            throw new CustomError(
              response.statusText || "Unknown Error",
              response.status
            )
          }

          return new Response(JSON.stringify(responseBody))
        }
      }
    })(input, init)

    const data = await response.json()
    return { data, status: response.status }
  }
}

// 클라이언트 사이드용 함수
export const clientHTTP = createHTTP()

// 환경에 따라 적절한 함수를 선택하는 래퍼 함수
export const http = <T>(
  input: URL | RequestInfo,
  init?: RequestInit
): Promise<{ data: T; status?: number }> => {
  if (typeof window !== "undefined") {
    return clientHTTP<T>(input, init)
  }

  // 서버 사이드용 fetch 함수
  return clientHTTP<T>(input, init)
}
