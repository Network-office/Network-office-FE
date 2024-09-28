import { cn } from "../../lib/utils"
import { InputProps } from "./types"
import { Input as ShadcnInput } from "../../components/ui/input"
import { forwardRef } from "react"

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon: Icon,
      iconPosition = "left",
      helper,
      className,
      labelClassName,
      helperClassName,
      errorClassName,
      ...props
    },
    ref
  ) => {
    const inputClassName = cn(className, {
      "pl-10": Icon && iconPosition === "left",
      "pr-10": Icon && iconPosition === "right",
      "border-red-500": error
    })

    return (
      <div className="w-full">
        {label && (
          <label
            className={cn(
              "block text-sm font-medium text-gray-700 mb-1",
              labelClassName
            )}>
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
            className={inputClassName}
            ref={ref}
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
          <p className={cn("mt-1 text-sm text-gray-500", helperClassName)}>
            {helper}
          </p>
        )}
        {error && (
          <p className={cn("mt-1 text-sm text-red-500", errorClassName)}>
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
