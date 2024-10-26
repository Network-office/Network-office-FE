import Topbar from "@/_common/_components/Topbar"

interface ClubIntroducePageHeaderProps {
  clubName: string
}

const ClubIntroducePageHeader = ({
  clubName
}: ClubIntroducePageHeaderProps) => {
  return (
    <div>
      <Topbar
        leftContent={
          <div className="flex items-center gap-2">
            <Topbar.BackLink />
            <h1 className="text-xl font-bold ">{clubName}</h1>
          </div>
        }
      />
    </div>
  )
}

export default ClubIntroducePageHeader
