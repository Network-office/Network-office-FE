import NewClubListItem from "./NewClubListItem"

const clubs = [
  {
    clubId: "1231",
    name: "string",
    imageUrl: null,
    meetingFrequency: "매주 수요일",
    genre: "스포츠"
  },
  {
    clubId: "12312",
    name: "스포츠 스포츠",
    imageUrl: null,
    meetingFrequency: "매주 화요일",
    genre: "스포츠"
  },
  {
    clubId: "123412",
    name: "스포츠 스포츠",
    imageUrl: null,
    meetingFrequency: "매주 화요일",
    genre: "스포츠"
  },
  {
    clubId: "1142312",
    name: "스포츠 스포츠",
    imageUrl: null,
    meetingFrequency: "매주 화요일",
    genre: "스포츠"
  }
]

const NewClubList = () => {
  return (
    <div className="w-[90%] mx-auto mb-16">
      <h1 className="text-2xl font-bold mb-4">새로 생긴 동호회</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club) => (
          <NewClubListItem
            key={club.clubId}
            clubDetail={club}
          />
        ))}
      </div>
    </div>
  )
}

export default NewClubList
