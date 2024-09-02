import { cva } from "class-variance-authority"

export const avatarVariants = cva("rounded-full bg-white", {
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12"
    },
    status: {
      online: "ring-2 ring-green-500",
      offline: "ring-2 ring-gray-300"
    }
  },
  defaultVariants: {
    size: "md"
  }
})
