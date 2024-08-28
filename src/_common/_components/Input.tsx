import { cn } from "../../lib/utils"
import { InputProps } from "./types"
import { Input as ShadcnInput } from "../../components/ui/input"

const Input = ({
  label,
  error,
  icon: Icon,
  iconPosition = "left",
  helper,
  className,
  ...props
}: InputProps) => {
  const InputClassName = cn(className, {
    "pl-10": Icon && iconPosition === "left",
    "pr-10": Icon && iconPosition === "right",
    "border-red-500": error
  })

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && iconPosition === "left" && (
          <Icon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        )}
        <ShadcnInput
          className={InputClassName}
          {...props}
        />
        {Icon && iconPosition === "right" && (
          <Icon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        )}
      </div>
      {helper && !error && (
        <p className="mt-1 text-sm text-gray-500">{helper}</p>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input
