import useAcceptNewParticipator from "../../_hooks/_mutations/useAcceptNewParticipator"

interface ParticipateItemProps {
  nickName: string
  message: string
  meetingId: number
  userId: number
}

const ParticipateItem = ({
  nickName,
  message,
  meetingId,
  userId
}: ParticipateItemProps) => {
  const { mutate } = useAcceptNewParticipator(meetingId, userId)

  return (
    <div className="border-b-[1px] border-t-[1px] h-[180px] shadow-md mb-1 rounded-sm">
      <div className="flex justify-between pt-3">
        <div className="flex mx-5  mb-2">
          <div className="rounded-full w-[32px] h-[32px] bg-slate-300" />
          <p className="flex items-center ml-3 mb-1font-semibold text-xl">
            {nickName}
          </p>
        </div>

        <div className="flex justify-center gap-2 mr-5">
          <button
            onClick={() => mutate()}
            className="w-[60px] h-[32px] text-white bg-green-300 shadow-lg rounded-md">
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
    </div>
  )
}

export default ParticipateItem
