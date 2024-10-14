"use client"
import Accordion from "@/_common/_components/Accordion"
import CreatedMeetings from "./_components/CreatedMeetings"
import Participate from "./_components/ParticipatingMeetings"

const Manage = () => {
  return (
    <div className="w-screen h-fit px-4 mb-12">
      <Accordion
        type="multiple"
        defaultValue={["participate"]}>
        <Accordion.Item value="participate">
          <Accordion.Trigger className="w-full">
            <p className="text-lg font-semibold">내가 참여 중인 모임</p>
          </Accordion.Trigger>
          <Accordion.Content>
            <Participate />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="createds">
          <Accordion.Trigger>
            <p className="text-lg font-semibold">내가 생성한 모임</p>
          </Accordion.Trigger>
          <Accordion.Content>
            <CreatedMeetings />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Manage
