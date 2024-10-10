import { useMutation, useQueryClient } from "@tanstack/react-query"
import expelParticipant from "../../_api/expelParticipant"

const useExpelParticipant = (meetingId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, reason }: { userId: string; reason: string }) => {
      return expelParticipant(meetingId, userId, reason)
    },
    onMutate: async ({ userId }) => {
      await queryClient.cancelQueries({ queryKey: ["meeting", meetingId] })
      const previousMeeting = queryClient.getQueryData(["meeting", meetingId])

      queryClient.setQueryData(["meeting", meetingId], (old: any) => {
        if (!old || !old.confirmedParticipants) {
          return old
        }
        return {
          ...old,
          confirmedParticipants: old.confirmedParticipants.filter(
            (p: any) => p.userId !== userId
          ),
          nowPeople: old.nowPeople - 1
        }
      })

      return { previousMeeting }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["meeting", meetingId] })
    }
  })
}

export default useExpelParticipant
