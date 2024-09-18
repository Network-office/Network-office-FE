import { ArrowLeft } from "lucide-react"
import ParticipateItem from "./ParticipateItem"

interface NewParticipateModalProps {
  onClickModalCloseHandle: () => void
}

const participateMockData = [
  {
    id: 1,
    nickName: "김댕댕",
    message:
      "제발 뽑아주세요.제발 뽑아주세요.제발 뽑아주세요.제발 뽑아주세요.제발 뽑아주세요.제발 뽑아주세요.제발 뽑아주세요."
  }
]

const NewParticipateModal = ({
  onClickModalCloseHandle
}: NewParticipateModalProps) => {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex px-2 py-2">
        <button
          className="ml-1"
          onClick={onClickModalCloseHandle}>
          <ArrowLeft />
        </button>
        <h1 className="text-xl px-3 py-2 font-medium">모임 참가 신청 관리 </h1>
      </div>
      <ul>
        {participateMockData.length ? (
          participateMockData.map((newParticipator) => (
            <li
              key={newParticipator.id}
              className="border-b-[1px] border-t-[1px] h-[200px] pt-4 mb-1">
              <ParticipateItem
                nickName={newParticipator.nickName}
                message={newParticipator.message}
              />
            </li>
          ))
        ) : (
          <p>신청자가 없습니다</p>
        )}
      </ul>
    </div>
  )
}

export default NewParticipateModal
