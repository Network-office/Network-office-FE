"use client"

import Image from "next/image"

import Book from "~/icon/book.png"
import Volunteer from "~/icon/volunteer.png"
import Sports from "~/icon/sport.png"
import Field from "~/icon/field.png"
import Culture from "~/icon/culture.png"
import Travel from "~/icon/travel.png"
import Music from "~/icon/music.png"
import Coffee from "~/icon/coffee.png"

const CLUB_GENRE_ICON = [
  Sports,
  Book,
  Volunteer,
  Travel,
  Music,
  Field,
  Culture,
  Coffee
] as const

const CLUB_GENRE = [
  "스포츠",
  "독서",
  "봉사",
  "여행",
  "음악,춤",
  "업종",
  "문화",
  "사교"
]

const ClubGenreList = () => {
  return (
    <div className="flex justify-center items-center w-full my-4">
      <div className="w-[90%] max-w-2xl grid grid-cols-4 gap-4 px-4 rounded-lg py-4">
        {CLUB_GENRE.map((genre, index) => (
          <div
            className="flex flex-col items-center"
            key={index}>
            <button className="bg-blue-100 w-16 h-16 rounded-lg shadow-md flex items-center justify-center mb-2">
              <Image
                src={CLUB_GENRE_ICON[index]}
                alt={genre}
                width={40}
                height={40}
              />
            </button>
            <p className="text-center font-medium text-sm">{genre}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClubGenreList
