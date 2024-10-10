import { useState } from "react"
import useCloseMeeting from "../_hooks/_mutations/useCloseMeeting"
import useCancelMeeting from "../_hooks/_mutations/useCancelMeeting"
import CancelReasonModal from "./CancleReasonModal"

interface MeetingOptionModalProps {
  meetingId: number
  onClose: () => void
}

const MeetingOptionModal = ({
  meetingId,
  onClose
}: MeetingOptionModalProps) => {
  const [showCancelReason, setShowCancelReason] = useState(false)
  const closeMeetingMutation = useCloseMeeting()
  const cancelMeetingMutation = useCancelMeeting()

  const handleCloseMeeting = () => {
    closeMeetingMutation.mutate(meetingId, {
      onSuccess: () => {
        alert("모임이 성공적으로 마감되었습니다.")
        onClose()
      },
      onError: (error) => {
        alert(`모임 마감 중 오류가 발생했습니다: ${error.message}`)
      }
    })
  }

  const handleCancelMeeting = (reason: string) => {
    cancelMeetingMutation.mutate(
      { meetingId, reason },
      {
        onSuccess: () => {
          alert("모임이 성공적으로 취소되었습니다.")
          setShowCancelReason(false)
          onClose()
        },
        onError: (error) => {
          alert(`모임 취소 중 오류가 발생했습니다: ${error.message}`)
        }
      }
    )
  }

  return (
    <>
      <div className="w-[90%] h-[280px] z-50 bg-white left-1/2 top-[30%] -translate-x-1/2 -translate-y-[30%] absolute rounded-sm  shadow-xl">
        <h1 className="text-xl px-4 py-4 font-medium ">모임 관리</h1>
        <div className="flex flex-col gap-4">
          <button className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
            게시글 수정하기
          </button>
          <button
            onClick={handleCloseMeeting}
            className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
            모집 마감하기
          </button>
          <button
            onClick={() => setShowCancelReason(true)}
            className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
            모임 파토하기
          </button>
        </div>
      </div>
      {showCancelReason && (
        <CancelReasonModal
          onCancel={() => setShowCancelReason(false)}
          onConfirm={handleCancelMeeting}
        />
      )}
    </>
  )
}

export default MeetingOptionModal
