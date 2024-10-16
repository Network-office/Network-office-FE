"use client"

import ClubHeader from "./_components/ClubHeader"

const ClubPage = () => {
  return (
    <div>
      <ClubHeader
        onCreateClick={() => {
          console.log("create")
        }}
      />
    </div>
  )
}

export default ClubPage
