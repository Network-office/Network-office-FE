const FeedCommentsLoading = () => {
  return (
    <div className="w-[90%] h-[200px] mx-auto">
      <p className="text-lg font-semibold mt-2">댓글</p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-[20px] h-[20px]  my-auto rounded-lg bg-slate-200 animate-pulse" />
          <div className="font-semibold w-[60px] h-[20px] rounded-lg bg-slate-200 animate-pulse" />
        </div>
        <div className="mr-4 mb-1 w-[50px] h-[20px]  text-sm text-right rounded-lg bg-slate-200 animate-pulse" />
      </div>
      <div className="ml-6 w-[290px] h-[80px]  text-sm text-right rounded-lg bg-slate-200 animate-pulse" />
      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <div className="w-[20px] h-[20px]  my-auto rounded-lg bg-slate-200 animate-pulse" />
          <div className="font-semibold w-[50px] h-[20px] rounded-lg bg-slate-200 animate-pulse" />
        </div>
        <div className="mr-4 mb-1 w-[50px] h-[20px]  text-sm text-right rounded-lg bg-slate-200 animate-pulse" />
      </div>
      <div className="ml-6 w-[290px] h-[80px]  text-sm text-right rounded-lg bg-slate-200 animate-pulse" />
    </div>
  )
}

export default FeedCommentsLoading
