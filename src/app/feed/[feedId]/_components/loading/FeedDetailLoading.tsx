import Topbar from "@/_common/_components/Topbar"

const FeedDetailLoading = () => {
  return (
    <div>
      <Topbar
        className="bg-green-300 border-none"
        leftContent={
          <div className="flex gap-4">
            <Topbar.BackLink />
            <span />
          </div>
        }
      />
      <span className="w-[90%] h-[500px] bg-slate-200 animate-pulse" />
    </div>
  )
}

export default FeedDetailLoading
