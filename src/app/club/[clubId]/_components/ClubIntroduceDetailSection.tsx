import Image from "next/image"
import Carousel from "@/_common/_components/Carousel"

interface ClubData {
  images: string[]
  schedule: string
  fee: string
  organizer: string
  memberCount: number
  maxMembers: number
  description: string
}

const ClubIntroduceDetailSection = ({ clubData }: { clubData: ClubData }) => {
  return (
    <div className="pt-4 pb-2 px-4">
      <Carousel
        showNavBar
        navBarClassName="mt-2"
        className="mb-6 border-[0.5px] rounded-lg shadow-lg">
        {clubData.images.length > 0 &&
          clubData.images.map((image, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={image}
                alt={`Club image ${index + 1}`}
                width={500}
                height={250}
                objectFit="cover"
              />
            </Carousel.Slide>
          ))}
      </Carousel>

      <p className="mb-2 mt-8 px-2 min-h-[300px] border-t-[1px] pt-4 pb-12">
        {clubData.description}
      </p>

      <div className="space-y-4 px-2 mt-2 border-y-2 py-3">
        <div className="flex justify-between">
          <span className="font-semibold">정기 일정</span>
          <span>{clubData.schedule}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">회비</span>
          <span>{clubData.fee}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">모임 주최자</span>
          <span>{clubData.organizer}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">인원</span>
          <span>
            {clubData.memberCount}/{clubData.maxMembers}명
          </span>
        </div>
      </div>
    </div>
  )
}

export default ClubIntroduceDetailSection
