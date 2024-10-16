import { useMutation, useQueryClient } from "@tanstack/react-query"
import leaveMeeting from "../../_api/leaveMeeting"
import { useToast } from "@/_common/_hooks/useToast"

const useLeaveMeeting = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  const { mutate } = useMutation({
    mutationFn: ({
      userId,
      meetingId
    }: {
      userId: number
      meetingId: string
    }) => leaveMeeting(userId, meetingId),
    onMutate: async ({ userId, meetingId }) => {
      await queryClient.cancelQueries({
        queryKey: ["participatingMeetings", userId]
      })

      const previousMeetings = queryClient.getQueryData<any[]>([
        "participatingMeetings",
        userId
      ])

      queryClient.setQueryData<any[]>(
        ["participatingMeetings", userId],
        (old) =>
          old
            ? old.filter((meeting) => meeting.id.toString() !== meetingId)
            : []
      )

      return { previousMeetings }
    },
    onSuccess: () => {
      toast({
        title: "모임 나가기 성공",
        width: "180px",
        height: "80px",
        description: "모임에서 성공적으로 나갔습니다."
      })
    },
    onError: () => {
      toast({
        title: "모임 나가기 실패",
        width: "180px",
        height: "80px",
        description: "오류가 발생했습니다. 다시 시도해주세요."
      })
    }
  })

  return { mutate }
}

export default useLeaveMeeting
