import { faker } from "@faker-js/faker"
import { users, TOTAL_MEETINGS, generateUserData } from "./commonData"

const generateRandomCoordinate = (base: number): number => {
  const randomOffset = (Math.random() - 0.5) * 0.4
  return Number((base + randomOffset).toFixed(5))
}

const categories = [
  "파티",
  "커피",
  "맛집",
  "봉사",
  "문화생활",
  "스터디",
  "산책"
]

export const meetingData = Array.from(
  { length: TOTAL_MEETINGS },
  (_, index) => {
    const user = users[index % users.length]
    const isFirstMeeting = index === 0
    const totalPeople = faker.number.int({ min: 5, max: 20 })
    const nowPeople = faker.number.int({ min: 1, max: totalPeople })

    const confirmedParticipants = Array.from({ length: nowPeople }, () => {
      const participantId = faker.string.uuid()
      return generateUserData(participantId)
    })

    return {
      id: index + 1,
      author: user.nickName,
      authorId: user.userId,
      status: "모집중",
      title: `${faker.person.firstName()}과 함께하는 ${faker.vehicle.vehicle()}타기`,
      place: "서울 강남구 주노동 준오아파트 103동 ",
      date: isFirstMeeting ? "09.24" : faker.date.future().toISOString(),
      startTime: "14:00",
      endTime: "18:00",
      category: categories[Math.floor(Math.random() * categories.length)],
      totalPeople,
      nowPeople,
      fee: 5000,
      detail: "이 모임은 함께 운동을 기 위한 모임입니다.",
      lng: generateRandomCoordinate(127.027619),
      lat: generateRandomCoordinate(37.497942),
      confirmedParticipants
    }
  }
)

meetingData[0] = {
  ...meetingData[0],
  id: 1,
  authorId: "1",
  author: users[0].nickName,
  lng: 127.027619,
  lat: 37.497942
}

meetingData[1] = {
  ...meetingData[1],
  id: 2,
  authorId: "1",
  author: users[0].nickName,
  lng: 127.024619,
  lat: 37.497942
}

meetingData[2] = {
  ...meetingData[2],
  id: 3,
  authorId: "1",
  author: users[0].nickName,
  lng: 127.024619,
  lat: 37.457942
}

meetingData[3] = {
  ...meetingData[3],
  id: 4,
  authorId: "2",
  author: users[0].nickName,
  lng: 127.024619,
  lat: 37.457942,
  nowPeople: 2,
  confirmedParticipants: [
    {
      userId: "1",
      nickName: "참여자1",
      profileImg: null,
      profileIntroduce: "",
      participatedMeetingList: []
    },
    {
      userId: "6",
      nickName: "참여자2",
      profileImg: null,
      profileIntroduce: "",
      participatedMeetingList: []
    }
  ]
}

meetingData[4] = {
  ...meetingData[4],
  id: 5,
  authorId: "2",
  author: users[0].nickName,
  lng: 127.024619,
  lat: 37.457942,
  nowPeople: 3,
  confirmedParticipants: [
    {
      userId: "1",
      nickName: "참여자1",
      profileImg: null,
      profileIntroduce: "",
      participatedMeetingList: []
    },
    {
      userId: "6",
      nickName: "참여자2",
      profileImg: null,
      profileIntroduce: "",
      participatedMeetingList: []
    },
    {
      userId: "8",
      nickName: "참여자3",
      profileImg: null,
      profileIntroduce: "",
      participatedMeetingList: []
    }
  ]
}
