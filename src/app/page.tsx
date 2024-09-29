"use client"

import { useToast } from "@/_common/_hooks/useToast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM"
        })
      }}>
      Add to calendar
    </Button>
  )
}
