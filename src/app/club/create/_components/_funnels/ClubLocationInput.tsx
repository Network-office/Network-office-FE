"use client"

import { useState } from "react"
import { useFormContext } from "react-hook-form"
import Input from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"
import searchPlace from "@/_common/_utils/searchPlace"
import PlaceTypes from "@/_common/_utils/searchPlace/type"

interface ClubLocationInputProps {
  onNextStep: () => void
}

const ClubLocationInput = ({ onNextStep }: ClubLocationInputProps) => {
  const { setValue } = useFormContext()

  const [searchResult, setSearchResult] = useState<PlaceTypes[] | null>(null)

  const onClickSearchResult = (selectedResult: PlaceTypes) => {
    setSearchResult(null)
    setValue("location", selectedResult.distance)
    onNextStep()
  }

  const handleLocationChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputKeyword = e.target.value
    if (inputKeyword.length > 1) {
      const result = await searchPlace(inputKeyword)
      setSearchResult(result)
    } else {
      setSearchResult(null)
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold text-center mb-4">
        동호회 활동 지역을 입력해주세요
      </h1>
      <Input
        onChange={handleLocationChange}
        placeholder="예: 서울시 강남구"
        className="w-[80%] mx-auto mt-16"
      />
      <ul className="w-[85%] h-fit mt-1 mx-auto rounded-sm shadow-2xl">
        {searchResult &&
          searchResult?.length > 0 &&
          searchResult.map((item) => (
            <li
              className="w-full px-3 py-2 text-lg bg-white border-[1px]"
              key={`%${item.x}${item.y}${item.distance}`}>
              <button onClick={() => onClickSearchResult(item)}>
                {item.jibunAddress}
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ClubLocationInput
