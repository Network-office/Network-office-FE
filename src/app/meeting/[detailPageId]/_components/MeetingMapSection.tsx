"use client"
import useNaverMap from "@/_common/_hooks/useNaverMap"

interface MeetingMapSectionProps {
  lat: number
  lng: number
  place: string
  meetingId: number
}
const MeetingMapSection = ({
  lng,
  lat,
  place,
  meetingId
}: MeetingMapSectionProps) => {
  const { NaverMapComponent } = useNaverMap(
    {
      lat,
      lng
    },
    [{ id: meetingId, lat, lng }]
  )

  return (
    <>
      <h1 className="w-[350px] mx-auto mt-3 mb-3 font-semibold">위치</h1>
      <NaverMapComponent
        className="mx-auto"
        width={350}
        height={350}
      />
      <p className="w-[350px] mx-auto mt-3 text-slate-500">{place}</p>
    </>
  )
}

export default MeetingMapSection
