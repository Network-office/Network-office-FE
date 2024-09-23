import { createContext, ReactNode, useContext, useMemo } from "react"

interface UserSignInContextProps {
  nickname: string
  social_id: string
  social_type: "kakao" | "naver"
  profile_image_url: string
  phone_number: `010-${string}-${string}`
}

const UserSignInContext = createContext<UserSignInContextProps | null>(null)
export const useUserSignInContext = () => {
  const context = useContext(UserSignInContext)
  if (!context) {
    throw new Error("UserSignInContext not provided")
  }
  return context
}

export const UserSignInProvider = ({ children }: { children: ReactNode }) => {
  const context = useUserSignInContext()

  const contextValue = useMemo(() => {
    return {
      context
    }
  }, [context])

  const { nickname, phone_number, social_id, social_type, profile_image_url } =
    contextValue.context

  return (
    <UserSignInContext.Provider
      value={{
        nickname,
        phone_number,
        profile_image_url,
        social_id,
        social_type
      }}>
      {children}
    </UserSignInContext.Provider>
  )
}
