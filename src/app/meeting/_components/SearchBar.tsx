"use client"
import { useState } from "react"
import { Search, AlignJustifyIcon } from "lucide-react"
import PlaceTypes from "@/_common/_utils/searchPlace/type"
import searchPlace from "@/_common/_utils/searchPlace"

interface SearchBarProps {
  setMapPosition: (newPosition: { lat: number; lng: number }) => void
}

const SearchBar = ({ setMapPosition }: SearchBarProps) => {
  const [inputKeyword, setInputKeyWord] = useState("")
  const [searchResult, setSearchResult] = useState<PlaceTypes[] | null>(null)

  const searchBarhandle = async () => {
    if (inputKeyword.length > 1) {
      const result = await searchPlace(inputKeyword)
      setSearchResult(result)
    } else {
      setSearchResult(null)
    }
  }
  const onClickSearchResult = (selectedResult: PlaceTypes) => {
    setSearchResult(null)
    setInputKeyWord("")
    setMapPosition({
      lat: selectedResult.y as number,
      lng: selectedResult.x as number
    })
  }

  return (
    <div>
      <div className="w-[85%] h-[40px] mt-3 mx-auto rounded-lg  border-black  bg-white drop-shadow-lg flex gap-2 justify-center items-center">
        <AlignJustifyIcon size={24} />
        <input
          value={inputKeyword}
          onChange={(event) => setInputKeyWord(event.target.value)}
          onKeyUp={searchBarhandle}
          className="w-[70%] border-[1px] rounded-sm px-2"
        />
        <Search
          size={24}
          className="py-auto h-fit"
        />
      </div>
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

export default SearchBar
