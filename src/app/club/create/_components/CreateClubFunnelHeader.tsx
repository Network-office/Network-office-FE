import { ChevronLeft } from "lucide-react"

interface CreateClubFunnelHeaderProps {
  nowStep: string
}

const HEADER_TEXT = {
  name: "동호회 이름 정하기",
  category: "동호회 분야 선택하기",
  location: "활동 지역 입력하기",
  schedule: "정모 주기 입력하기",
  memberLimit: "최대 인원 설정하기",
  finish: "동호회 생성 완료!"
} as const

const CreateClubFunnelHeader = ({ nowStep }: CreateClubFunnelHeaderProps) => {
  if (nowStep === "finish") return null

  return (
    <div className="flex h-[30px] my-auto gap-6 mt-2 ml-2">
      <p className="my-auto text-lg font-semibold">
        {HEADER_TEXT[nowStep as keyof typeof HEADER_TEXT]}
      </p>
    </div>
  )
}

export default CreateClubFunnelHeader
