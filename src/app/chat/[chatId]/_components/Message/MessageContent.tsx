import { cn } from "@/lib/utils"
import { MessageBubble, MessageBubbleProps } from "./MessageBubble"

export interface MessageContentProps extends Omit<MessageBubbleProps, "align"> {
  timestamp?: number
  align?: "left" | "right"
}

export const MessageContent = ({
  text,
  align = "left",
  timestamp
}: MessageContentProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        align === "right" ? "items-end" : "items-start"
      )}>
      <div
        className={cn(
          "flex gap-2 items-end",
          align === "right" ? "flex-row-reverse" : ""
        )}>
        <MessageBubble
          align={align}
          text={text}
        />
        {timestamp && (
          <p className="text-xs h-fit text-slate-500">
            {new Date(timestamp).toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  )
}
