import Avatar from "@/_common/_components/Avatar"
import { Pencil } from "lucide-react"

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
    <div className=" border-[1px] mt-[10px] w-[320px] py-[10px] mx-auto rounded-2xl shadow-lg">
      <div className="h-[120px] flex justify-between mr-[20px] mt-[10px]">
        <Avatar
          src={profileImgSrc}
          className="w-[120px] h-[120px] ml-[15px]"
          fallbackName={nickName}
        />
        <button className="mt-[10px] flex items-start ">
          <Pencil />
        </button>
      </div>
      <p className="w-[300px] ml-[25px] text-blue-500 mx-auto text-2xl font-medium mb-3 mt-[20px]">
        {nickName}
      </p>
      <p className="w-[300px] ml-[25px] mx-auto text-gray-500 text-sm mt-[10px]">
        {profileIntroduce}
      </p>
    </div>
  )
}

export default ProfileSection
