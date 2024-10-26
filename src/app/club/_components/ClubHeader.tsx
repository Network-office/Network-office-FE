"use client"
import Topbar from "@/_common/_components/Topbar"

const ClubHeader = () => {
  return (
    <Topbar
      className="py-3"
      leftContent={<h1 className="text-lg font-semibold">서울 구로구</h1>}
      rightContent={
        <div className="flex gap-1">
          <Topbar.ProfileLink />
          <Topbar.AlarmLink />
        </div>
      }
    />
  )
}
export default ClubHeader
