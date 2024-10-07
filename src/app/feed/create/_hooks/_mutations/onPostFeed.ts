import { useMutation } from "@tanstack/react-query"
import { postFeed } from "../../_api/postFeed"
import { FeedFormTypes } from "../../types"
import { useToast } from "@/_common/_hooks/useToast"

const usePostFeed = () => {
  const { toast } = useToast()

  const { mutate } = useMutation({
    mutationFn: (feedData: FeedFormTypes) => postFeed(feedData),
    onSuccess: () => {
      toast({
        title: "피드 생성 성공",
        description: "새로운 피드가 성공적으로 생성되었습니다.",
        width: "250",
        height: "100"
      })
    },
    onError: () => {
      toast({
        title: "피드 생성 실패",
        description:
          "피드를 생성하는 중 오류가 발생했습니다.\n 다시 시도해 주세요.",
        width: "250",
        height: "100"
      })
    }
  })

  return { mutate }
}

export default usePostFeed
