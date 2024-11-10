import Topbar from "@/_common/_components/Topbar"

const MyPageTopBar = () => {
  return (
    <Topbar
      className="bg-green-300 border-none"
      leftContent={
        <div className="flex gap-4">
          <Topbar.BackLink />
          <p className="font-semibold text-xl text-white">마이페이지</p>
        </div>
      }
    />
  )
}

export default MyPageTopBar
