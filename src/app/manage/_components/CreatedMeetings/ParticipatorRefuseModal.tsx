"use client"
import { useState } from "react"

interface ParticipateRefuseModalProps {
  onExitModalHandle: () => void
  onSubmitModalHandle: (refuseText: string) => void
}

const ParticipateRefuseModal = ({
  onExitModalHandle,
  onSubmitModalHandle
}: ParticipateRefuseModalProps) => {
  const [refuseText, setRefuseText] = useState("")

  return (
    <div className="absolute w-[90%] h-[270px] bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md shadow-lg px-2 py-2">
      <h1 className="mx-4 mt-2 text-xl font-medium">거절 사유 메세지 보내기</h1>
      <textarea
        onChange={(event) => setRefuseText(event.target.value)}
        className="w-[92%] h-[60%] flex justify-center focus:outline-none border-[1px] rounded-sm mx-auto mt-3 text-lg px-2 py-2"
        placeholder="100자 이하로 작성해주세요."
      />
      <div className="flex justify-between mx-auto w-[90%] mt-3">
        <button
          onClick={() => onSubmitModalHandle(refuseText)}
          className="w-[47%] h-[40px] rounded-sm shadow-lg bg-green-300 text-white">
          전송
        </button>
        <button
          onClick={onExitModalHandle}
          className="w-[47%] h-[40px] rounded-sm shadow-lg bg-red-300 text-white">
          취소
        </button>
      </div>
    </div>
  )
}

export default ParticipateRefuseModal
