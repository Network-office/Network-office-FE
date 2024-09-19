"use client"

import useModal from "@/_common/_hooks/useModal"
import { ArrowLeft } from "lucide-react"
import ParticipateItem from "./ParticipateItem"
import useGetNewParticipator from "../_hooks/_quries/useGetNewParticipator"
import useAcceptNewParticipator from "../_hooks/_mutations/useAcceptNewParticipator"
import useRefuseNewParticipator from "../_hooks/_mutations/useRefuseNewParticipator"
import { useQueryClient } from "@tanstack/react-query"
import { NewParticipatorTypes } from "../types"
import ParticipateRefuseModal from "./ParticipatorRefuseModal"
import { useState } from "react"

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
  const { ModalComponent, setModalOpen, setModalClose } = useModal()
  const { data: newParticipators } = useGetNewParticipator(meetingId)

  const { mutate: acceptMutate } = useAcceptNewParticipator()
  const { mutate: refuseMutate } = useRefuseNewParticipator()

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

  const handleOptimisticUpdate = (userId: number) => {
    queryClient.setQueryData(
      getNewParticipatorsQueryKey(meetingId),
      (oldData: NewParticipatorTypes[]) =>
        oldData?.filter(
          (participator: NewParticipatorTypes) => participator.userId !== userId
        )
    )
  }

  const handleOpenRefuseModal = (userId: number) => {
    setSelectedUserId(userId)
    setModalOpen()
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
                onRefuseHandle={() => handleOpenRefuseModal(userId)}
                onAcceptHandle={() =>
                  acceptMutate(
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
      <ModalComponent className="w-screen h-screen">
        <ParticipateRefuseModal
          onSubmitModalHandle={(refuseText: string) => {
            if (selectedUserId !== null) {
              refuseMutate(
                { meetingId, userId: selectedUserId, refuseText },
                {
                  onSuccess: () => {
                    handleOptimisticUpdate(selectedUserId)
                    setSelectedUserId(null)
                  }
                }
              )
              setModalClose()
            }
          }}
          onExitModalHandle={setModalClose}
        />
      </ModalComponent>
    </div>
  )
}

export default NewParticipateModal
