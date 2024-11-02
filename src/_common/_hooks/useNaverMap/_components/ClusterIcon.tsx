interface ClusterIconProps {
  meetingNumber: number
}

const ClusterIcon = ({ meetingNumber }: ClusterIconProps) => {
  return (
    <svg
      width="50"
      height="55"
      viewBox="0 0 30 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 0C6.71573 0 0 6.71573 0 15C0 26.25 15 45 15 45C15 45 30 26.25 30 15C30 6.71573 23.2843 0 15 0Z"
        fill="black"
      />
      <circle
        cx="15"
        cy="15"
        r="11"
        fill="white"
      />
      <circle
        cx="15"
        cy="15"
        r="10"
        fill="lightblue"
      />
      <text
        x="15"
        y="20"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
        fontFamily="Arial">
        {meetingNumber}
      </text>
    </svg>
  )
}

export default ClusterIcon
