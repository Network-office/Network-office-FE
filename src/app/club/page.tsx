"use client"

import ClubHeader from "./_components/ClubHeader"
import ClubGenreList from "./_components/ClubGenreList"
import ClubSearchBar from "./_components/ClubSearchBar"
import NewClubList from "./_components/NewClubList"

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
      <NewClubList />
    </div>
  )
}

export default ClubPage
