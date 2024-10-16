import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const ClubSearchBar = () => {
  return (
    <div className="w-[90%] mx-auto my-4">
      <div className="w-[95%] h-[50px] mx-auto rounded-lg  border-black   bg-white drop-shadow-xl flex gap-2 justify-center items-center">
        <Input className="w-[80%] h-[60%] my-auto focus:outline-none" />
        <Search
          size={24}
          className="py-auto h-fit"
        />
      </div>
    </div>
  )
}
export default ClubSearchBar
