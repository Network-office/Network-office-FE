import { ChevronLeft } from "lucide-react"

interface CreateMeetingFunnelHeaderProps {
  popStepHandler: () => void
  nowStep: string
}

const HEADER_TEXT = {
  title: "모임 제목 정하기",
  category: "모임 카테고리 선정하기",
  place: "모임 장소 정하기",
  date: "모임 날짜 정하기",
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
  console.log(nowStep)
  return (
    <div className="flex h-[50px] my-auto gap-6 pt-1 pl-2 bg-slate-100 drop-shadow-md">
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
