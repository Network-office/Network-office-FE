"use client"

import { ArrowLeft } from "lucide-react"
import ParticipateItem from "./ParticipateItem"
import useGetNewParticipator from "../../_hooks/_quries/useGetNewParticipator"

interface NewParticipateModalProps {
  meetingId: number
  onClickModalCloseHandle: () => void
}

const NewParticipateModal = ({
  meetingId,
  onClickModalCloseHandle
}: NewParticipateModalProps) => {
  const { data: newParticipators } = useGetNewParticipator(meetingId)

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
        {newParticipators && newParticipators.length ? (
          newParticipators.map(({ nickName, message, meetingId, userId }) => (
            <li key={meetingId}>
              <ParticipateItem
                userId={userId}
                meetingId={meetingId}
                nickName={nickName}
                message={message}
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
