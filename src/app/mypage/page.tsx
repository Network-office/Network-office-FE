"use client"

import ProfileContentSection from "./_components/ProfileContentSection"
import MyPageTopBar from "./_components/MyPageTobbar"
import MyPageMenuSection from "./_components/MyPageMenuSection"
import { Suspense } from "react"
import ErrorBoundary from "@/_common/_components/ErrorBoundary"

const MyPageClient = () => {
  return (
    <div>
      <ErrorBoundary
        fallback={<div>문제가 발생했습니다. 잠시 후 다시 시도해주세요.</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <MyPageTopBar />
          <ProfileContentSection />
          <MyPageMenuSection />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default MyPageClient
