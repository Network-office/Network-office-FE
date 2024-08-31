import Script from "next/script"
import { useRef } from "react"

interface NaverMapProps {
  posX: number
  posY: number
  width?: number
  height?: number
}

const NaverMap = ({ posX, posY, width = 800, height = 800 }: NaverMapProps) => {
  const mapElement = useRef(null)

  const initializeMap = () => {
    const { naver } = window
    if (!mapElement.current || !naver) return

    const location = new naver.maps.LatLng(posX, posY)
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true
    }

    new naver.maps.Map(mapElement.current, mapOptions)
  }
  return (
    <>
      <div
        ref={mapElement}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <Script
        id="naver"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERMAP_API_CLIENT_ID}`}
        onReady={initializeMap}
      />
    </>
  )
}

export default NaverMap
