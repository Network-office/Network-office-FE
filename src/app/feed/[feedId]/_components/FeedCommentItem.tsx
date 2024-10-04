"use client"

import Image from "next/image"

interface FeedCommentItemProps {
  author: string
  authorProfileImage: string | null
  detail: string
}

const FeedCommentItem = ({
  author,
  authorProfileImage,
  detail
}: FeedCommentItemProps) => {
  return (
    <div className="mt-2">
      <div className="flex gap-2">
        {authorProfileImage ? (
          <Image
            width={100}
            height={100}
            src={authorProfileImage}
            className="w-[16px] h-[16px] rounded-full  my-auto"
            alt="commentAuthorProfileImage"
          />
        ) : (
          <div className="w-[16px] h-[16px] rounded-full bg-gray-500 my-auto" />
        )}
        <p className="font-semibold">{author}</p>
      </div>
      <p className="ml-6">{detail}</p>
    </div>
  )
}

export default FeedCommentItem
