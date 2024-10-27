import sportIcon from "~/icon/sport.png"
import coffeeIcon from "~/icon/coffee.png"
import bookIcon from "~/icon/book.png"
import cultureIcon from "~/icon/culture.png"
import musicIcon from "~/icon/music.png"
import travelIcon from "~/icon/travel.png"
import volunteerIcon from "~/icon/volunteer.png"
import foodIcon from "~/icon/food.png"

type CategoryType = {
  [key: string]: { color: string; icon: string }
}

const category: CategoryType = {
  스포츠: { color: "#4BB4DE", icon: sportIcon.src },
  파티: { color: "#FFB6C1", icon: musicIcon.src },
  커피: { color: "#E6BE8A", icon: coffeeIcon.src },
  맛집: { color: "#FFD700", icon: foodIcon.src },
  봉사: { color: "#98FB98", icon: volunteerIcon.src },
  문화생활: { color: "#FFA07A", icon: cultureIcon.src },
  스터디: { color: "#87CEFA", icon: bookIcon.src },
  산책: { color: "#DDA0DD", icon: travelIcon.src }
}

interface MarkerIconProps {
  categoryName: string
}

const MarkerIcon = ({ categoryName }: MarkerIconProps) => {
  const { color, icon } = category[categoryName]

  return (
    <svg
      width="40"
      height="45"
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
        fill={color}
      />
      <image
        href={icon}
        x="6"
        y="5"
        width="19"
        height="19"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  )
}

export default MarkerIcon
