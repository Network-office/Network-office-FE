"use client"

import { useState } from "react"
import useModal from "@/_common/_hooks/useModal"
import useNaverMap from "@/_common/_hooks/useNaverMap"
import Topbar from "@/_common/_components/Topbar"
import SearchBar from "./_components/SearchBar"
import FootBar from "./_components/FootBar"
import MeetingInformModal from "./_components/MeetingInformModal"

const mockData = [
  {
    id: 1,
    lat: 37,
    lng: 127,
    title: "테니스 칠 사람 구해요",
    place: "서울시 구로구 연동로",
    fare: "시간당 3천원",
    totalPeople: 10,
    vacancy: 2,
    startTime: "00:00",
    endTime: "24:00"
  },
  {
    id: 2,
    lat: 37.001,
    lng: 127.002,
    title: "테니스 칠 사람 구해요",
    place: "서울시 구로구 연동로",
    totalPeople: 10,
    vacancy: 1,
    fare: "시간당 3천원",
    startTime: "00:00",
    endTime: "24:00"
  },
  {
    id: 3,
    lat: 37.005,
    lng: 127.003,
    title: "테니스 칠 사람 구해요",
    place: "서울시 구로구 연동로",
    totalPeople: 10,
    vacancy: 4,
    fare: "시간당 3천원",
    startTime: "00:00",
    endTime: "24:00"
  }
]

const Meeting = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null)

  const { ModalComponent, setModalOpen, setModalClose } = useModal()

  const handleMarkerClick = (meeting: any) => {
    setSelectedMeeting(meeting)
    setModalOpen()
  }

  const { NaverMapComponent, setMapPosition } = useNaverMap(
    { lat: 37, lng: 127 },
    mockData,
    { markerClickHandler: handleMarkerClick }
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
      <ModalComponent className="bottom-0">
        {selectedMeeting && (
          <MeetingInformModal meetingData={selectedMeeting} />
        )}
      </ModalComponent>
    </div>
  )
}

export default Meeting
