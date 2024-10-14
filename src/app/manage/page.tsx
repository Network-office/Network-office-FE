"use client"

import { useState } from "react"
import Accordion from "@/_common/_components/Accordion"
import CreatedMeetings from "./_components/CreatedMeetings"
import Participate from "./_components/ParticipatingMeetings"

const Manage = () => {
  const [myParticipaiteMeetingNum, setMyParticipaiteMeetingNum] = useState(0)
  const [myCreatedMeetingNum, setMyCreatedMeetingNum] = useState(0)

  return (
    <div className="w-screen h-fit px-4 mb-12">
      <Accordion
        type="multiple"
        defaultValue={["participate"]}>
        <Accordion.Item value="participate">
          <Accordion.Trigger className="w-full">
            <p className="text-lg font-semibold">{`내가 참여 중인 모임 ${myParticipaiteMeetingNum > 0 ? `(${myParticipaiteMeetingNum})` : ""}`}</p>
          </Accordion.Trigger>
          <Accordion.Content>
            <Participate
              setMyParticipaiteMeetingNum={(num: number) =>
                setMyParticipaiteMeetingNum(num)
              }
            />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="createds">
          <Accordion.Trigger>
            <p className="text-lg font-semibold">{`내가 생성한 모임 ${myCreatedMeetingNum > 0 ? `(${myCreatedMeetingNum})` : ""}`}</p>
          </Accordion.Trigger>
          <Accordion.Content>
            <CreatedMeetings
              setMyCreatedMeetingNum={(num: number) =>
                setMyCreatedMeetingNum(num)
              }
            />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Manage
