import returnFetch, { FetchArgs } from "return-fetch"
import CustomError from "@/lib/CustomError"

const createHTTP = () => {
  return async <T>(
    input: URL | RequestInfo,
    init?: RequestInit
  ): Promise<{ data: T; status?: number }> => {
    return returnFetch({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
      },
      interceptors: {
        request: async (config: FetchArgs) => {
          config[1] = {
            ...config[1],
            ...init,
            credentials: "include"
          }
          const xsrfToken = (config[1].headers as Record<string, string>)[
            "XSRF-TOKEN"
          ]

          return config
        },
        response: async (response: Response) => {
          const responseBody = await response.json()

          if (response.status >= 400) {
            throw new CustomError(
              response.statusText || "Unknown Error",
              response.status
            )
          }

          return new Response(JSON.stringify(responseBody))
        }
      }
    })(input, init).then((response) =>
      response.json().then((data: T) => ({
        data
      }))
    )
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
