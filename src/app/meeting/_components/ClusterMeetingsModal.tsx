
import { MeetingPositionTypes } from "../types"

interface ClusterMeetingsModalProps {
  meetings: MeetingPositionTypes[]
  onMeetingClick: (meeting: MeetingPositionTypes) => void
}

const ClusterMeetingsModal = ({
  meetings,
  onMeetingClick
}: ClusterMeetingsModalProps) => {
  return (
    <div className="bg-white w-screen max-h-[70vh] overflow-y-auto rounded-t-lg border-t-2 border-slate-400">
      <h2 className="text-xl font-bold text-center py-4 border-b">
        이 지역의 모임 ({meetings.length})
      </h2>
      {meetings.map((meeting, index) => (
        <div
          key={index}
          onClick={() => onMeetingClick(meeting)}
          className="p-4 hover:bg-gray-50 cursor-pointer border-b">
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
  )
}

export default ClusterMeetingsModal
