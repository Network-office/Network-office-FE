"use client"

import { useFormContext } from "react-hook-form"
import { useState } from "react"
import { Search } from "lucide-react"
import searchPlace from "@/_common/_utils/searchPlace"
import PlaceTypes from "@/_common/_utils/searchPlace/type"
interface MeetingTitleInputProps {
  onNextStep: () => void
}

const MeetingPlace = ({ onNextStep }: MeetingTitleInputProps) => {
  const { setValue } = useFormContext()
  const [inputKeyword, setInputKeyWord] = useState("")
  const [searchResult, setSearchResult] = useState<PlaceTypes[]>()

  const searchBarhandle = async () => {
    if (inputKeyword.length > 1) {
      const result = await searchPlace(inputKeyword)
      setSearchResult(result)
    }
  }

  const onClickPlaceButton = (selectedPlace: PlaceTypes) => {
    setValue("place", selectedPlace)
    setInputKeyWord("")
    setSearchResult([])
    onNextStep()
  }
  return (
    <div className="w-screen">
      <h1 className="mx-4 text-[28px] font-bold text-center mt-12">
        모임 장소는 어디가 좋을까요?
      </h1>
      <h2 className="text-center text-slate-400 text-sm"></h2>
      <div className="w-[300px] h-[30px] border-b-2 flex mx-auto mt-14">
        <input
          onChange={(event) => setInputKeyWord(event.target.value)}
          onKeyUp={searchBarhandle}
          placeholder="동네 이름을 적어주세요!"
          className="w-[280px] h-[30px] border-b-2 focus:outline-none pl-3 text-2xl pb-2"
        />
        <Search className="mb-2 mr-1" />
      </div>
      <ul className="w-[75%] h-[80%] mx-auto">
        {searchResult?.map((resultItem, index) => (
          <li
            className="w-full h-[50px] border-[0.8px] border-slate-300 flex items-center pl-3"
            key={index}>
            <button onClick={() => onClickPlaceButton(resultItem)}>
              {resultItem.jibunAddress}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default MeetingPlace
