import Button from "@/_common/_components/Button"

const FeedHeader = () => {
  return (
    <div className="w-full h-[110px] bg-slate-100 flex items-center">
      <div className="flex gap-2 overflow-hidden h-[80px] items-center shrink-0 ml-4">
        <Button className="w-[70px] h-[70px] rounded-full">버튼</Button>
        <hr className="border-l-[1px] h-[80px] mx-4 border-black" />
        <Button className="w-[70px] h-[70px] rounded-full">버튼</Button>
        <Button className="w-[70px] h-[70px] rounded-full">버튼</Button>
        <Button className="w-[70px] h-[70px] rounded-full">버튼</Button>
      </div>
    </div>
  )
}

export default FeedHeader
