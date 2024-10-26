import LocalClubListItem from "./LocalClubListItem"
import useGetLocalClubs from "../_hooks/_quries/useGetLocalClubList"

const LocalClubList = () => {
  const { data } = useGetLocalClubs()

  return (
    <div className="w-[90%] mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.clubList.map((clubDetail) => (
          <LocalClubListItem
            key={clubDetail.clubId}
            clubDetail={clubDetail}
          />
        ))}
      </div>
    </div>
  )
}

export default LocalClubList
