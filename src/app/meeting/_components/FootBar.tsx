import { LocateFixed, Plus } from "lucide-react"

const FootBar = () => {
  return (
    <div className="absolute w-full bottom-12 left-0 z-10 px-4 flex justify-between ">
      <button>
        <LocateFixed
          className="bg-white rounded-full px-1"
          size={44}
        />
      </button>
      <button>
        <Plus
          className="bg-white rounded-full px-1"
          size={44}
        />
      </button>
    </div>
  )
}

export default FootBar
