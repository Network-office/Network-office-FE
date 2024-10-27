"use client"

import { useState, useEffect } from "react"
import useModal from "@/_common/_hooks/useModal"
import useNaverMap from "@/_common/_hooks/useNaverMap"
import Topbar from "@/_common/_components/Topbar"
import SearchBar from "./_components/SearchBar"
import FootBar from "./_components/FootBar"
import MeetingInformModal from "./_components/MeetingInformModal"
import useGetMeetingList from "./_hooks/queries/useGetMeetingList"

const Meeting = () => {
  const { data: meetingList } = useGetMeetingList()
  const [selectedMeeting, setSelectedMeeting] = useState(null)
  const { ModalComponent, setModalOpen } = useModal()

  const handleMarkerClick = (meeting: any) => {
    setSelectedMeeting(meeting)
    setModalOpen()
  }
  const { NaverMapComponent, setMapPosition, setMeetingMarkers } = useNaverMap(
    { lat: 37.497942, lng: 127.027619 },
    meetingList,
    { markerClickHandler: handleMarkerClick }
  )

  useEffect(() => {
    if (meetingList) {
      setMeetingMarkers(meetingList)
    }
  }, [setMeetingMarkers, meetingList])

  return (
    <div className="w-screen h-screen relative text-black">
      <div className="absolute z-10">
        <Topbar
          className="w-screen h-[14px] mt-2 border-0"
          rightContent={
            <div className="flex gap-2">
              <Topbar.ProfileLink />
              <Topbar.AlarmLink />
            </div>
          }
        />
        <SearchBar
          setMapPosition={(newPosition) => {
            setMapPosition(newPosition.lat, newPosition.lng)
          }}
        />
      </div>
      <NaverMapComponent className="absolute top-0 z-0" />
      <FootBar
        setMapPosition={(result) => setMapPosition(result.lat, result.lng)}
      />
      <ModalComponent className="bottom-0 z-50">
        {selectedMeeting && (
          <MeetingInformModal meetingData={selectedMeeting} />
        )}
      </ModalComponent>
    </div>
  )
}

export default Meeting
