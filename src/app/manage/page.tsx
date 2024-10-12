"use client"
import CreatedMeetings from "./_components/CreatedMeetings"
import Participate from "./_components/ParticipatingMeetings"

const Manage = () => {
  return (
    <div className="w-screen h-screen">
      <CreatedMeetings />
      <Participate />
    </div>
  )
}

export default Manage
