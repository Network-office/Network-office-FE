"use client"

import useNaverMap from "@/_common/_hooks/useNaverMap"
import Topbar from "@/_common/_components/Topbar"

const mockData = { lat: 37, lng: 127 }

const Meeting = () => {
  const { NaverMapComponent, setMarkers } = useNaverMap({ lat: 37, lng: 127 }, [
    mockData
  ])
  return (
    <div className="relative text-black">
      <Topbar
        className="absolute w-screen z-10 h-[14px] border-0"
        rightContent={
          <div className="flex gap-2">
            <Topbar.ProfileLink />
            <Topbar.AlarmLink />
          </div>
        }
      />
      <NaverMapComponent className="absolute top-0 z-0" />
    </div>
  )
}

export default Meeting
