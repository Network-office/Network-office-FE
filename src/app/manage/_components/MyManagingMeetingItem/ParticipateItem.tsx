interface ParticipateItemProps {
  nickName: string
  message: string
}

const ParticipateItem = ({ nickName, message }: ParticipateItemProps) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex mx-5  mb-2">
          <div className="rounded-full w-[36px] h-[36px] bg-slate-300" />
          <p className="flex items-center ml-3 mb-1font-semibold text-2xl">
            {nickName}
          </p>
        </div>

        <div className="flex justify-center gap-2 mr-4">
          <button className="w-[60px] h-[32px] text-white bg-green-300 shadow-lg rounded-md">
            수락
          </button>
          <button className="w-[60px] h-[32px] text-white bg-red-300 shadow-lg rounded-md">
            거절
          </button>
        </div>
      </div>
      <p className="w-[90%] h-[110px] px-2 py-2 mx-auto border-[1px]">
        {message}
      </p>
    </>
  )
}

export default ParticipateItem
