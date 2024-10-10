import Chips from "@/_common/_components/Chips"
import Button from "@/_common/_components/Button"

interface CancelReasonModalProps {
  onCancel: () => void
  onConfirm: (reason: string) => void
}

const CancelReasonModal = ({ onCancel, onConfirm }: CancelReasonModalProps) => {
  const handleSelectionChange = (selectedReasons: string[]) => {
    if (selectedReasons.length > 0) {
      onConfirm(selectedReasons[0])
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white px-6 py-5 rounded-lg shadow-xl w-[70%] max-w-md">
        <h2 className="text-xl font-bold mb-4">파토 사유 선택</h2>
        <Chips
          selectionMode="single"
          onSelectionChange={handleSelectionChange}
          className="mb-4 mx-auto">
          <Chips.Chip
            className="text-sm text-center"
            label={"인원 수 미달로 인해 파토"}
          />
          <Chips.Chip
            className="text-sm"
            label={"개인사정으로 인한 파토"}
          />
        </Chips>
        <div className="flex justify-center">
          <Button
            onClick={onCancel}
            className="mr-2 px-4 py-2  rounded-md">
            취소
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CancelReasonModal
