"use client"
import { useState } from "react"

import FeedHeader from "./_components/FeedHeader"
import FeedBoard from "./_components/FeedBoard"

const FeedPage = () => {
  const [nowRegion, setNowRegion] = useState("항동")

  return (
    <div>
      <FeedHeader
        nowPosition={nowRegion}
        setNowRegion={(selectedRegion: string) => setNowRegion(selectedRegion)}
      />
      <FeedBoard />
    </div>
  )
}

export default FeedPage
