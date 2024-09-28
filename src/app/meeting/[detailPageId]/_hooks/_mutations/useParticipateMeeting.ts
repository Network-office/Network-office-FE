"use client"
import { useMutation } from "@tanstack/react-query"
import participateMeeting from "../../_api/participateMeeting"

interface useParticipateMeetingRequestTypes {
  meetingId: number
  userId: number
  message: string
}

const useParticipateMeeting = () => {
  const { mutate } = useMutation({
    mutationFn: ({
      meetingId,
      userId,
      message
    }: useParticipateMeetingRequestTypes) =>
      participateMeeting(meetingId, userId, message)
  })
  return { mutate }
}

export default useParticipateMeeting
