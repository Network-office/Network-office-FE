import Avatar from "@/_common/_components/Avatar"

interface ProfileSectionProps {
  profileImgSrc: string
  nickName: string
  profileIntroduce: string
}

const ProfileSection = ({
  profileImgSrc,
  nickName,
  profileIntroduce
}: ProfileSectionProps) => {
  return (
    <div>
      <div className="w-screen h-[180px]">
        <div className="relative bg-blue-400 w-full h-[100px]">
          <Avatar
            src={profileImgSrc}
            className="w-[140px] h-[140px] absolute top-[30px] left-1/2 -translate-x-1/2"
            fallbackName={nickName}
          />
        </div>
      </div>
      <p className="w-full text-xl font-medium mb-3 mt-[20px] text-center">
        {nickName}
      </p>
      <p className="w-[300px] mx-auto text-gray-500 text-center text-sm mt-[10px]">
        {profileIntroduce}
      </p>
      <div className="mt-[30px] border-b-2 w-[80%] mx-auto"></div>
    </div>
  )
}

export default ProfileSection
