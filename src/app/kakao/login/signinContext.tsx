import { createContext, ReactNode, useContext, useMemo, useState } from "react"

interface UserSignInContextProps {
  nickname: string
  social_id: string
  social_type: "kakao" | "naver"
  profile_image_url: string
  phone_number: `010-${string}-${string}`
}

interface UserSignInContextValue extends UserSignInContextProps {
  setUser: (user: UserSignInContextProps) => void
}

const UserSignInContext = createContext<UserSignInContextValue | null>(null)

export const useUserSignInContext = () => {
  const context = useContext(UserSignInContext)
  if (!context) {
    throw new Error("UserSignInContext not provided")
  }
  return context
}

export const UserSignInProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserSignInContextProps>({
    nickname: "",
    social_id: "",
    social_type: "kakao",
    profile_image_url: "",
    phone_number: "010-0000-0000"
  })

  const contextValue = useMemo(() => {
    return {
      ...user,
      setUser
    }
  }, [user])

  return (
    <UserSignInContext.Provider value={contextValue}>
      {children}
    </UserSignInContext.Provider>
  )
}
