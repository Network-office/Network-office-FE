import { LocateFixed, Plus } from "lucide-react"
import getUserGeolocation from "@/_common/_utils/getUserGeolocation"
import { getUserGeolocationResponseType } from "@/_common/_utils/getUserGeolocation/types"
import Link from "next/link"

interface FootBarProps {
  setMapPosition: (result: { lat: number; lng: number }) => void
}

const FootBar = ({ setMapPosition }: FootBarProps) => {
  const onClicksetMapToMyPosition = async () => {
    try {
      const result = await getUserGeolocation()

      if (result.ok && result.position) {
        setMapPosition(result.position)
      }
    } catch (error) {
      const geolocationError = error as getUserGeolocationResponseType
      if (geolocationError?.errorMessage) {
        alert(
          "위치 접근이 거부되었습니다. 브라우저 설정에서 위치 권한을 허용한 후 다시 시도해주세요."
        )
      } else {
        alert("위치 정보를 가져오는 데 실패했습니다.")
      }
    }
  }

  return (
    <div className="absolute w-full bottom-20 left-0 z-10 px-4 flex justify-between ">
      <button onClick={onClicksetMapToMyPosition}>
        <LocateFixed
          className="bg-slate-100 rounded-full px-1 shadow-2xl"
          size={48}
        />
      </button>
      <Link href="meeting/create">
        <Plus
          className="bg-slate-100 rounded-full px-1 shadow-2xl"
          size={48}
        />
      </Link>
    </div>
  )
}

export default FootBar
