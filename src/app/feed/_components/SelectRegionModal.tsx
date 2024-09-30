import Button from "@/_common/_components/Button"
import { Search } from "lucide-react"

interface SelectRegionModalProps {
  setRegion: (nowRegion: string) => void
  setModalClose: () => void
}

const SelectRegionModal = ({
  setRegion,
  setModalClose
}: SelectRegionModalProps) => {
  const onClickRegionButton = (nowPosition: string) => {
    setRegion(nowPosition)
    setModalClose()
  }
  return (
    <div className="bg-white w-screen h-[170px] top-0 left-0 rounded-b-lg">
      <h1 className="pl-4 pt-4 text-xl font-semibold">동네 정하기</h1>
      <div className="w-[90%] h-[50px] mt-3 mx-auto  flex gap-2 justify-center items-center mb-2">
        <input className="w-[90%] h-[35px] border-[1px] rounded-sm px-2" />
        <Search
          size={24}
          className="py-auto h-fit"
        />
      </div>
      <div className="flex gap-1 mx-auto justify-center">
        <Button
          onClick={() => onClickRegionButton("전국")}
          className="w-[85px]">
          전국
        </Button>
        <Button
          onClick={() => onClickRegionButton("서울시")}
          className="w-[85px]">
          서울시
        </Button>
        <Button
          onClick={() => onClickRegionButton("구로구")}
          className="w-[85px]">
          구로구
        </Button>
        <Button
          onClick={() => onClickRegionButton("항동")}
          className="w-[85px]">
          항동
        </Button>
      </div>
    </div>
  )
}

export default SelectRegionModal
