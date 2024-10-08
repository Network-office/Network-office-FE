import React from "react"
import {
  DropdownMenu as ShadcnDropBox,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel
} from "./shadcn_DropBox"

interface DropBoxItem {
  label: string
  onClick: () => void
}

interface DropBoxProps {
  title?: string
  triggerText: string
  items: DropBoxItem[]
  triggerClassName?: string
  contentClassName?: string
  labelClassName?: string
  itemClassName?: string
}

const DropBox = ({
  title,
  triggerText,
  items,
  triggerClassName,
  contentClassName,
  labelClassName,
  itemClassName
}: DropBoxProps) => {
  return (
    <ShadcnDropBox>
      <DropdownMenuTrigger asChild>
        <button className={triggerClassName}>{triggerText}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={contentClassName}>
        {title && (
          <DropdownMenuLabel className={labelClassName}>
            {title}
          </DropdownMenuLabel>
        )}
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className={itemClassName}>
            <button onClick={item.onClick}>{item.label}</button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </ShadcnDropBox>
  )
}

export default DropBox
