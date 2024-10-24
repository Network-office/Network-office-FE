import Link from "next/link"

interface MeetingCreateSuccessProps {}

const MeetingCreateSuccess = ({}: MeetingCreateSuccessProps) => {
  return (
    <div>
      <h1 className="mx-4 text-[28px] font-bold text-center mt-[150px]">
        모임 생성 완료!
      </h1>
      <Link
        className="w-[40%] h-[40px] mt-[200px] mx-auto bg-black rounded-md flex justify-center text-center py-auto"
        href={"/meeting"}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </Link>
    </div>
  )
}
export default MeetingCreateSuccess
