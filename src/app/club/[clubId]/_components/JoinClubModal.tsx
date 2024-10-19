import { useState } from "react"
import Button from "@/_common/_components/Button"
import { Input } from "@/_common/_components/Input"
import { X } from "lucide-react"

interface JoinClubModalProps {
  onClose: () => void
  onSubmit: (message: string) => void
}

const JoinClubModal = ({ onClose, onSubmit }: JoinClubModalProps) => {
  const [joinMessage, setJoinMessage] = useState("")

  const handleSubmit = () => {
    if (joinMessage.trim().length >= 10) {
      onSubmit(joinMessage)
    } else {
      alert("메시지는 10글자 이상 작성해야 합니다.")
    }
  }

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">클럽 가입 신청</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors">
          <X size={24} />
        </button>
      </div>
      <div className="p-4">
        <Input
          label="가입 신청 메시지"
          value={joinMessage}
          onChange={(e) => setJoinMessage(e.target.value)}
          className="mb-4"
          placeholder="클럽 운영자에게 보낼 간략한 자기소개를 최소 10글자 이상 작성해주세요."
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button
            onClick={onClose}
            variant="outline">
            취소
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={joinMessage.trim().length < 10}>
            신청하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JoinClubModal
