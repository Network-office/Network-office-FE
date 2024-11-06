import React, { createContext, useContext, useState } from "react"

interface UserInfo {
  userId?: number
  nickName: string
  social_id: string
  social_type: string
  profileImg: string
  phone_number: string | null
}

interface UserSignInContextType {
  user: UserInfo
  setUser: React.Dispatch<React.SetStateAction<UserInfo>>
}

const UserSignInContext = createContext<UserSignInContextType | undefined>(
  undefined
)

export const UserSignInProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<UserInfo>({
    nickName: "",
    social_id: "",
    social_type: "",
    profileImg: "",
    phone_number: null
  })

  return (
    <UserSignInContext.Provider value={{ user, setUser }}>
      {children}
    </UserSignInContext.Provider>
  )
}

export const useSignInContext = () => {
  const context = useContext(UserSignInContext)
  if (context === undefined) {
    throw new Error(
      "useUserSignInContext must be used within a UserSignInProvider"
    )
  }
  return context
}
