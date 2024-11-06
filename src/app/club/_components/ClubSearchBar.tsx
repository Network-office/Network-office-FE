import Input from "@/_common/_components/Input"
import { Search } from "lucide-react"

const ClubSearchBar = () => {
  return (
    <div className="w-[90%] mx-auto my-4">
      <div className="w-[95%] h-[45px] mx-auto rounded-lg  border-black   bg-white drop-shadow-xl flex gap-2 justify-center items-center">
        <Input className="w-[80%] h-[70%] my-auto focus:outline-none" />
        <Search
          size={28}
          className="py-auto h-fit"
        />
      </div>
    </div>
  )
}
export default ClubSearchBar
