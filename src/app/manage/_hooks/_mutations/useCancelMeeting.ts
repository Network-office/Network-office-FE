import { useMutation, useQueryClient } from "@tanstack/react-query"
import cancelMeeting from "../../_api/cancelMeeting"

const useCancelMeeting = (meetingId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ reason }: { reason: string }) =>
      cancelMeeting(meetingId, reason),
    onMutate: async ({ reason }) => {
      await queryClient.cancelQueries({ queryKey: ["meeting", meetingId] })

      const previousMeeting = queryClient.getQueryData(["meeting", meetingId])

      queryClient.setQueryData(["meeting", meetingId], (old: any) => {
        if (!old) return old
        return {
          ...old,
          status: "CANCELLED",
          cancelReason: reason
        }
      })

      return { previousMeeting }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["meeting", meetingId] })
    }
  })
}

export default useCancelMeeting
