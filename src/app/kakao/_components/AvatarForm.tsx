import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { useState, useRef, useEffect } from "react"
import { useSignInContext } from "@/app/kakao/_context/signinContext"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

const GuestBookAvatarList = [
  {
    key: "Abby",
    label: "Abby",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Abby"
  },
  {
    key: "Peanut",
    label: "Peanut",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Peanut"
  },
  {
    key: "Angel",
    label: "Angel",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Angel"
  },
  {
    key: "Jasmine",
    label: "Jasmine",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Jasmine"
  },
  {
    key: "Kiki",
    label: "Kiki",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Kiki"
  },
  {
    key: "Kitty",
    label: "Kitty",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Kitty"
  },
  {
    key: "Lily",
    label: "Lily",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Lily"
  },
  {
    key: "Mia",
    label: "Mia",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Mia"
  },
  {
    key: "Gracie",
    label: "Gracie",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Gracie"
  },
  {
    key: "Bear",
    label: "Bear",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Bear"
  },
  {
    key: "Boots",
    label: "Boots",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Boots"
  },
  {
    key: "Chester",
    label: "Chester",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Chester"
  },
  {
    key: "Garfield",
    label: "Garfield",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Garfield"
  },
  {
    key: "Lola",
    label: "Lola",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Lola"
  },
  {
    key: "Callie",
    label: "Callie",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Callie"
  },
  {
    key: "Felix",
    label: "Felix",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Felix"
  },
  {
    key: "Charlie",
    label: "Charlie",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Charlie"
  },
  {
    key: "Jack",
    label: "Jack",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Jack"
  },
  {
    key: "Dusty",
    label: "Dusty",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Dusty"
  },
  {
    key: "Trouble",
    label: "Trouble",
    icon: "https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Trouble"
  }
]

const AvatarForm = () => {
  const { setUser, user } = useSignInContext()
  const [avatarSrc, setAvatarSrc] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const data = useSession()
  const defaultImage = data.data?.user?.image || ""

  useEffect(() => {
    const randomAvatar =
      GuestBookAvatarList[
        Math.floor(Math.random() * GuestBookAvatarList.length)
      ]
    setAvatarSrc(randomAvatar.icon)
    setUser((prevUser) => ({
      ...prevUser,
      profile_image_url: randomAvatar.icon
    }))
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setAvatarSrc(base64String)
        setUser((prevUser) => ({
          ...prevUser,
          profile_image_url: base64String
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md text-center bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          {user.nickname}님의 프로필 사진
        </h1>
        <p className="text-base text-gray-600 mb-6">
          프로필 사진을 선택해 주세요
        </p>
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src={avatarSrc || defaultImage}
              alt="userImage"
            />
          </Avatar>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl text-base font-medium transition duration-200">
            사진 업로드
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AvatarForm
