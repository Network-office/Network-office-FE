const MeetingOptionModal = () => {
  return (
    <div className="w-[90%] h-[280px] z-50 bg-white left-1/2 top-[30%] -translate-x-1/2 -translate-y-[30%] absolute rounded-sm  shadow-xl">
      <h1 className="text-xl px-4 py-4 font-medium ">모임 관리</h1>
      <div className="flex flex-col gap-4">
        <button className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
          게시글 수정하기
        </button>
        <button className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
          모집 마감하기
        </button>
        <button className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
          모임 파토하기
        </button>
      </div>
    </div>
  )
}

export default MeetingOptionModal
