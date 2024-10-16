const CLUB_GENRE = [
  "스포츠",
  "독서",
  "봉사",
  "여행",
  "음악,춤",
  "업종",
  "문화",
  "사교"
]

const ClubGenreList = () => {
  return (
    <div className="w-[90%] h-[200px] mx-auto">
      <h2 className="text-lg font-medium">동호회 분류</h2>
      <div className="w-[95%] mx-auto grid grid-cols-4">
        {CLUB_GENRE.map((genre) => (
          <div
            className="w-fit my-1"
            key={genre}>
            <button className="bg-yellow-400 w-[65px] h-[65px] mx-auto rounded-lg"></button>
            <p className="text-center">{genre}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClubGenreList
