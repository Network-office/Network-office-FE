import returnFetch, { FetchArgs } from "return-fetch"

const baseApiFetch = () => {
  return async <T>(
    input: URL | RequestInfo,
    init?: RequestInit
    //data 제네릭으로 넘겨서 타입 추론하게
  ): Promise<{ data: T }> => {
    return returnFetch({
      baseUrl: "/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      interceptors: {
        request: async (config: FetchArgs) => {
          //request 인터셉터
          return config
        },

        response: async (response: Response) => {
          const responseBody = await response.json()

          return new Response(JSON.stringify(responseBody))
        }
      }
    })(input, init).then((response) =>
      response.json().then((data: T) => ({
        data,
        status: response.status
      }))
    )
  }
}

// 클라이언트 사이드용 함수
export const clientApiFetch = baseApiFetch()

export const apiFetch = <T>(
  input: URL | RequestInfo,
  init?: RequestInit
): Promise<{ data: T }> => {
  return clientApiFetch<T>(input, init)
}
