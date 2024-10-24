import returnFetch, { FetchArgs } from "return-fetch"
import CustomError from "@/lib/CustomError"

const createHTTP = () => {
  return async <T>(
    input: URL | RequestInfo,
    init?: RequestInit
  ): Promise<{ data: T; status?: number }> => {
    return returnFetch({
      baseUrl: "",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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

export const clientHTTP = createHTTP()

export const http = <T>(
  input: URL | RequestInfo,
  init?: RequestInit
): Promise<{ data: T; status?: number }> => {
  if (typeof window !== "undefined") {
    return clientHTTP<T>(input, init)
  }

  return clientHTTP<T>(input, init)
}
