import Topbar from "@/_common/_components/Topbar"

const FeedDetailLoading = () => {
  return (
    <div className="w-screen h-[600px]">
      <Topbar
        className="bg-green-300 border-none"
        leftContent={
          <div className="flex gap-4">
            <Topbar.BackLink />
            <span />
          </div>
        }
      />
      <span className="w-[90%] h-[400px] mx-auto rounded-lg mt-4 bg-slate-200 animate-pulse" />
    </div>
  )
}

export default FeedDetailLoading
