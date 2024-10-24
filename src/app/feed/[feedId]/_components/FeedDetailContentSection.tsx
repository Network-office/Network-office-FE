import { timestampToString } from "@/_common/_utils/timestampToString"

interface FeedDetailContentSectionProps {
  author: string
  category: string
  description: string
  region: string[]
  date: string
}

const FeedDetailContentSection = ({
  author,
  category,
  description,
  region,
  date
}: FeedDetailContentSectionProps) => {
  return (
    <div>
      <table className="w-[350px] mx-auto px-2 mt-2 text-[14px]">
        <tbody>
          <tr>
            <td className="text-[#A1824A] p-2">작성자</td>
            <td>{author}</td>
            <td className="text-[#A1824A] p-2">동네</td>
            <td>{region[2]}</td>
          </tr>
          <tr>
            <td className="text-[#A1824A] p-2">카테고리</td>
            <td>{category}</td>
            <td className="text-[#A1824A] p-2">작성시간 </td>
            <td>{timestampToString(date)}</td>
          </tr>
        </tbody>
      </table>
      <hr className="w-[90%] mx-auto mt-3" />
      <div className="mt-[30px] w-[350px] mx-auto min-h-[400px]">
        <span>{description}</span>
      </div>
    </div>
  )
}

export default FeedDetailContentSection
