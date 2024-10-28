"use client"
import { useRef, useEffect, useCallback } from "react"
import { MakersProps, NaverMapComponentProps } from "./types"
import { MeetingPositionTypes } from "@/app/meeting/types"
import NaverMapComponent from "./_components/NaverMapComponent"
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
    if (window.naver && window.naver.maps && window.naver.maps.Service) {
      initializeMap()
    }
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

  return {
    NaverMapComponent: useCallback(
      (props: NaverMapComponentProps) => (
        <NaverMapComponent
          {...props}
          ref={mapElement}
        />
      ),
      []
    ),
    setMeetingMarkers,
    setMapPosition
  }
}

export default useNaverMap
