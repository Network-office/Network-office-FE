"use client"

import useModal from "@/_common/_hooks/useModal"
import SelectRegionModal from "./SelectRegionModal"
import Button from "@/_common/_components/Button"
interface FeedHeaderProps {
  nowPosition: string
  setNowRegion: (selectedRegion: string) => void
}

const FeedHeader = ({ nowPosition, setNowRegion }: FeedHeaderProps) => {
  const { ModalComponent, setModalOpen, setModalClose } = useModal()

  return (
    <>
      <div className="w-full h-[110px] bg-slate-100 flex items-center">
        <div className="flex gap-2 overflow-hidden h-[80px] items-center shrink-0 ml-4">
          <Button
            className="w-[70px] h-[70px] rounded-full"
            onClick={setModalOpen}>
            {nowPosition}
          </Button>
          <hr className="border-l-[1px] h-[80px] mx-4 border-black" />
          <Button className="w-[70px] h-[70px] rounded-full">버튼</Button>
          <Button className="w-[70px] h-[70px] rounded-full">버튼</Button>
          <Button className="w-[70px] h-[70px] rounded-full">버튼</Button>
        </div>
      </div>
      <ModalComponent>
        <SelectRegionModal
          setModalClose={setModalClose}
          setRegion={setNowRegion}
        />
      </ModalComponent>
    </>
  )
}

export default FeedHeader
