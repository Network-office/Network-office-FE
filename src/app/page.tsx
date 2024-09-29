"use client"

import { useToast } from "@/_common/_hooks/useToast"
import { Button } from "@/components/ui/button"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          content: <p className="mx-auto">ㅅㅂ</p>
        })
      }}>
      Add to calendar
    </Button>
  )
}
