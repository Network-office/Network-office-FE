"use client"

import useNaverMap from "@/_common/_hooks/useNaverMap"

const Meeting = () => {
  const { NaverMapComponent } = useNaverMap({ lat: 37, lng: 127 })
  return (
    <div>
      <NaverMapComponent />
    </div>
  )
}

export default Meeting
