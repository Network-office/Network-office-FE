import { ChevronLeft } from "lucide-react"
import { finished } from "stream"

interface CreateMeetingFunnelHeaderProps {
  popStepHandler: () => void
  nowStep: string
}

const HEADER_TEXT = {
  title: "모임 제목 정하기",
  category: "모임 카테고리 선정하기",
  place: "모임 장소 정하기",
  activityTime: "모임 활동시간 정하기",
  personnel: "모임 인원수 정하기",
  detail: "모임 상세내용 작성하기",
  finish: "모임 생성 완료!"
} as const

const CreateMeetingFunnelHeader = ({
  popStepHandler,
  nowStep
}: CreateMeetingFunnelHeaderProps) => {
  if (nowStep === "finish") return <></>

  return (
    <div className="flex h-[30px] my-auto gap-6 mt-2 ml-2">
      <button
        onClick={popStepHandler}
        aria-label="이전 단계로 돌아가기"
        className="flex items-center">
        <ChevronLeft />
      </button>
      <p className="my-auto text-lg font-semibold">
        {HEADER_TEXT[nowStep as keyof typeof HEADER_TEXT]}
      </p>
    </div>
  )
}

export default CreateMeetingFunnelHeader
