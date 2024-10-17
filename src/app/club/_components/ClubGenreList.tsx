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
    <div className="w-[90%] h-[250px] mx-auto mt-2">
      <h2 className="text-lg font-medium">동호회 분류</h2>
      <div className="w-[95%] mx-auto grid grid-cols-4">
        {CLUB_GENRE.map((genre, index) => (
          <div
            className="w-fit my-1"
            key={genre}>
            <button className="bg-blue-100 px-2 py-2 w-[65px] h-[65px] shadow-2xl mx-auto rounded-lg">
              <Image
                src={CLUB_GENRE_ICON[index]}
                alt={genre}
                width={65}
                height={65}
              />
            </button>
            <p className="text-center">{genre}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClubGenreList
