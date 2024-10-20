"use client"

import { useParams } from "next/navigation"
import useGetClubDetail from "./_hooks/_quries/useGetClubDetail"
import useJoinClub from "./_hooks/_mutations/useJoinClub"
import ClubIntroducePageHeader from "./_components/ClubIntroduceHeader"
import ClubIntroduceDetailSection from "./_components/ClubIntroduceDetailSection"
import Button from "@/_common/_components/Button"
import JoinClubModal from "./_components/JoinClubModal"
import useModal from "@/_common/_hooks/useModal"
import { useToast } from "@/_common/_hooks/useToast"
import ErrorBoundary from "@/_common/_components/ErrorBoundary"

const ClubDetailPage = () => {
  const { clubId } = useParams()
  const { data: clubData } = useGetClubDetail(clubId as string)
  const joinClubMutation = useJoinClub(clubId as string)
  const { ModalComponent, setModalOpen, setModalClose } = useModal()
  const { toast } = useToast()

  const handleJoinSubmit = (message: string) => {
    joinClubMutation.mutate(message, {
      onSuccess: () => {
        toast({
          title: "성공",
          description: "클럽 가입 신청이 완료되었습니다!"
        })
        setModalClose()
      },
      onError: () => {
        toast({
          title: "오류",
          description: "클럽 가입 신청 중 오류가 발생했습니다.",
          variant: "destructive"
        })
      }
    })
  }

  if (!clubData) return null

  return (
    <div className="w-2xl mx-auto mb-[4.2rem]">
      <ClubIntroducePageHeader clubName={clubData?.name} />
      <ClubIntroduceDetailSection clubData={clubData} />

      <Button
        onClick={setModalOpen}
        className="w-[80%] flex items-center justify-center mx-auto">
        가입 신청
      </Button>

      <ModalComponent className="w-full h-fit my-auto inset-0">
        <JoinClubModal
          onClose={setModalClose}
          onSubmit={handleJoinSubmit}
        />
      </ModalComponent>
    </div>
  )
}

const ClubDetailPageWithErrorBoundary = () => (
  <ErrorBoundary>
    <ClubDetailPage />
  </ErrorBoundary>
)

export default ClubDetailPageWithErrorBoundary
