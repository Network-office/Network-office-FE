"use client"
import { useRef, useEffect, useCallback } from "react"
import { NaverMapComponentProps, MakersProps } from "./types"
import { MeetingPositionTypes } from "@/app/meeting/types"
import MarkerIcon from "./_components/MarkerIcon"
import ReactDOMServer from "react-dom/server"

const useNaverMap = (
  initial: { lat: number; lng: number },
  makers?: Array<MeetingPositionTypes>,
  makerOption?: {
    markerClickHandler: (makerDetail: any) => void
  }
) => {
  const mapElement = useRef(null)
  const mapRef = useRef<naver.maps.Map | null>(null)

  useEffect(() => {
    const checkNaverMapService = () => {
      if (window.naver && window.naver.maps && window.naver.maps.Service) {
        initializeMap()
      } else {
        setTimeout(checkNaverMapService, 100)
      }
    }
    checkNaverMapService()
  }, [])

  const initializeMap = () => {
    if (!mapElement.current || !naver) return

    const mapOptions = {
      center: new naver.maps.LatLng(initial.lat, initial.lng),
      zoom: 15,
      zoomControl: false
    }

    mapRef.current = new naver.maps.Map(mapElement.current, mapOptions)
    if (makers) {
      setMeetingMarkers(makers)
    }
  }

  const setMapPosition = (newLat: number, newLng: number) => {
    if (!mapRef.current || !naver) return
    mapRef.current.setCenter(new naver.maps.LatLng(newLat, newLng))
    mapRef.current.setZoom(15)
  }

  const setMeetingMarkers = (makers: MakersProps[]) => {
    if (!mapRef.current) {
      setTimeout(() => setMeetingMarkers(makers), 100)
      return
    }
    makers?.forEach((newMaker) => {
      const markerContent = ReactDOMServer.renderToString(
        <MarkerIcon categoryName={newMaker.category} />
      )

      const maker = new naver.maps.Marker({
        position: new naver.maps.LatLng(newMaker.lat, newMaker.lng),
        clickable: true,
        map: mapRef.current!,
        icon: {
          content: markerContent,
          size: new naver.maps.Size(30, 45),
          anchor: new naver.maps.Point(15, 45)
        }
      })

      maker.addListener("click", () => {
        makerOption?.markerClickHandler(newMaker)
      })
    })
  }

  const NaverMapComponent = useCallback(
    ({ className, width = 500, height = 1000 }: NaverMapComponentProps) => {
      return (
        <div
          className={className}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: `${width}px`,
            maxHeight: `${height}px`
          }}>
          <div
            ref={mapElement}
            style={{ width: `100%`, height: `100%` }}
          />
        </div>
      )
    },
    []
  )

  return {
    NaverMapComponent,
    setMeetingMarkers,
    setMapPosition
  }
}

export default useNaverMap
