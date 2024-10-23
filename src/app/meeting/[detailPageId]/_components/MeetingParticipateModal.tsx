"use client"
import { useState } from "react"
import useParticipateMeeting from "../_hooks/_mutations/useParticipateMeeting"
import { useToast } from "@/_common/_hooks/useToast"

interface MeetingParticipateModalProps {
  onMeetingModalClose: () => void
  meetingId: number
}

const MeetingParticipateModal = ({
  onMeetingModalClose,
  meetingId
}: MeetingParticipateModalProps) => {
  const { mutate } = useParticipateMeeting()
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const onClickSubmitButton = () => {
    if (message.length >= 10) {
      mutate(
        { meetingId, message, userId: 1 },
        {
          onSuccess: () => {
            onMeetingModalClose()
            toast({
              width: "300px",
              height: "80px",
              title: "모임 참가 신청이 완료됐습니다!",
              description: "모임 주최자에게 신청 메시지를 보냈습니다."
            })
          },
          onError: () => {
            toast({
              width: "300px",
              height: "80px",
              title: "모임 참가 신청 실패했습니다",
              description: "다시 시도해주세요."
            })
          }
        }
      )
    } else {
      toast({
        width: "300px",
        height: "50px",
        title: "메시지는 10글자 이상 작성해야 합니다."
      })
    }
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <>
      <h1 className="text-xl font-semibold px-1">모임 참가 신청</h1>
      <textarea
        placeholder="모임 주최자에게 보낼 간략한 자기소개를 최소 10글자 이상 작성해주세요."
        className="placeholder:text-sm w-[350px] h-[180px] mt-2 border-[1px] rounded-sm px-2 py-2 focus:outline-none whitespace-pre-wrap"
        value={message}
        onChange={handleChangeMessage}
      />
      <div className="flex justify-between px-2 mt-2">
        <button
          onClick={onClickSubmitButton}
          aria-label="meetingParticipateSubmit"
          className="w-[48%] h-[35px] rounded-sm shadow-lg bg-blue-200 text-white font-semibold">
          신청
        </button>
        <button
          onClick={onMeetingModalClose}
          aria-label="meetingParticipateCancel"
          className="w-[48%] h-[35px] rounded-sm shadow-lg bg-blue-200 text-white font-semibold">
          취소
        </button>
      </div>
    </>
  )
}

export default MeetingParticipateModal
