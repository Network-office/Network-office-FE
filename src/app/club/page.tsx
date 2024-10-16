"use client"

import ClubHeader from "./_components/ClubHeader"
import ClubGenreList from "./_components/ClubGenreList"
import ClubSearchBar from "./_components/ClubSearchBar"

const ClubPage = () => {
  return (
    <div className="w-screen">
      <ClubHeader
        onCreateClick={() => {
          console.log("create")
        }}
      />
      <ClubSearchBar />
      <ClubGenreList />
    </div>
  )
}

export default ClubPage
