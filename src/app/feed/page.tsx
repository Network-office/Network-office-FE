"use client"
import { useState } from "react"
import { Star } from "lucide-react"

import FeedHeader from "./_components/FeedHeader"
import FeedBoard from "./_components/FeedBoard"

const FeedPage = () => {
  const [nowRegion, setNowRegion] = useState("항동")
  return (
    <div className="w-svh h-svh">
      <FeedHeader
        nowPosition={nowRegion}
        setNowRegion={(selectedRegion: string) => setNowRegion(selectedRegion)}
      />
      <div className="flex w-[90%] mt-3 mb-5 h-[40px] px-4 mx-auto rounded-lg bg-slate-100 gap-2">
        <Star className="my-auto w-4 h-4 text-yellow-400" />
        <p className="flex items-center font-medium">
          {nowRegion}의 인기글을 모두 모았어요!
        </p>
      </div>
      <FeedBoard region={nowRegion} />
    </div>
  )
}

export default FeedPage
