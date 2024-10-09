"use client"

import { CircleX } from "lucide-react"

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const isNotFoundError = error.message.includes("NoData")
  const errorMessage = isNotFoundError
    ? "해당 페이지는 존재하지 않습니다"
    : "네트워크 연결 오류"

  return (
    <div className="h-screen">
      <div className="h-[90%] w-[92%] mt-4 mx-auto shrink-0 rounded-lg bg-gray-500 opacity-80 flex flex-col justify-center items-center">
        <CircleX
          stroke="red"
          className="mb-[30px] w-[50px] h-[50px]"
        />
        <span className="text-white">{errorMessage}</span>
        <button
          className="mt-[40px] w-[100px] h-[30px] text-center bg-blue-200 text-white rounded-md my-1"
          onClick={reset}>
          재시도하기
        </button>
      </div>
    </div>
  )
}
