import { faker } from "@faker-js/faker"
import { users, TOTAL_MEETINGS } from "./commonData"

export const meetingData = Array.from(
  { length: TOTAL_MEETINGS },
  (_, index) => {
    const user = users[index % users.length]
    const isFirstMeeting = index === 0

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
      category: "스포츠",
      totalPeople: faker.number.int({ min: 5, max: 20 }),
      nowPeople: faker.number.int({ min: 1, max: 5 }),
      fee: 5000,
      detail: "이 모임은 함께 운동을 즐기기 위한 모임입니다.",
      lng: isFirstMeeting ? 127.027619 : faker.location.longitude(),
      lat: isFirstMeeting ? 37.497942 : faker.location.latitude()
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
