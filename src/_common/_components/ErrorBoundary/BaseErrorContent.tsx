"use client"

import { CircleX } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const ERROR_TEXT: Record<number, { title: string; message: string }> = {
  400: {
    title: "잘못된 방식으로 접근하셨어요",
    message: "요청이 올바르지 않습니다. 입력값을 확인해주세요."
  },
  401: {
    title: "로그인이 필요한 서비스입니다.",
    message: "로그인 후 다시 시도해주세요."
  },
  402: {
    title: "접근 제한된 페이지입니다.",
    message: "이 작업을 완료하려면 결제가 필요합니다."
  },
  404: {
    title: "페이지를 찾을 수 없습니다.",
    message: "요청하신 페이지가 존재하지 않습니다. URL을 확인해주세요."
  }
}
interface BaseErrorContentProps {
  status: number
}

const BaseErrorContent = ({ status }: BaseErrorContentProps) => {
  const router = useRouter()

  const errorTitle = ERROR_TEXT[status].title
  const errorMessage = ERROR_TEXT[status].message

  const onClickBackButton = () => {
    const referrer = document.referrer

    if (referrer.includes(window.location.hostname)) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <CircleX className="text-red-500 w-[25%] h-[25%] mx-auto" />
      <h1 className="mt-[20px] font-semibold text-2xl text-center">
        {errorTitle}
      </h1>
      <p className="text-center text-[10px] mt-[3px]">{errorMessage}</p>
      <div className="flex justify-center mt-2">
        <button
          onClick={onClickBackButton}
          className="w-[220px] h-[50px] mt-[20px] mx-auto text-xl font-medium bg-blue-300 text-white rounded-sm shadow-lg ">
          돌아가기
        </button>
      </div>
    </div>
  )
}

export default BaseErrorContent
