import NewClubListItem from "./NewClubListItem"
import useGetNewClubs from "../_hooks/_quries/useGetNewClubList"

const NewClubList = () => {
  const { data } = useGetNewClubs()

  return (
    <div className="w-[90%] mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.clubList.map((clubDetail) => (
          <NewClubListItem
            key={clubDetail.clubId}
            clubDetail={clubDetail}
          />
        ))}
      </div>
    </div>
  )
}

export default NewClubList
