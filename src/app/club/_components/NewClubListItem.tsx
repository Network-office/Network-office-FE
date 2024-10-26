import Link from "next/link"

import Image from "next/image"
import { ClubItemTypes } from "../types"

interface NewClubListItemProps {
  clubDetail: ClubItemTypes
}

const NewClubListItem = ({ clubDetail }: NewClubListItemProps) => {
  return (
    <Link
      href={`/club/${clubDetail.clubId}`}
      className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        {clubDetail.imageUrl ? (
          <Image
            src={clubDetail.imageUrl}
            alt={clubDetail.name}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </div>
      <div className="p-4 pb-2">
        <h2 className="text-xl font-semibold mb-2">{clubDetail.name}</h2>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <p className="font-bold text-sm">{clubDetail.location.district}</p>
            <span className="inline-block text-blue-800 text-sm font-bold">
              {clubDetail.genre}
            </span>
            <p className="text-xs font-semibold">동호회</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-yellow-500">
              {clubDetail.meetingFrequency}
            </p>
            <p className="text-gray-500 text-sm font-bold">정모</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewClubListItem
