import { cn } from "@/lib/utils"
export interface MessageBubbleProps {
  align: "left" | "right"
  text: string
}

const baseClasses =
  " relative bg-slate-300 w-fit p-2 rounded-xl text-xs after:absolute after:block after:w-0 after:h-0"
const triangleClasses = {
  left: "ml-4 after:top-1/2 after:-left-1.5 after:-translate-y-1/2 after:border-r-slate-300 after:border-r-8 after:border-y-transparent after:border-y-8 after:border-l-0",
  right:
    "mr-4 after:top-1/2 after:-right-1.5 after:-translate-y-1/2 after:border-l-slate-300 after:border-l-8 after:border-y-transparent after:border-y-8 after:border-r-0"
}

export const MessageBubble = ({ align, text }: MessageBubbleProps) => {
  return <p className={cn(baseClasses, triangleClasses[align])}>{text}</p>
}
