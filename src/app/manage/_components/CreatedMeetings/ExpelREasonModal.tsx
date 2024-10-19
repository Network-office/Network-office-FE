import { useState } from "react"
import Button from "@/_common/_components/Button"
import Chips from "@/_common/_components/Chips"

interface ExpelReasonModalProps {
  onClose: () => void
  onExpel: (reason: string) => void
}

const reasons = [
  "채팅방 도배",
  "채팅방내 욕설 및 모욕",
  "음란물, 성적수치심을 유발하는 행위",
  "광고",
  "정치적 / 종교적 발언",
  "범죄* 불법 행위"
]

const ExpelReasonModal: React.FC<ExpelReasonModalProps> = ({
  onClose,
  onExpel
}) => {
  const [selectedReason, setSelectedReason] = useState<string>("")

  const handleSelectionChange = (selectedIds: string[]) => {
    setSelectedReason(selectedIds[0])
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">추방 사유 선택</h2>
        <Chips
          selectionMode="single"
          onSelectionChange={handleSelectionChange}
          className="mb-4">
          {reasons.map((reason) => (
            <Chips.Chip
              key={reason}
              label={reason}
            />
          ))}
        </Chips>
        <div className="mt-4 flex justify-end">
          <Button
            onClick={onClose}
            className="mr-2">
            취소
          </Button>
          <Button
            onClick={() => {
              onExpel(selectedReason)
            }}
            disabled={!selectedReason}>
            추방
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ExpelReasonModal
