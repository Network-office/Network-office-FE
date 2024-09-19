"use client"

import { ArrowLeft } from "lucide-react"
import ParticipateItem from "./ParticipateItem"
import useGetNewParticipator from "../../_hooks/_quries/useGetNewParticipator"
import useAcceptNewParticipator from "../../_hooks/_mutations/useAcceptNewParticipator"
import { useQueryClient } from "@tanstack/react-query"

const getNewParticipatorsQueryKey = (meetingId: number) => [
  "newParticipator",
  meetingId
]

interface NewParticipateModalProps {
  meetingId: number
  onClickModalCloseHandle: () => void
}

const NewParticipateModal = ({
  meetingId,
  onClickModalCloseHandle
}: NewParticipateModalProps) => {
  const queryClient = useQueryClient()
  const { data: newParticipators } = useGetNewParticipator(meetingId)
  const { mutate } = useAcceptNewParticipator()

  const handleOptimisticUpdate = (userId: number) => {
    queryClient.setQueryData(
      getNewParticipatorsQueryKey(meetingId),
      (oldData: any) =>
        oldData?.filter((participator: any) => participator.userId !== userId)
    )
  }

  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex px-2 py-2">
        <button
          className="ml-1"
          onClick={onClickModalCloseHandle}>
          <ArrowLeft />
        </button>
        <h1 className="text-xl px-3 py-2 font-medium">모임 참가 신청 관리</h1>
      </div>
      <ul>
        {newParticipators && newParticipators.length ? (
          newParticipators.map(({ nickName, message, userId }) => (
            <li key={userId}>
              <ParticipateItem
                nickName={nickName}
                message={message}
                onAcceptHandle={() =>
                  mutate(
                    { meetingId, userId },
                    {
                      onSuccess: () => handleOptimisticUpdate(userId),
                      onError: () => alert("네트워크 에러")
                    }
                  )
                }
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
