import {
  DropdownMenu as ShadcnDropBox,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel
} from "./shadcn_DropBox"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DropBoxItem {
  label: string
  onClick: () => void
}

interface DropBoxProps {
  title?: string
  triggerText?: string
  items: DropBoxItem[]
  children?: React.ReactNode
  triggerClassName?: string
  contentClassName?: string
  labelClassName?: string
  itemClassName?: string
}

const DropBox = ({
  title,
  triggerText,
  items,
  children,
  triggerClassName,
  contentClassName,
  labelClassName,
  itemClassName
}: DropBoxProps) => {
  return (
    <ShadcnDropBox>
      <DropdownMenuTrigger asChild>
        <button className={cn(buttonVariants(), triggerClassName)}>
          {children || triggerText}
        </button>
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
