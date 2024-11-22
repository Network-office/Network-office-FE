import returnFetch, { FetchArgs } from "return-fetch"
import CustomError from "@/lib/CustomError"

const createHTTP = () => {
  return async <T>(
    input: URL | RequestInfo,
    init?: RequestInit
  ): Promise<{ data: T; status?: number }> => {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]

    return returnFetch({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "XSRF-TOKEN": xsrfToken + ""
      },
      interceptors: {
        request: async (config: FetchArgs) => {
          config[1] = {
            ...config[1],
            ...init
          }
          return config
        },
        response: async (response: Response) => {
          let responseBody
          const text = await response.text()
          responseBody = text ? JSON.parse(text) : { data: "success" }

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
