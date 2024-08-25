import ky from "ky"
//prefixapi -> 서버 주소로 고정
export const http = ky.create({
  prefixUrl: "/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})
