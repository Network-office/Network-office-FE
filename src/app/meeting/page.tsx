"use client"

import useNaverMap from "@/_common/_hooks/useNaverMap"
import Topbar from "@/_common/_components/Topbar"

const mockData = { lat: 37, lng: 127 }

const Meeting = () => {
  const { NaverMapComponent, setMarkers } = useNaverMap({ lat: 37, lng: 127 }, [
    mockData
  ])
  return (
    <div className=" text-black">
      <Topbar
        rightContent={
          <div className="flex gap-2">
            <Topbar.ProfileLink />
            <Topbar.AlarmLink />
          </div>
        }
      />
      <NaverMapComponent />
    </div>
  )
}

export default Meeting
