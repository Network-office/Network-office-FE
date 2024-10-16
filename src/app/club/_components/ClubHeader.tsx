"use client"
import Topbar from "@/_common/_components/Topbar"

interface ClubHeaderProps {
  onCreateClick: () => void
}

const ClubHeader = ({ onCreateClick }: ClubHeaderProps) => {
  return (
    <Topbar
      className="py-3"
      leftContent={<h1 className="text-xl font-semibold">동호회</h1>}
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
