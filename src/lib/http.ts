import returnFetch, { FetchArgs } from "return-fetch"

const createApiFetch = () => {
  return async <T>(
    input: URL | RequestInfo,
    init?: RequestInit
  ): Promise<{ data: T }> => {
    return returnFetch({
      //로컬 or 서버 환경 구분하는 유틸 필요
      baseUrl: "",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      interceptors: {
        request: async (config: FetchArgs) => {
          //요청에 헤더 있을 시 병합
          config[1] = {
            ...config[1],
            ...init
          }
          return config
        },

        response: async (response: Response) => {
          const responseBody = await response.json()

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
export const clientApiFetch = createApiFetch()

// 환경에 따라 적절한 함수를 선택하는 래퍼 함수
export const apiFetch = <T>(
  input: URL | RequestInfo,
  init?: RequestInit
): Promise<{ data: T }> => {
  if (typeof window !== "undefined") {
    return clientApiFetch<T>(input, init)
  }

  //Todo-서버 사이드 용 fetch함수
  return clientApiFetch<T>(input, init)
}
