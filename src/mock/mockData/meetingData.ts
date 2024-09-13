import { faker } from "@faker-js/faker"

export const meetingData = [
  {
    id: 1,
    author: "김황황",
    authorId: 1,
    title: `${faker.person.firstName()}과 함께하는 ${faker.vehicle.vehicle()}타기`,
    place: "서울 강남구 주노동 준오아파트 103동 ",
    date: "09.24",
    startTime: "14:00",
    endTime: "18:00",
    category: "스포츠",
    totalPeople: 10,
    nowPeople: 5,
    fee: 5000,
    detail: "이 모임은 함께 운동을 즐기기 위한 모임입니다.",
    lng: 127.027619,
    lat: 37.497942
  },
  {
    id: 2,
    author: faker.person.fullName(),
    authorId: 2,
    title: `${faker.person.firstName()}과 함께하는 ${faker.vehicle.vehicle()}타기`,
    place: "서울 강남구 주노동 준오아파트 103동 ",
    date: faker.date.future(),
    startTime: "14:00",
    endTime: "18:00",
    category: "스포츠",
    totalPeople: 10,
    nowPeople: 5,
    fee: 5000,
    detail: "이 모임은 함께 운동을 즐기기 위한 모임입니다.",
    lng: 127.047619,
    lat: 37.697942
  },
  {
    id: 3,
    author: faker.person.fullName(),
    authorId: 3,
    title: `${faker.person.firstName}과 함께하는 ${faker.vehicle.vehicle}타기`,
    place: "서울 강남구 주노동 준오아파트 103동 ",
    date: faker.date.future(),
    startTime: "14:00",
    endTime: "18:00",
    category: "스포츠",
    totalPeople: 10,
    nowPeople: 5,
    fee: 5000,
    detail: "이 모임은 함께 운동을 즐기기 위한 모임입니다.",
    lng: 127.027619,
    lat: 37.687942
  }
]
