import { Search, AlignJustifyIcon } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="w-[85%] h-[40px] mt-3 mx-auto rounded-lg  border-black  bg-white drop-shadow-xl flex gap-2 justify-center items-center">
      <AlignJustifyIcon size={24} />
      <input className="w-[70%] border-[1px] rounded-sm px-2" />
      <Search
        size={24}
        className="py-auto h-fit"
      />
    </div>
  )
}

export default SearchBar
