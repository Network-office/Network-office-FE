interface MeetingCategoriesProps {
  onNextStep: () => void
}

const category = ["스포츠", "술", "맛집", "봉사", "영화/연극", "기타"]

const MeetingCategory = ({ onNextStep }: MeetingCategoriesProps) => {
  return (
    <div>
      <h1 className="mx-4 text-[24px] font-bold text-center mt-8">
        모임 카테고리를 선택해주세요.
      </h1>
      <div className="grid grid-cols-2 w-[300px] mx-auto mt-6">
        {category.map((item, index) => (
          <button
            key="1"
            className="w-[140px] h-[140px] mb-2 rounded-md bg-blue-400">
            {item}
          </button>
        ))}
      </div>
      <button
        className="w-[70%] h-[40px] mt-4 mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
        onClick={onNextStep}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </button>
    </div>
  )
}
export default MeetingCategory
