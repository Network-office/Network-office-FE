import { MeetingInform } from "@/app/meeting/types"

interface ClusterModalProps {
  meetings: Array<MeetingInform>
  onClose: () => void
  onMeetingClick: (meeting: MeetingInform) => void
}

const ClusterModal = ({
  meetings,
  onClose,
  onMeetingClick
}: ClusterModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">
            이 지역의 모임 ({meetings.length})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 모임 리스트 */}
        <div className="max-h-[60vh] overflow-y-auto">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              onClick={() => onMeetingClick(meeting)}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600">
                    {meeting.category.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium">{meeting.title}</h3>
                  <p className="text-sm text-gray-500">{meeting.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClusterModal
