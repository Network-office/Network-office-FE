import { Loader } from "lucide-react"

export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Loader className="animate-pulse w-[20%] h-[20%]" />
      <p className="text-sm text-slate-400">
        로딩중입니다 잠시만 기다려주세요.
      </p>
    </div>
  )
}
