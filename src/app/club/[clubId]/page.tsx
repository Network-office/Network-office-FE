"use client"

import ClubIntroducePageHeader from "./_components/ClubIntroduceHeader"
import ClubIntroduceDetailSection from "./_components/ClubIntroduceDetailSection"
import Button from "@/_common/_components/Button"
import book from "~/icon/book.png"
import coffee from "~/icon/coffee.png"
import music from "~/icon/music.png"

const clubData = {
  name: "서울 독서 모임",
  images: [book, coffee, music],
  schedule: "매주 토요일 오후 2시",
  fee: "월 10,000원",
  organizer: "김철수",
  memberCount: 15,
  maxMembers: 20,
  description: "함께 책을 읽고 토론하는 즐거운 독서 모임입니다."
}

const ClubDetailPage = () => {
  const handleJoinClick = () => {}

  return (
    <div className="w-2xl mx-auto mb-[4.2rem]">
      <ClubIntroducePageHeader clubName={clubData.name} />
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
