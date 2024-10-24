"use client"

import Topbar from "@/_common/_components/Topbar"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface CreateClubFunnelHeaderProps {
  nowStep: string
  popStep: () => void
}

const HEADER_TEXT = {
  name: "동호회 이름 정하기",
  category: "동호회 분야 선택하기",
  location: "활동 지역 입력하기",
  schedule: "정모 주기 입력하기",
  memberLimit: "최대 인원 설정하기",
  finish: "동호회 생성 완료!"
} as const

const CreateClubFunnelHeader = ({
  nowStep,
  popStep
}: CreateClubFunnelHeaderProps) => {
  const router = useRouter()

  if (nowStep === "finish") return null

  const handleBackButton = () => {
    if (nowStep === "name") {
      router.push("/club")
    } else if (nowStep !== "finish") {
      popStep()
    }
  }

  return (
    <Topbar
      leftContent={
        <div className="flex items-center gap-2">
          <button onClick={handleBackButton}>
            <ChevronLeft />
          </button>
          <p className="text-lg font-semibold">
            {HEADER_TEXT[nowStep as keyof typeof HEADER_TEXT]}
          </p>
        </div>
      }
    />
  )
}

export default CreateClubFunnelHeader
