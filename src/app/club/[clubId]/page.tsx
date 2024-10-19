"use client"

import { useParams } from "next/navigation"
import useGetClubDetail from "./_hooks/_quries/useGetClubDetail"
import ClubIntroducePageHeader from "./_components/ClubIntroduceHeader"
import ClubIntroduceDetailSection from "./_components/ClubIntroduceDetailSection"
import Button from "@/_common/_components/Button"

const ClubDetailPage = () => {
  const { clubId } = useParams()
  const { data: clubData } = useGetClubDetail(clubId as string)

  const handleJoinClick = () => {}

  if (!clubData) return null
  return (
    <div className="w-2xl mx-auto mb-[4.2rem]">
      <ClubIntroducePageHeader clubName={clubData?.name} />
      <ClubIntroduceDetailSection clubData={clubData} />

      <Button
        onClick={handleJoinClick}
        className="w-[80%] flex items-center justify-center mx-auto">
        가입 신청
      </Button>
    </div>
  )
}

export default ClubDetailPage
