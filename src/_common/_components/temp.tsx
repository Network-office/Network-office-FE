import { useEffect } from "react"

export default function Temp() {
  useEffect(() => {
    throw new Error("error")
  }, [])
  return <div></div>
}
