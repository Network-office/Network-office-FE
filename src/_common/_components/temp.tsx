import { useEffect } from "react"
import CustomError from "@/lib/CustomError"

export default function Temp() {
  useEffect(() => {
    throw new CustomError("페이지를 발견할 수 없습니다", 400)
  }, [])
  return <div></div>
}
