interface MeetingCategoriesProps {
  onNextStep: () => void
}

const category = ["스포츠", "술", "맛집"]

const MeetingCategory = ({ onNextStep }: MeetingCategoriesProps) => {
  return (
    <div>
      <h1>모임생성</h1>
      <div className="grid grid-cols-2">
        {category.map((item, index) => (
          <p key={index}>item</p>
        ))}
      </div>
      <button
        className="w-[70%] h-[30px] mx-auto bg-blue-300 rounded-md "
        onClick={onNextStep}>
        다음으로
      </button>
    </div>
  )
}
export default MeetingCategory
