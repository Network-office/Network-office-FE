"use client"

import ClubHeader from "./_components/ClubHeader"
import ClubGenreList from "./_components/ClubGenreList"
import ClubSearchBar from "./_components/ClubSearchBar"
import NewClubList from "./_components/NewClubList"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LocalClubList from "./_components/LocalClubList"
import ErrorBoundary from "@/_common/_components/ErrorBoundary"
import BaseErrorContent from "@/_common/_components/ErrorBoundary/BaseErrorContent"

const ClubPage = () => {
  return (
    <div className="w-screen mb-16">
      <ClubHeader />
      <ClubSearchBar />
      <ClubGenreList />
      <Tabs
        className="w-full mt-2"
        defaultValue="newClub">
        <TabsList className="w-[90%] mx-auto flex items-center">
          <TabsTrigger
            className="w-[50%]"
            key={"newClub"}
            value={"newClub"}>
            {"새로 생긴 동호회"}
          </TabsTrigger>
          <TabsTrigger
            className="w-[50%]"
            key={"newClub2"}
            value={"newClub2"}>
            {"우리 지역 동호회"}
          </TabsTrigger>
        </TabsList>
        <ErrorBoundary
          fallback={
            <BaseErrorContent
              status={500}
              className="w-[90%] h-[400px] mt-2 shadow-xl mx-auto rounded-xl"
            />
          }>
          <TabsContent value="newClub">
            <NewClubList />
          </TabsContent>
          <TabsContent value="newClub2">
            <LocalClubList />
          </TabsContent>
        </ErrorBoundary>
      </Tabs>
    </div>
  )
}

export default ClubPage
