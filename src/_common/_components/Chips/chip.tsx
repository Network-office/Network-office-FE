import { ChipProps } from "./types"
import { cn } from "@/lib/utils"
const Chip = ({
  label,
  color = "default",
  className = "",
  isSelected = false,
  onSelect
}: ChipProps) => {
  const colorClasses = {
    default: isSelected
      ? "bg-white text-gray-700 border-gray-700"
      : "bg-gray-300 text-gray-700 border-gray-200",
    primary: isSelected
      ? "bg-blue-100 text-blue-700 border-blue-100"
      : "bg-gray-100 text-slate-500",
    secondary: isSelected
      ? "bg-purple-100 text-purple-700 border-purple-100"
      : "bg-gray-100 text-slate-500"
  }

  const onClickChip = () => {
    if (onSelect) {
      onSelect(label)
    }
  }

  return (
    <div
      onClick={onClickChip}
      className={cn(
        "text-center items-center px-2 py-1 rounded-full text-sm font-medium mr-2 mb-2 shadow-2xl border-[1px] cursor-pointer transition-colors duration-200",
        colorClasses[color],
        className
      )}>
      {label}
    </div>
  )
}

export default Chip
