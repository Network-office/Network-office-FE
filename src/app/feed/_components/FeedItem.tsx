"use client"

import Link from "next/link"
import { Eye, ThumbsUp } from "lucide-react"

interface FeedItemProps {
  feedId: string
  category: string
  title: string
  description: string
  region: string[]
  date: string
  views: number
  like: number
}

const FeedItem = ({
  feedId,
  category,
  title,
  description,
  region,
  date,
  views,
  like
}: FeedItemProps) => {
  return (
    <Link href={`/feed/${feedId}`}>
      <div className="mx-4 py-1 pl-3 pr-1 w-full border-b-[1px] border-t-[1px] border-gray-400">
        <div className="flex">
          <p className="text-[#668AFF]">{category}</p>
          <p className="mx-2"> -</p>
          <p className="text-gray-500 text-sm flex items-center">{region[2]}</p>
        </div>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-[16px]">
          {title}
        </p>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap text-[14px]">
          {description}
        </p>
        <div className="flex text-[12px] justify-between mx-1">
          <div className="flex gap-1">
            <ThumbsUp className="w-4 my-auto mt-[1px]" />
            <p className="my-auto mr-2">{like}</p>
            <Eye className="w-4 my-auto mt-[1px]" />
            <p className="my-auto">{views}</p>
          </div>
          <p className="mt-1 mr-1">{date}</p>
        </div>
      </div>
    </Link>
  )
}

export default FeedItem
