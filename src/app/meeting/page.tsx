"use client"

import useNaverMap from "@/_common/_hooks/useNaverMap"
import Topbar from "@/_common/_components/Topbar"
import SearchBar from "./_components/SearchBar"
import FootBar from "./_components/FootBar"

const mockData = [
  { lat: 37, lng: 127 },
  { lat: 37.001, lng: 127.002 },
  { lat: 37.005, lng: 127.003 }
]

const Meeting = () => {
  const { NaverMapComponent, setMarkers, setMapPosition } = useNaverMap(
    { lat: 37, lng: 127 },
    mockData
  )
  return (
    <div className="w-screen h-screen relative text-black">
      <div className="absolute z-10">
        <Topbar
          className=" w-screen h-[14px] mt-2 border-0"
          rightContent={
            <div className="flex gap-2">
              <Topbar.ProfileLink />
              <Topbar.AlarmLink />
            </div>
          }
        />
        <SearchBar />
      </div>
      <NaverMapComponent className="absolute top-0 z-0" />
      <FootBar
        setMapPosition={(result) => setMapPosition(result.lat, result.lng)}
      />
    </div>
  )
}

export default Meeting
